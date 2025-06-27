import React from "react";

export default function LogTiles( { meal } ) {
    return(
        <div className="meal flex flex-row gap-5 px-4 py-2  rounded-xl">
            <div className="image">
                <img src="dummy.jpeg" alt="Meal" className="aspect-square h-full w-auto bg-gray-200 rounded-lg" />
            </div>
            <div className="info w-full flex flex-col">
                <h1 className="font-bold"> { meal.heading } </h1>
                <h2 className="text-green-700 font-medium text-md"> { `${ meal.nutrition.calories} cal` } </h2>
            </div>
            <div className="quantity w-1/8"></div>
        </div>
    )
}