import React from "react";

export default function MealTiles( { meal } ) {
    return(
        <div className="meal w-full flex flex-row px-8 py-2 border-1 border-gray-200 rounded-lg items-center">
            <div className="info flex flex-col w-full">
                <h1 className="font-bold"> {meal.heading} </h1>
                <h2 className="font-medium text-green-700"> {`${meal.nutrition.calories} kcal, ${meal.nutrition.protien}g protien`}</h2>
            </div>
            <div className="log w-1/6">
                <button className="bg-green-700/30 px-5 py-1 rounded-full font-bold text-gray-700"> Log as eaten </button>
            </div>
        </div>
    )
}