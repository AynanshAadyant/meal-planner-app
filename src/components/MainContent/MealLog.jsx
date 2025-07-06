import React, { useState, useEffect } from "react";
import LogTiles from "../Tiles/LogTiles";
import axios from "axios";
import backend_url from "../../constants/constant";

export default function MealLog() {
  const [mealType, setMealType] = useState("breakfast");
  const [meals, setMeals] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchLog, setSearchLog] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [todayLog, setTodayLog] = useState([]);
  const [nutritionalLog, setNutritionalLog] = useState([
    { nutrient: "Calories", value: 0, unit: "kcal" },
    { nutrient: "Carbohydrates", value: 0, unit: "g" },
    { nutrient: "Protien", value: 0, unit: "g" },
    { nutrient: "Fats", value: 0, unit: "g" },
  ]);

  // Current Date
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const date = currentDate.getDate();

  // Fetch all meals from backend
  useEffect(() => {
    axios
      .get("http://localhost:5500/api/v1/meal/get", { withCredentials: true })
      .then((res) => setMeals(res.data.body))
      .catch((err) => console.error("Error fetching meals:", err));
  }, []);

  // Fetch today's meal log
  const fetchTodaysLog = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5500/api/v1/mealPlan/get/${year}/${month}/${date}`,
        { withCredentials: true }
      );
      setTodayLog(res.data.body.meals);
    } catch (err) {
      console.error("Error fetching today's log:", err);
    }
  };

  useEffect(() => {
    fetchTodaysLog();
  }, []);

  // Search filter
  useEffect(() => {
    if (!searchTerm.trim()) return setSearchLog([]);
    const filtered = meals.filter((meal) =>
      meal.heading.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchLog(filtered);
  }, [searchTerm, meals]);

  // Handle meal select
  const handleSelectMeal = (meal) => {
    setSelectedMeal(meal);
    updateNutrition(meal.nutrition);
    setSearchTerm("");
    setSearchLog([]);
  };

  // Nutrition calculation
  const updateNutrition = (mealNutrition) => {
    const updated = {
      calories: nutritionalLog[0]?.value || 0,
      carbohydrates: nutritionalLog[1]?.value || 0,
      protien: nutritionalLog[2]?.value || 0,
      fats: nutritionalLog[3]?.value || 0,
    };

    updated.calories += mealNutrition.calories;
    updated.carbohydrates += mealNutrition.carbohydrates;
    updated.protien += mealNutrition.protien;
    updated.fats += mealNutrition.fats;

    setNutritionalLog([
      { nutrient: "Calories", value: updated.calories, unit: "kcal" },
      { nutrient: "Carbohydrates", value: updated.carbohydrates, unit: "g" },
      { nutrient: "Protien", value: updated.protien, unit: "g" },
      { nutrient: "Fats", value: updated.fats, unit: "g" },
    ]);
  };

  // Save meal to backend
  const handleSaveMeal = async () => {
    if (!selectedMeal) return alert("Please select a meal first.");
    const payload = {
      year,
      month,
      date,
      mealType,
      meal: selectedMeal._id,
    };

    try {
      const res = await axios.post(
        `${backend_url}/api/v1/mealPlan/create`,
        payload,
        { withCredentials: true }
      );
      alert(res.data.message || "Meal saved!");
      fetchTodaysLog(); // Refresh log
    } catch (err) {
      console.error("Save error:", err);
      alert("Failed to save meal.");
    }
  };

  return (
    <div className=" space-y-6">
      <h1 className="text-5xl font-bold">Log a Meal</h1>

      {/* Meal Type Selection */}
      <div className="flex gap-4 justify-center bg-green-100 py-2 rounded-full">
        {["breakfast", "lunch", "dinner", "snacks"].map((type) => (
          <button
            key={type}
            onClick={() => setMealType(type)}
            className={`rounded-full px-8 py-1 text-center transition ${
              mealType === type ? "bg-white text-green-900 font-bold" : "text-green-900"
            }`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      {/* Search Section */}
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for food"
          className="border border-gray-400 rounded-lg px-5 py-2 w-full"
        />
        <div className="mt-2 space-y-2">
          {searchLog.length > 0 ? (
            searchLog.map((meal, index) => (
              <div key={index} className="cursor-pointer" onClick={() => handleSelectMeal(meal)}>
                <LogTiles meal={meal} />
              </div>
            ))
          ) : searchTerm.trim() !== "" ? (
            <div className="text-center text-gray-600 mt-2">No meal found</div>
          ) : null}
        </div>
      </div>

      {/* Today's Log with fixed height */}
      <div className="flex flex-col gap-4 mt-6 min-h-[200px]">
        <h2 className="text-xl font-bold">Today's Log</h2>
        {todayLog.length > 0 ? (
          todayLog.map((entry, idx) => (
            <div key={idx} className="bg-gray-100 p-3 rounded-md">
              <p className="font-semibold capitalize">{entry.mealType}</p>
              <p>{entry.meal?.heading || "Meal Deleted"}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 italic">No meals logged yet for today.</p>
        )}
      </div>

      {/* Nutrition Summary */}
      <div>
        <h2 className="text-xl font-bold mb-2">Summary</h2>
        <div className="space-y-1">
          {nutritionalLog.map((n, i) => (
            <div key={i} className="flex justify-between">
              <span className="text-green-700 font-medium">{n.nutrient}</span>
              <span>
                {n.value} {n.unit}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Save Button */}
      <div className="mt-4 w-1/2 mx-auto">
        <button
          onClick={handleSaveMeal}
          className="bg-green-600 text-white w-full py-2 rounded-full font-semibold hover:bg-green-700 transition"
        >
          Save Meal
        </button>
      </div>
    </div>
  );
}
