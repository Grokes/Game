import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import React from "react";
import {useState} from "react";
import Checkers from "./DOM/Checkers";
import LoginForm from "./DOM/Login/LoginForm";

function Loader(){
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    return (
        <Router>
            <Routes>
                <Route
                    path="/login"
                    element={<LoginForm setIsAuthenticated={setIsAuthenticated} />}
                />
                <Route
                    path="/checkers"
                    element={isAuthenticated ? <Checkers /> : <Navigate to="/login" />}
                />
                <Route
                    path="*"
                    element={<Navigate to="/login" />}
                />
            </Routes>
        </Router>
    );
}

export default Loader;