import React, { useState, useEffect } from "react";
import LogTiles from "../Tiles/LogTiles";

// Simulated backend fetch
const mockFetchMeals = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          heading: "Grilled Chicken Breast",
          nutrition: {
            calories: 165,
            carbohydrates: 0,
            protien: 31,
            fats: 3.6,
          },
        },
        {
          heading: "Paneer Tikka",
          nutrition: {
            calories: 275,
            carbohydrates: 5,
            protien: 20,
            fats: 18,
          },
        },
        {
          heading: "Boiled Eggs",
          nutrition: {
            calories: 155,
            carbohydrates: 1.1,
            protien: 13,
            fats: 11,
          },
        },
        {
          heading: "Banana",
          nutrition: {
            calories: 105,
            carbohydrates: 27,
            protien: 1.3,
            fats: 0.3,
          },
        },
        {
          heading: "Masala Oats",
          nutrition: {
            calories: 212,
            carbohydrates: 38,
            protien: 6,
            fats: 4,
          },
        },
        {
          heading: "Green Salad",
          nutrition: {
            calories: 90,
            carbohydrates: 12,
            protien: 2,
            fats: 4,
          },
        },
        {
          heading: "Protein Shake",
          nutrition: {
            calories: 200,
            carbohydrates: 5,
            protien: 30,
            fats: 3,
          },
        },
      ]);
    }, 500); // Simulate network delay
  });
};

export default function MealLog() {
  const [mealType, setMealType] = useState("breakfast");
  const [meals, setMeals] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchLog, setSearchLog] = useState([]);
  const [todayLog, setTodayLog] = useState([]);
  const [nutritionalLog, setNutritionalLog] = useState([]);

  // Date
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const date = currentDate.getDate();

  // Fetch meals on mount
  useEffect(() => {
    mockFetchMeals().then((data) => {
      setMeals(data);
    });
  }, []);

  // Auto-search
  useEffect(() => {
    if (!searchTerm.trim()) {
      setSearchLog([]);
      return;
    }

    const filtered = meals.filter((meal) =>
      meal.heading.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchLog(filtered);
  }, [searchTerm, meals]);

  // Select meal
  const handleSelectMeal = (meal) => {
    setTodayLog((prev) => [...prev, meal]);

    // Update nutritional log
    const newNutrition = { ...meal.nutrition };
    setNutritionalLog((prev) => {
      const updated = { calories: 0, carbohydrates: 0, protien: 0, fats: 0 };

      prev.forEach((nutrient) => {
        updated[nutrient.nutrient.toLowerCase()] = nutrient.value;
      });

      updated.calories += newNutrition.calories;
      updated.carbohydrates += newNutrition.carbohydrates;
      updated.protien += newNutrition.protien;
      updated.fats += newNutrition.fats;

      return [
        { nutrient: "Calories", value: updated.calories, unit: "kcal" },
        { nutrient: "Carbohydrates", value: updated.carbohydrates, unit: "g" },
        { nutrient: "Protien", value: updated.protien, unit: "g" },
        { nutrient: "Fats", value: updated.fats, unit: "g" },
      ];
    });

    // Clear search
    setSearchTerm("");
    setSearchLog([]);
  };

  const handleSaveMeal = () => {
    alert(
      `Saved ${todayLog.length} meals for ${mealType} on ${year}-${month}-${date}`
    );
    // Future: Send to backend via axios.post
  };

  return (
    <>
      <div className="heading mb-6">
        <h1 className="text-5xl font-bold">Log a Meal</h1>
      </div>

      {/* Meal Type Selection */}
      <div className="meal_type px-20 py-2 bg-green-700/30 flex flex-row gap-4 rounded-full justify-center items-center mb-6">
        {["breakfast", "lunch", "dinner", "snacks"].map((type) => (
          <button
            key={type}
            onClick={() => setMealType(type)}
            className={`rounded-full px-8 py-1 w-1/4 text-center ${
              mealType === type
                ? "bg-white text-green-900 font-bold"
                : "text-green-900"
            }`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      {/* Search Bar */}
      <div className="search mb-5">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for food"
          className="border border-gray-400 rounded-lg px-5 py-2 text-gray-900 w-full"
        />
        <div className="search_results mt-2">
          {searchLog.map((meal, index) => (
            <div key={index} className="cursor-pointer" onClick={() => handleSelectMeal(meal)}>
              <LogTiles meal={meal} />
            </div>
          ))}
        </div>
      </div>

      {/* Today's Log */}
      <div className="today_log flex flex-col gap-4 mt-6">
        <h1 className="text-xl font-bold">Today's Log ({mealType})</h1>
        <div className="meals flex flex-col gap-2">
          {todayLog.map((meal, index) => (
            <LogTiles meal={meal} key={index} />
          ))}
        </div>
      </div>

      {/* Summary */}
      <div className="summary flex flex-col gap-4 mt-6">
        <h1 className="text-xl font-bold">Summary</h1>
        <div className="nutrition_map flex flex-col gap-2">
          {nutritionalLog.map((nutrition, index) => (
            <div className="log flex flex-row items-center" key={index}>
              <h1 className="w-full text-green-700 text-lg">
                {nutrition.nutrient}
              </h1>
              <h1 className="w-1/6 text-right">
                {nutrition.value} {nutrition.unit}
              </h1>
            </div>
          ))}
        </div>
      </div>

      {/* Save Button */}
      <div className="save_meal w-1/2 mt-6">
        <button
          className="bg-green-600/40 w-full rounded-full py-2 font-bold"
          onClick={handleSaveMeal}
        >
          Save Meal
        </button>
      </div>
    </>
  );
}
