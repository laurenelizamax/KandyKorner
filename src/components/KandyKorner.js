import React from "react"
import Product from "../components/Product/Product"
import Location from "../components/Location/Location"
import Customer from "../components/Customer/Customer"
import Employee from "../components/Employee/Employee"
import './KandyKorner.css';


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
            <Location />
            <Location />
            <Location />
        </article>
        <h2>Customers</h2>
        <article className="customers">
            <Customer />
            <Customer />
            <Customer />
        </article>
        <h2>Employees</h2>
        <article className="employees">
            <Employee />
            <Employee />
            <Employee />
        </article>
    </>

)