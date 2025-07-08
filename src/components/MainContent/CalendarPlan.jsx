import { useOutletContext } from "react-router-dom";
import NutritionCard from "../Cards/NutrtionCard";
import axios from "axios";
import { useState, useEffect } from "react";
import backend_url from "../../constants/constant.js";

export default function CalendarPlan() {
  const { user } = useOutletContext();

  const [mealSuggestions, setMealSuggestions] = useState([]);
  const [requiredNutrition, setRequiredNutrition] = useState(user?.nutrition || {});
  const [completedNutrition, setCompletedNutrition] = useState(null);
  const [nutritionLeft, setNutritionLeft] = useState([
    { heading: "Calories", description: 0, unit: "kcal" },
    { heading: "Protein", description: 0, unit: "g" },
    { heading: "Carbohydrates", description: 0, unit: "g" }
  ]);

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  const getMealPlan = () => {
    axios
      .get(`${backend_url}/api/v1/mealPlan/get/${year}/${month + 1}/${day}`, {
        withCredentials: true,
      })
      .then((res) => {
        setCompletedNutrition(res.data.body.nutrition);
      })
      .catch((err) => {
        console.error("ERROR while fetching mealPlan", err);
        setCompletedNutrition(null); // fallback to zero
      });
  };

  const getMealSuggestions = (nutrition) => {
    axios
      .post(`${backend_url}/api/v1/meal/suggestions`, { nutrition }, { withCredentials: true })
      .then((res) => {
        setMealSuggestions(res.data.body);
      })
      .catch((err) => {
        console.error("ERROR while fetching meal suggestions", err);
      });
  };

  useEffect(() => {
    getMealPlan();
  }, []);

  useEffect(() => {
    if (user?.nutrition && completedNutrition) {
      const deficit = {
        calories: Math.max(user.nutrition.calories - (completedNutrition.calories || 0), 0),
        protein: Math.max(user.nutrition.protein - (completedNutrition.protein || 0), 0),
        carbohydrates: Math.max(user.nutrition.carbohydrates - (completedNutrition.carbohydrates || 0), 0),
      };

      setNutritionLeft([
        { heading: "Calories", description: deficit.calories, unit: "kcal" },
        { heading: "Protein", description: deficit.protein, unit: "g" },
        { heading: "Carbohydrates", description: deficit.carbohydrates, unit: "g" }
      ]);

      getMealSuggestions(deficit);
    } else if (!completedNutrition && user?.nutrition) {
      setNutritionLeft([
        { heading: "Calories", description: user.nutrition.calories, unit: "kcal" },
        { heading: "Protein", description: user.nutrition.protein, unit: "g" },
        { heading: "Carbohydrates", description: user.nutrition.carbohydrates, unit: "g" }
      ]);

      getMealSuggestions(user.nutrition);
    }
  }, [user, completedNutrition]);

  return (
    <>
      <div className="heading">
        <h1 className="text-5xl font-extrabold">Meal Suggestions:</h1>
      </div>

      <div className="content flex flex-col gap-5">
        <div className="nutrition flex flex-col gap-4">
          <h1 className="text-xl font-bold">Nutrition Left for the Day:</h1>
          <div className="nutrition-stats flex flex-row gap-2 w-full">
            {nutritionLeft.map((nutrition, index) => (
              <NutritionCard nutrition={nutrition} frequency={5} key={index} />
            ))}
          </div>
        </div>

        <div className="meals flex flex-col gap-2">
          {mealSuggestions.length > 0 ? (
            mealSuggestions.map((meal, index) => (
              <div
                className="meal flex flex-row items-center w-full p-2 border border-gray-300 rounded-lg shadow-sm"
                key={index}
              >
                <div className="info flex flex-col w-5/6">
                  <h1 className="text-xl font-bold">
                    {meal.mealType} : {meal.mealName || meal.name}
                  </h1>
                  <h2 className="text-green-800">
                    {meal.nutrition?.calories || 0} kcal, {meal.nutrition?.protein || 0} g Protein
                  </h2>
                </div>
                <div className="buttons flex flex-row gap-4 w-1/6">
                  <button className="bg-green-400 font-bold px-4 py-1 rounded-lg">Log</button>
                  <button className="bg-yellow-400 font-bold px-4 py-1 rounded-lg">Reshuffle</button>
                </div>
              </div>
            ))
          ) : (
            <div className="no-meals text-gray-500 font-semibold">No meals suggested yet.</div>
          )}
        </div>
      </div>
    </>
  );
}
