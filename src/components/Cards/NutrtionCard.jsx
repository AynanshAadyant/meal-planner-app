import React from "react";

export default function NutritionCard( { nutrition, frequency } )
{
    return(
        <div className={`card  grid grid-cols-5 gap-2 px-4 pt-4 pb-15 border-1 border-gray-300 rounded-xl`}>
            <div className="nutrition flex flex-col gap-2">
                <div className="heading"> 
                <h1 className="text-2xl font-extrabold"> { nutrition.heading} </h1>
                </div>
                <div className="description">
                    <h1 className="text-3xl font-extrabold "> { `${nutrition.description} ${nutrition.unit}`} </h1>
                </div>
            </div>
        </div>
    )
}