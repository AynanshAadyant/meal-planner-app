import React from "react";
import NutritionCard from "../Cards/NutrtionCard";
import MealTiles from "../Tiles/MealTiles";

export default function UserMain() {
    const nutrition = [ 
        {
            heading: "Calories",
            description: "1800kcal"
        },
        {
            heading: "Carbohydrates",
            description: "200gm"
        },
        {
            heading: "Protein",
            description: "150g"
        },
        {
            heading: "Fats",
            description: "50g"
        },
        {
            heading: "Fibre",
            description: "100g"
        },
    ]

    const meals = [ 
        {
            heading: "Oatmeal with berries",
            nutrition:{
                calories: 500,
                protien: 20
            }
        },
        {
            heading: "Chicken Salad Sandwich",
            nutrition:{
                calories: 600,
                protien: 30
            }
        },
        {
            heading: "Apple Slices with Almond Butter",
            nutrition:{
                calories: 200,
                protien: 10
            }
        },
        {
            heading: "Salmon with Roasted Vegetables",
            nutrition:{
                calories: 700,
                protien: 40
            }
        },
    ]
    return(
        <div className="main flex flex-col gap-10 p-5 w-full">
            <div className="heading flex flex-col gap-6">
                <h1 className="text-5xl font-extrabold"> Hi, Name </h1>
                <h2 className="text-xl font-semibold text-gray-400 "> Here's your nutrition overview for today</h2>
            </div>
            <div className=" stats flex flex-col gap-4">
                <h1 className="text-xl font-bold"> Quick Stats : </h1>
                <div className="nutrition-stats flex flex-row gap-2">
                { 
                    nutrition.map( (nutrition, index) => 
                        <NutritionCard nutrition={nutrition} frequency={5} key={index}/>
                    )
                }
                </div>
            </div>
            <div className="meal_plan flex flex-col gap-5">
                <h1 className="text-xl font-bold"> Today's Meal Plan </h1>
                <div className="meals flex flex-col gap-1">
                    {
                        meals.map( (meal, index) => <MealTiles meal={meal} key={index}/>)
                    }
                </div>
            </div>
            <div className="nutrition_summary flex flex-col gap-5">
                <h1 className="text-xl font-bold"> Nutrition Summary : </h1>
                <div className="graph border-1 border-gray-200 rounded-xl w-full h-100">

                </div>
            </div>
        </div>
    )
}