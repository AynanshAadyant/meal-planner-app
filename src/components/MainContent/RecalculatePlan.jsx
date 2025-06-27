import React from "react";

export default function RecalculatePlan() {
    const sample = {
        targetCalories: 2200,
        carbsData: 200,
        protienData: 150,
        fatsData: 100,
        dietaryGoal: "Weight Loss",
    };

    return (
        <div className="main flex flex-col gap-8 bg-white  w-full max-w-5xl mx-auto mt-8">
            <div className="heading">
                <h1 className="text-4xl font-extrabold text-gray-800">Recalculate Plan</h1>
            </div>

            {/* Plan Summary */}
            <div className="plan_summary flex flex-col gap-4">
                <h2 className="text-xl font-semibold text-gray-700">Current Plan Summary</h2>

                <div className="content flex flex-col gap-3">
                    <div className="flex justify-between">
                        <span className="font-medium text-green-700">Target Calories:</span>
                        <span className="font-bold">{sample.targetCalories} kcal</span>
                    </div>

                    <div className="macros_breakdown text-gray-600">
                        <span className="font-medium">Macros Breakdown:</span>
                        <ul className="flex gap-6 mt-1 pl-4 list-disc">
                            <li>Carbs: {sample.carbsData}g</li>
                            <li>Protein: {sample.protienData}g</li>
                            <li>Fats: {sample.fatsData}g</li>
                        </ul>
                    </div>

                    <div className="goal flex justify-between">
                        <span className="font-medium text-green-700">Dietary Goal:</span>
                        <span className="font-semibold">{sample.dietaryGoal}</span>
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
                <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg shadow transition-transform duration-200 hover:scale-105">
                    Recalculate
                </button>
            </div>
        </div>
    );
}
