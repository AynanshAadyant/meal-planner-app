import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUpCard() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    height: "",
    heightUnit: "cm",
    weight: "",
    weightUnit: "kg",
    gender: "M",
    age: 18,
    activityLevel: "Moderate",
    goals: "Maintain"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-2xl border">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Create Your NutriPlan Account</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <input type="text" name="name" onChange={handleChange} className="w-full p-2 border rounded-md" placeholder="Name" required />
          </div>
          <div>
            <input type="email" name="email" onChange={handleChange} className="w-full p-2 border rounded-md" placeholder="Email" required />
          </div>
          <div>
            <input type="password" name="password" onChange={handleChange} className="w-full p-2 border rounded-md" placeholder="Password" required />
          </div>
          <div>
            <select name="gender" onChange={handleChange} className="w-full p-2 border rounded-md" placeholder="Gender">
              <option value="M">Male</option>
              <option value="F">Female</option>
            </select>
          </div>
          <div>
            <input type="number" name="age" min="0" onChange={handleChange} className="w-full p-2 border rounded-md" placeholder="Age" required />
          </div>
          <div>
            <select name="activityLevel" onChange={handleChange} className="w-full p-2 border rounded-md">
              <option value="Sedentary">Sedentary</option>
              <option value="Light">Light</option>
              <option value="Moderate">Moderate</option>
              <option value="Active">Active</option>
              <option value="Athlete">Athlete</option>
            </select>
          </div>
          <div>
            <select name="goals" onChange={handleChange} className="w-full p-2 border rounded-md">
              <option value="Loss">Weight Loss</option>
              <option value="Gain">Weight Gain</option>
              <option value="Maintain">Maintain Weight</option>
            </select>
          </div>
          <div className="flex gap-2">
            <div className="flex-1">
              <input type="number" name="height" onChange={handleChange} className="w-full p-2 border rounded-md" placeholder="Height" required />
            </div>
            <div>
              <select name="heightUnit" onChange={handleChange} className="w-full p-2 border rounded-md">
                <option value="cm">cm</option>
                <option value="m">m</option>
                <option value="ft">ft</option>
                <option value="inch">inch</option>
              </select>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="flex-1">
              <input type="number" name="weight" onChange={handleChange} className="w-full p-2 border rounded-md" placeholder="Weight" required />
            </div>
            <div>
              <select name="weightUnit" onChange={handleChange} className="w-full p-2 border rounded-md">
                <option value="kg">kg</option>
                <option value="lb">lb</option>
              </select>
            </div>
          </div>
        </div>

        <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-md mt-4">
          Sign Up
        </button>
      </form>

      <p className="text-center text-sm mt-6 text-gray-600">
        Already have an account?{" "}
        <Link to="/auth/login" className="text-green-600 font-semibold hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
}
