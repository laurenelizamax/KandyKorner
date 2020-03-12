import React from "react"
import LocationList from "../components/Location/LocationList"
import LocationProvider from "../components/Location/LocationProvider"
import './KandyKorner.css';
import EmployeeProvider from "./Employee/EmployeeProvider"
import EmployeeList from "./Employee/EmployeeList"
import ProductProvider from "./Product/ProductProvider"
import ProductList from "../components/Product/ProductList"
import ProductTypeList from "../components/ProductType/ProductTypeList"
import ProductTypeProvider from "../components/ProductType/ProductTypeProvider"
import CustomerProvider from "./Customer/CustomerProvider";
import CustomerList from "../components/Customer/CustomerList"


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
            <ProductProvider>
                <ProductList />
            </ProductProvider>
        </article>
        <h2>ProductTypes</h2>
        <article className="products">
            <ProductTypeProvider>
                <ProductTypeList />
            </ProductTypeProvider>
        </article>
        <h2>Locations</h2>
        <article className="locations">
            <LocationProvider>
                <LocationList />
            </LocationProvider>
        </article>
        <h2>Customers</h2>
        <article className="customers">
            <CustomerProvider>
                <CustomerList />
            </CustomerProvider>
        </article>
        <h2>Employees</h2>
        <article className="employees">
            <EmployeeProvider>
                <EmployeeList />
            </EmployeeProvider>
        </article>
    </>

)