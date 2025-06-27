import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginCard() {

    const [ formData, setFormData ] = useState( {
        email : "",
        password : ""
    });

    const [showPassword, setShowPassword ] = useState(false);

    const handleChange = (e) => {
        setFormData( {
            ...formData, [ e.target.name]: e.target.value
        }
        )
    }

    const handleSubmit = () => {
        console.log( formData );
    }

  return (
    <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md border">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Welcome Back</h2>
      
      <form className="space-y-5">
        <div>
          <input
            type="email"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Email"
            onChange={ (e) => {
                e.preventDefault();
                handleChange( e );
            }}
          />
        </div>

        <div className="flex flex-row gap-2 items-center">
            <input
                type={ showPassword ? "text" : "password"}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Password"
                onChange={ (e) => {
                    e.preventDefault();
                    handleChange( e );
                }}
            />
            <button onClick={ (e) => {
                e.preventDefault();
                setShowPassword( !showPassword );
            }}
            className="w-12 cursor-pointer"
            > { showPassword ? "Hide" : "Show"} </button>
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-md transition"
            onClick={ (e) => {
                e.preventDefault();
                handleSubmit();
            }}
        >
          Sign In
        </button>
      </form>

      <p className="text-center text-sm mt-6 text-gray-600">
        Don't have an account?{" "}
        <Link to="/auth/signup" className="text-green-600 font-semibold hover:underline">
          Sign Up
        </Link>
      </p>
    </div>
  );
}
