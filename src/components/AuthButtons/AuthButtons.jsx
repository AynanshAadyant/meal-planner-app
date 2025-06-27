import React from "react";
import { Link } from "react-router-dom";

export default function AuthButtons() {
    return(
        <div className="auth flex flex-row items-center gap-2 select-none">
            <div className="get-started">
                <Link
                to="/auth/login" 
                className="bg-green-400 px-4 py-2 rounded-xl font-bold cursor-pointer hover:scale-105 hover:shadow-xl"
                >  Get Started </Link>
            </div>
            <div className="SignUp">
                <Link 
                to="/auth/signup"
                className="bg-gray-200 px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-xl cursor-pointer"
                > Sign Up </Link>
            </div>
        </div>
    )
}