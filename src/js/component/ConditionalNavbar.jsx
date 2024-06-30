import React from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "./navbar";

const ConditionalNavbar = () => {
    const location = useLocation();
    return location.pathname === "/" ? <Navbar /> : null;
};

export default ConditionalNavbar;
