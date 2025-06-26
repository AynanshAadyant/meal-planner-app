import React from "react";

export default function AuthButtons() {
    return(
        <div className="auth flex flex-row items-center gap-2 select-none">
            <div className="get-started">
                <h1 className="bg-green-400 px-4 py-2 rounded-xl font-bold cursor-pointer hover:scale-105 hover:shadow-xl">  Get Started </h1>
            </div>
            <div className="SignUp">
                <h1 className="bg-gray-200 px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-xl cursor-pointer"> Sign Up </h1>
            </div>
        </div>
    )
}