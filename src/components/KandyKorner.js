import React from "react"
import { Route } from "react-router-dom"
import NavBar from "../components/Navbar/Navbar"
import ApplicationViews from "./ApplicationViews"
import "./KandyKorner.css"

export default () => (
    <>
        <NavBar />
        <ApplicationViews />
    </>
)
