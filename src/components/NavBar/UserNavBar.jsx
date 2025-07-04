import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function UserNavBar( {user} ) {
    const navigate = useNavigate();

    const handleLogOut = () => {
        console.log("Logout");
        navigate("/");
    };

    return (
        <nav className="fixed top-0 w-full z-50 bg-white flex flex-row justify-between items-center p-4 border-b border-gray-200 select-none">
            {/* Left: Logo */}
            <div className="flex items-center gap-4 pl-4">
                <h1 className="text-2xl font-bold bg-green-500 p-2 rounded-full">N</h1>
                <h1 className="font-bold text-xl">NutriPlan</h1>
            </div>

            {/* Right: Profile + Logout */}
            <div className="flex items-center gap-4 pr-4">
                <Link to="/profile" className="text-xl font-bold px-4 py-2 bg-blue-300 rounded-full"> { user.name[0] }</Link>
                <button
                    className="text-black bg-green-300 px-4 py-2 rounded-lg font-bold cursor-pointer hover:scale-105 hover:shadow-xl focus:bg-green-300"
                    onClick={(e) => {
                        e.preventDefault();
                        handleLogOut();
                    }}
                >
                    Log out
                </button>
            </div>
        </nav>
    );
}
