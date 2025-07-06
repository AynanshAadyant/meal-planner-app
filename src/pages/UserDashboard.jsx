import React, { useEffect, useState } from "react";
import UserNavBar from "../components/NavBar/UserNavBar";
import UserSideBar from "../components/SideBar/UserSideBar";
import { Link, Outlet } from "react-router-dom";
import axios from "axios";

export default function UserDashboard() {
  const [user, setUser] = useState( );
  const [isLoggedIn, setLoggedIn] = useState(false);

  const getUser = () => {
    axios.get( "http://localhost:5500/api/v1/user/current", { withCredentials: true })
    .then( (res) => {
      setUser( res.data.body );
      setLoggedIn( true );
    })
    .catch( (err) => {
      console.error( "ERROR while fetching user data ",err );
    })
  }

  useEffect( () => {
    getUser();
  }, [ ]);

  if (!isLoggedIn) {
    return (
      <div className="screen flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold text-red-500">You are not authorised</h1>
        <h1 className="flex flex-row gap-4"> 
            <Link to="/auth/login" className="text-xl font-bold hover:underline"> Login </Link> 
            <Link to="/auth/signup" className="text-xl font-bold hover:underline"> Sign Up </Link></h1>
      </div>
    );
  }
  else
  return (
    <div className="screen flex flex-col">
      <UserNavBar user={user} />
      <div className="flex flex-row flex-1 pt-16 pr-2">
        {/* Fixed Sidebar */}
        <div className="w-64 h-full bg-white fixed top-16 left-0 z-40">
          <UserSideBar />
        </div>

        {/* Scrollable Outlet Content */}
        <div className="main flex flex-col gap-8 bg-white mx-auto mt-8 ml-64 w-full p-5 pb-10">
          <Outlet context = {{user, getUser}}/>
        </div>
      </div>
    </div>
  );
}
