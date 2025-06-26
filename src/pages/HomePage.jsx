import React from "react";
import NavBar from "../components/NavBar/NavBar";
import HomeContent from "../components/HomeContent/HomeContent";

export default function HomePage() {
    return(
        <div className="screen">
            <NavBar />
            <div className="content px-50 flex flex-col gap-10 py-30 select-none">
                <HomeContent />
            </div>
        </div>
    )
}