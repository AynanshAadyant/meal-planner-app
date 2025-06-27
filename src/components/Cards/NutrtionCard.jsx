import React from "react";

export default function NutritionCard( { nutrition, frequency } )
{
    return(
        <div className={`card w-1/${frequency} flex flex-col gap-2 px-4 pt-4 pb-15 border-1 border-gray-300 rounded-xl`}>
            <div className="heading"> 
                <h1 className="text-xl font-bold"> { nutrition.heading} </h1>
            </div>
            <div className="description">
                <h1 className="text-4xl font-extrabold"> { nutrition.description} </h1>
            </div>
        </div>
    )
}