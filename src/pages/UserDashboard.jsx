import React from "react";
import UserNavBar from "../components/NavBar/UserNavBar";
import UserSideBar from "../components/SideBar/UserSideBar";
import { Outlet } from "react-router-dom";

export default function UserDashboard() {
    return(
        <div className="screen flex flex-col">
            <UserNavBar />
            <div className="flex flex-row flex-1 pt-16">
                {/* Fixed Sidebar */}
                <div className="w-64 h-full bg-white fixed top-16 left-0 z-40">
                    <UserSideBar />
                </div>

                {/* Scrollable Outlet Content */}
                <div className="ml-64 flex-1 overflow-y-auto p-6">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}