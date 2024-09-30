import LoginForm from "./DOM/Login/LoginForm";
import React from "react";
import {useState} from "react"
import Checkers from "./DOM/Checkers";

function Loader(){
    const [page, setPage] = useState("login")
    if (page === "login")
    {
        return  [<LoginForm />, <button onClick={NextIndex}>mhjgjgjhg</button>];
    }
    else if (page === "index")
    {
        return  [<Checkers />, <button onClick={NextLogin}>mhjgjgjhg</button>];
    }
    function NextLogin(event)
    {
        setPage("login")
    }
    function NextIndex(event)
    {
        setPage("index")
    }
}



export default Loader;