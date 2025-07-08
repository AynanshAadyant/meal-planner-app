import React, { useState } from "react";
import axios from "axios";

export default function AdminDashboard() {
  const [mealJSON, setMealJSON] = useState("");
  const [ingredientJSON, setIngredientJSON] = useState("");
  const [message, setMessage] = useState("");

  const handleUpload = async (type) => {
    try {
      const data = type === "meal" ? JSON.parse(mealJSON) : JSON.parse(ingredientJSON);
      const endpoint = type === "meal" 
        ? "http://localhost:5500/api/v1/admin/upload/meals"
        : "http://localhost:5500/api/v1/admin/upload/ingredients";

      const res = await axios.post(endpoint, { data }, { withCredentials: true });

      if (res.data.success) {
        setMessage(`${type} data uploaded successfully.`);
      } else {
        setMessage(`Failed to upload ${type} data.`);
      }
    } catch (err) {
      console.error(err);
      setMessage(`Error uploading ${type}: ${err.message}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto space-y-10">
        <header className="flex justify-between items-center">
          <h1 className="text-4xl font-bold text-green-700">Admin Dashboard</h1>
          <button
            className="px-5 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold"
            onClick={() => {
              axios.post("http://localhost:5500/api/v1/user/logout", {}, { withCredentials: true })
              .then(() => window.location.href = "/auth/login");
            }}
          >
            Logout
          </button>
        </header>

        {message && <div className="text-lg font-semibold text-blue-600">{message}</div>}

        {/* Bulk Upload Ingredients */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-green-600">Bulk Upload Ingredients</h2>
          <textarea
            rows="10"
            className="w-full border border-gray-300 p-4 rounded-md font-mono"
            placeholder='Paste ingredients JSON here'
            value={ingredientJSON}
            onChange={(e) => setIngredientJSON(e.target.value)}
          />
          <button
            onClick={() => handleUpload("ingredient")}
            className="mt-4 px-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700"
          >
            Upload Ingredients
          </button>
        </section>

        {/* Bulk Upload Meals */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-yellow-600">Bulk Upload Meals</h2>
          <textarea
            rows="10"
            className="w-full border border-gray-300 p-4 rounded-md font-mono"
            placeholder='Paste meals JSON here'
            value={mealJSON}
            onChange={(e) => setMealJSON(e.target.value)}
          />
          <button
            onClick={() => handleUpload("meal")}
            className="mt-4 px-6 py-2 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-yellow-700"
          >
            Upload Meals
          </button>
        </section>

        {/* Links to View Other Dashboards */}
        <section className="flex flex-col md:flex-row gap-4 justify-between mt-10">
          <a href="/user" className="text-blue-600 underline text-lg font-semibold">Go to User Dashboard</a>
          <a href="/calendar" className="text-blue-600 underline text-lg font-semibold">View Meal Calendar</a>
          <a href="/meals" className="text-blue-600 underline text-lg font-semibold">View All Meals</a>
        </section>
      </div>
    </div>
  );
}
