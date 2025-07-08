import React, { useMemo } from "react";
import NutritionCard from "../Cards/NutrtionCard";
import MealTiles from "../Tiles/MealTiles";
import { useOutletContext, Link } from "react-router-dom";

export default function UserMain() {
    const { user } = useOutletContext();

    // ⛔ Prevent rendering if user or nutrition is undefined
    if (!user || !user.nutrition) {
        return (
            <div className="flex items-center justify-center h-full">
                <h1 className="text-xl font-bold text-gray-500">Loading your nutrition data...</h1>
            </div>
        );
    }

    const nutrition = useMemo(() => ([
        {
            heading: "Calories",
            description: user.nutrition.calories,
            unit: "kcal"
        },
        {
            heading: "Carbohydrates",
            description: Math.floor(user.nutrition.carbohydrates),
            unit: "gm"
        },
        {
            heading: "Protein",
            description: Math.ceil(user.nutrition.protien),
            unit: "gm"
        },
        {
            heading: "Fats",
            description: Math.floor(user.nutrition.fats),
            unit: "gm"
        }
    ]), [user]);

    const meals = []; // You can populate this with actual meal data later

    // Pre-rendered nutrition cards to avoid duplication
    const nutritionCards = (
        <div className="nutrition-stats flex flex-row gap-2 w-full">
            {nutrition.map((item, index) => (
                <NutritionCard nutrition={item} frequency={5} key={index} />
            ))}
        </div>
    );

    return (
        <>
            <div className="heading flex flex-col gap-6">
                <h1 className="text-5xl font-extrabold">Hi, {user?.name ?? "User"}</h1>
                <h2 className="text-xl font-semibold text-gray-400">
                    Here's your nutrition overview for today
                </h2>
            </div>

            <div className="goals flex flex-col gap-4">
                <h1 className="text-xl font-bold">Goals:</h1>
                {nutritionCards}
            </div>

            <div className="meal_plan flex flex-col gap-5 min-h-1/4 justify-center">
                <h1 className="text-xl font-bold">Today's Meal:</h1>
                <div className="meals flex flex-col gap-1">
                    {meals.length > 0 ? (
                        meals.map((meal, index) => <MealTiles meal={meal} key={index} />)
                    ) : (
                        <div className="no-meals p-10 flex flex-row gap-5 items-center">
                            <h1 className="text-xl font-bold">No meals added so far</h1>
                            <Link
                                to="/user/log"
                                className="rounded-full px-6 py-2 items-center bg-green-900/30 hover:underline"
                            >
                                Log a Meal
                            </Link>
                        </div>
                    )}
                </div>
            </div>

            <div className="achieved flex flex-col gap-4">
                <h1 className="text-xl font-bold">Current Stats:</h1>
                {nutritionCards}
            </div>
        </>
    );
}
