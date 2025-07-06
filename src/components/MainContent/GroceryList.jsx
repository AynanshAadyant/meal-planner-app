import axios from "axios";
import React, { useState, useEffect } from "react";

export default function GroceryList() {
    

    const [ grocery, setGrocery ] = useState( [] );
    const date = new Date();

    const getGrocery = () => {
        axios.post( "http://localhost:5500/api/v1/ration/get", {
             year : date.getFullYear(),
            month: date.getMonth() + 1
        },
        {
            withCredentials: true
        })
        .then( (res) => {
            setGrocery( res.data.body );
        })
        .catch( (err) => {
            console.error( "ERROR while fetching grocer ", err );
            alert( "Something went wrong while fetching grocery items" );
        })
    }

    useEffect( () => {
        getGrocery();
    }, [])

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
                            <h1 className="text-lg font-bold"> { grocery.ingredient } </h1>
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