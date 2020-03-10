import React from "react"
import Product from "../components/Product/Product"
import LocationList from "../components/Location/LocationList"
import LocationProvider from "../components/Location/LocationProvider"
import Customer from "../components/Customer/Customer"
import './KandyKorner.css';
import EmployeeProvider from "./Employee/EmployeeProvider"
import EmployeeList from "./Employee/EmployeeList"


export default () => (
    <>
        <h2>Welcom To Kandy Korner</h2>
        <small>For All Your Sweet Needs</small>
        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>100 Cotton Candy Drive</div>
        </address>
        <h2>Products</h2>
        <article className="products">
            <Product />
            <Product />
            <Product />
        </article>
        <h2>Locations</h2>
        <article className="locations">
            <LocationProvider>
                <LocationList />
            </LocationProvider>
        </article>
        <h2>Customers</h2>
        <article className="customers">
            <Customer />
            <Customer />
            <Customer />
        </article>
        <h2>Employees</h2>
        <article className="employees">
            <EmployeeProvider>
                <EmployeeList />
            </EmployeeProvider>
        </article>
    </>

)