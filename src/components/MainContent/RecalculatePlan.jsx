import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import axios from "axios";
import backend_url from "../../constants/constant";

export default function RecalculatePlan() {

    const {user, getUser} = useOutletContext();
    const [adjustData, setAdjustData] = useState({
        activityLevel: user.activityLevel || '',
        dietaryGoal: user.goals || ''
    });
    const [ loading, setLoading ] = useState( false );

    const handleChange = (e) => {
        setAdjustData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async () => {
    try {
        setLoading( true );
        axios.post(
        `${backend_url}/api/v1/user/updateGoals`,
        adjustData,
        { withCredentials: true }
        )
        .then( (res) => {
            alert("Plan updated successfully!");
            getUser();
            setLoading( false );
        } )
        .catch( (err) => {
            alert("Something went wrong while updating" );
            setLoading( false );
            console.error( "ERROR: ", err );
        } )
        // You could also refresh user data here if needed
    } catch (err) {
        console.error("Error updating plan:", err);
        alert("Failed to update plan.");
    }
    };



    return (
        <>
            <div className="heading">
                <h1 className="text-4xl font-extrabold text-gray-800">Recalculate Plan</h1>
            </div>

            {/* Plan Summary */}
            <div className="plan_summary flex flex-col gap-4">
                <h2 className="text-xl font-semibold text-gray-700">Current Plan Summary</h2>

                <div className="content flex flex-col gap-3">
                    <div className="flex justify-between">
                        <span className="font-medium text-green-700">Target Calories:</span>
                        <span className="font-bold">{user.nutrition.calories} kcal</span>
                    </div>

                    <div className="macros_breakdown text-gray-600">
                        <span className="font-medium">Macros Breakdown:</span>
                        <ul className="flex gap-6 mt-1 pl-4 list-disc">
                            <li>Carbs: {Math.floor( user.nutrition.carbohydrates )} g</li>
                            <li>Protein: {Math.ceil(user.nutrition.protien)} g</li>
                            <li>Fats: {Math.floor(user.nutrition.fats)} g</li>
                        </ul>
                    </div>

                    <div className="goal flex justify-between">
                        <span className="font-medium text-green-700">Dietary Goal:</span>
                        <span className="font-semibold"> Weight {user.goals}</span>
                    </div>

                    <div className="activity-level flex justify-between">
                        <span className="font-medium text-green-700">Activity Level:</span>
                        <span className="font-semibold"> { user.activityLevel }</span>
                    </div>
                </div>
            </div>

            {/* Adjust Parameters */}
            <div className="adjust mt-4">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">Adjust Parameters</h2>
                <div className="form grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                        <label htmlFor="activityLevel" className="mb-1 font-medium text-gray-600">
                            Activity Level
                        </label>
                        <select
                            name="activityLevel"
                            className="p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                            value={adjustData.activityLevel}
                            onChange={ (e) => {
                                handleChange(e);
                            }}
                        >
                            <option value="Sedentary">Sedentary</option>
                            <option value="Light">Light</option>
                            <option value="Moderate">Moderate</option>
                            <option value="Active">Active</option>
                            <option value="Athlete">Athlete</option>
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="dietaryGoal" className="mb-1 font-medium text-gray-600">
                            Dietary Goal
                        </label>
                        <select
                            name="dietaryGoal"
                            className="p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                            value={adjustData.dietaryGoal}
                            onChange={ (e) => {
                                handleChange(e);
                            }}
                        >
                            <option value="Loss">Weight Loss</option>
                            <option value="Gain">Weight Gain</option>
                            <option value="Maintain">Weight Maintain</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Recalculate Button */}
            <div className="flex justify-end mt-6">
                <button 
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg shadow transition-transform duration-200 hover:scale-105"
                onClick={ (e) => {
                    e.preventDefault();
                    handleSubmit();
                }}
                >
                    { 
                        ( !loading ) ? "Recalculate" : "Recalculating"
                    }
                </button>
            </div>
        </>
    );
}
