import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx"
import Auth from "../pages/Auth.jsx";
import Login from "../components/AuthElements/Login.jsx";
import SignUpCard from "../components/AuthElements/SignUp.jsx";
import UserDashboard from "../pages/UserDashboard.jsx";
import UserMain from "../components/MainContent/UserMain.jsx";
import MealLog from "../components/MainContent/MealLog.jsx";
import RecalculatePlan from "../components/MainContent/RecalculatePlan.jsx";

export default function Home() {
    return( 
        <Router>
            <Routes>
                <Route path="/" element={<HomePage/>}></Route>
                <Route path="/auth" element={<Auth />}>
                    <Route path="/auth/login" element={<Login />}></Route>
                    <Route path="/auth/signup" element={<SignUpCard />}></Route>
                </Route>
                <Route path="/user" element={<UserDashboard />}>
                    <Route index element={<UserMain />}></Route>
                    <Route path="/user/log" element={<MealLog />}></Route>
                    <Route path="/user/recalculate_plan" element={ <RecalculatePlan />}></Route>
                </Route>
            </Routes>
        </Router>

    )
}