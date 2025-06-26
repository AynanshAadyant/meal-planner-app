import React from "react";
import AuthButtons from "../AuthButtons/AuthButtons";
export default function NavBar() {
    return(
        <nav className="fixed top-0 w-full z-50 bg-white flex flex-row justify-around p-2 border-b-1 border-gray-200 select-none">
            <div className="left w-1/2">
                <div className="logo flex flex-row gap-5 items-center">
                    <h1 className="text-2xl font-bold bg-green-500 p-2 rounded-full"> N </h1>
                    <h1 className="font-bold"> NutriPlan</h1>
                </div>
            </div>
            <div className="right flex flex-row">
                <div className="link flex flex-row gap-8">
                    <div className="links flex flex-row justify-around items-center gap-6 font-bold ">
                        <h1 > Home </h1>
                        <h1> Features </h1>
                        <h1> Testimonials </h1>
                    </div>
                    <AuthButtons />
                </div>
            </div>
        </nav>
    )
}