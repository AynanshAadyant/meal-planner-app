import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import backend_url from "../../constants/constant";

export default function LoginCard() {

    const [ formData, setFormData ] = useState( {
        email : "",
        password : ""
    });

    const [showPassword, setShowPassword ] = useState(false);
    const [ message, setMessage ] = useState( "" );
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData( {
            ...formData, [ e.target.name ]: e.target.value
        }
        )
    }

    const handleSubmit = () => {
      setMessage( "Logging in... " );
      axios.post( `${backend_url}/api/v1/user/login`, formData, { withCredentials : true} )
      .then( (res) => {
        if( res.data.success ) {
          setMessage( "Login successful" );
          setTimeout( navigate( "/user" ), 1200 );
        }
        else{
          setMessage( "Something went wrong" );
          console.error( "Unhandled Error encountered while logging in", res.data );
        }
      })
      .catch( (err) => {
        console.error( "ERROR while logging in", err );
        setMessage( err.response.data.message );
      })
    }

  return (
    <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md border">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Welcome Back</h2>
      
      <form className="space-y-5">
        <p> { message}</p>
        <div>
          <input
            type="email"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Email"
            name="email"
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
                name="password"
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
          Login
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
