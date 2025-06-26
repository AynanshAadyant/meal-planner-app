import React from "react";

export default function FeatureCard( {content, frequency} ) {
    return(
        <div className={`flex flex-col gap-2 border-1 border-gray-200 p-4 rounded-xl w-1/${frequency} pb-10 select-none hover:scale-105 hover:shadow-xl`}>
            <div className="icon">
                <h1 className="text-2xl "> I </h1>
            </div>
            <div className="title h-1/4">
                <h1 className="text-xl font-bold "> { content.heading} </h1>
            </div>
            <div className="description h-1/2">
                <h1 className="text-green-700"> { content.description } </h1>
            </div>
        </div>
    )
}