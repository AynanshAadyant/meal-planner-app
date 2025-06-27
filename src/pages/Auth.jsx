import React from "react";
import { Outlet } from "react-router-dom";

export default function Auth() {
    return(
        <div className="screen flex p-10 justify-center items-center bg-green-200 h-screen w-screen">
            <Outlet />
        </div>
    )
}