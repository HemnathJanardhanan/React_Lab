
import React from "react";
import { Link } from "react-router-dom";

function NavBar(){
    return (
        <>
        <div className="fixed top-0 left-0 bg-gray-800 text-white w-full flex font-sans p-4 flex-row justify-between items-center">
            <Link to="/" className="text-3xl">Rest'raunt</Link>
            <div>
            <Link to="/menu" className="text-2xl text-white pr-4">Menu</Link>
            <Link to="/menu" className="text-2xl text-white">About</Link>
            </div>
        </div>
        </>
    )
}

export default NavBar;

