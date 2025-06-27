import React from "react";
import LogTiles from "../Tiles/LogTiles";

export default function MealLog() {

    const meal = [
        {
            heading: "Chicken Salad",
            nutrition: {
                calories: 250
            }
        },
        {
            heading: "Apple",
            nutrition: {
                calories: 150
            }
        },
        {
            heading: "Spinach Salad",
            nutrition: {
                calories: 300
            }
        },
    ];

    const nutritionalLog = [ {
            nutrient : "Calories",
            value: 700, 
            unit: "kcal"
        },
        {
            nutrient : "Carbohydrates",
            value: 100,
            unit: "g"
        },
        {
            nutrient : "Protien",
            value: 30,
            unit: "g"
        },
        {
            nutrient : "Fats",
            value: 20,
            unit: "g"
        },
        {
            nutrient : "Fibre",
            value: 100,
            unit: "g"
        },
    ]

    const searchLog = [];
    return(
        <div className="main flex flex-col gap-10 p-5 w-full">
            <div className="heading">
                <h1 className="text-5xl font-bold"> Log a Meal </h1>    
            </div>            
            <div className="meal_type px-20 py-2 bg-green-700/30 flex flex-row gap-4 rounded-full justify-center items-center">
                <h1 className="text-green-900 bg-white px-10 py-1 rounded-full w-1/4 text-center"> Breakfast</h1>
                <h1 className="text-green-900 w-1/4 text-center"> Lunch</h1>
                <h1 className="text-green-900 w-1/4 text-center"> Dinner </h1>
                <h1 className="text-green-9 00 w-1/4 text-center"> Snacks </h1>
            </div>
            <div className="search">
                <input type="text" name="search" placeholder="Search for food" className="border-gray-400 border-1 rounded-lg px-5 py-2 text-gray-900 w-full" />
                <div className="search_resuls">
                    {
                        ( searchLog.length > 0 ) 
                        ?
                        searchLog.map( ( meal, index ) => <LogTiles meal={meal} key={index} />)
                        :
                        <p></p>
                    }
                </div>
            </div>
            <div className="today_log flex flex-col gap-4">
                <h1 className="text-xl font-bold"> Today's Log </h1>
                <div className="meals flex flex-col gap-2">
                    {
                        meal.map( (meal, index) => 
                            <LogTiles meal={meal} key={index} />
                        )
                    }
                </div>
            </div>
            <div className="summary flex flex-col gap-4">
                <h1 className="text-xl font-bold"> Summary </h1>
                <div className="nutrition_map flex flex-col gap-2">
                    {
                        nutritionalLog.map( (nutrition, index ) => 
                            <div className="log flex flex-row items-center" key="index">
                                <h1 className="w-full text-green-700 text-lg"> {nutrition.nutrient} </h1>
                                <h1 className="w-1/9"> {nutrition.value} {nutrition.unit} </h1>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className="save_meal w-1/2">
                <button className="bg-green-600/40 w-full rounded-full py-2 font-bold"> Save Meal </button>
            </div>
        </div>
    )
}