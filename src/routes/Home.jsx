import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx"
import Auth from "../pages/Auth.jsx";
import Login from "../components/AuthElements/Login.jsx";
import SignUpCard from "../components/AuthElements/SignUp.jsx";

export default function Home() {
    return( 
        <Router>
            <Routes>
                <Route path="/" element={<HomePage/>}></Route>
                <Route path="/auth" element={<Auth />}>
                    <Route path="/auth/login" element={<Login />}></Route>
                    <Route path="/auth/signup" element={<SignUpCard />}></Route>
                </Route>
            </Routes>
        </Router>

    )
}