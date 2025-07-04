import React from "react";

export default function GroceryList() {
    const grocery = [
        {
            name: "Apple",
            quantity: 1,
            unit: "lb"
        },
        {
            name: "Apple",
            quantity: 1,
            unit: "lb"
        },
        {
            name: "Apple",
            quantity: 1,
            unit: "lb"
        },
        {
            name: "Apple",
            quantity: 1,
            unit: "lb"
        },
        {
            name: "Apple",
            quantity: 1,
            unit: "lb"
        },
        {
            name: "Apple",
            quantity: 1,
            unit: "lb"
        },
        {
            name: "Apple",
            quantity: 1,
            unit: "lb"
        },
        {
            name: "Apple",
            quantity: 1,
            unit: "lb"
        },
    ];

    return( 
        <>
            <div className="heading flex flex-col gap-2">
                <h1 className="text-5xl font-extrabold"> Grocery List </h1>
                <h2 className="text-lg text-green-800"> Based on your meal plan for the month </h2>
            </div>
            <div className="search_box">
                <input type="text" placeholder="Search for items" className="px-5 py-3 text-lg rounded-lg w-full bg-green-700/30"></input>
            </div>
            <div className="list flex flex-col gap-2 select-none">
                {
                    ( grocery.length > 0 ) 
                    ?
                    grocery.map( ( grocery, index ) => 
                        <div className="grocery_item flex flex-col w-full px-10 py-1 rounded-xl cursor-pointer hover:shadow-xl" key={index}>
                            <h1 className="text-lg font-bold"> { grocery.name } </h1>
                            <h1 className="text-green-900"> { grocery.quantity} { grocery.unit } </h1>
                        </div>
                    )
                    :
                    <div className="empty_list">
                        <h1> No Grocery items yet </h1>
                    </div>
                }
            </div>
        </>
    )
}