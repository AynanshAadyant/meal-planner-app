import React from "react";
import { Link } from "react-router-dom";

export default function UserSideBar() {
    return( 
        <div className="sidebar py-10 px-3 h-full select-none">
            <div className="content flex flex-col gap-2">
                <div className="home px-5 py-1 rounded-full hover:bg-gray-300 cursor-pointer">
                    <Link 
                    to="/user"
                    className="text-gray-700 text-lg font-semibold "> Dashboard </Link>
                </div>
                <div className="log-meals px-5 py-1 rounded-full hover:bg-gray-300 cursor-pointer">
                    <Link 
                    to="/user/log"
                    className="text-gray-700 text-lg font-semibold "> Log a Meal </Link>
                </div>
                <div className="recalculate-plan px-5 py-1 rounded-full hover:bg-gray-300 cursor-pointer"> 
                    <Link
                    to="/user/plan" 
                    className="plan text-gray-700 text-lg font-semibold"> Recalculate Plan </Link>
                </div>
                <div className="grocery px-5 py-1 rounded-full hover:bg-gray-300 cursor-pointer">
                    <Link
                    to="/user/grocery" 
                    className="grocery text-gray-700 text-lg font-semibold"> View grocery List </Link>
                </div>
                <div className="calendar px-5 py-1 rounded-full hover:bg-gray-300 cursor-pointer">
                    <Link
                    to="/user/calendar" 
                    className="calendar text-gray-700 text-lg font-semibold"> Go to Meal Calendar </Link>
                </div>
            </div>
        </div>
    )
}