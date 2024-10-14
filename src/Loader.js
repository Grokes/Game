import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import React from "react";
import {useState} from "react";
import Checkers from "./DOM/Checkers";
import LoginForm from "./DOM/Login/LoginForm";
import GameModel from "./GameModel/GameModel";
import About from "./DOM/About";
import Rules from "./DOM/Rules";

const gameModel = new GameModel();

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
                    element={isAuthenticated ? <Checkers GameModel={gameModel}/> : <Navigate to="/login" />}
                />
                <Route
                    path="/about"
                    element={<About/>}
                />
                <Route
                    path="/rules"
                    element={<Rules/>}
                />

            </Routes>
        </Router>
    );
}

export default Loader;