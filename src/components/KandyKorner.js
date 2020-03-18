import React from "react"
import { Route, Redirect } from "react-router-dom"
import NavBar from "../components/Navbar/Navbar"
import ApplicationViews from "./ApplicationViews"
import "./KandyKorner.css"
import Login from "./Auth/Login"
import Register from "./Auth/Register"

export default () => (
    <>
        <Route render={() => {
            if (localStorage.getItem("kennel_customer")) {
                return (
                    <>
                        <Route render={props => <NavBar {...props} />} />
                        <Route render={props => <ApplicationViews {...props} />} />
                    </>
                )
            } else {
                return <Redirect to="/login" />
            }
        }} />

        <Route path="/login" render={props => <Login {...props} />} />
        <Route path="/register" render={props => <Register {...props} />} />
    </>
)