import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "../components/Location/LocationProvider"
import { ProductProvider } from "../components/Product/ProductProvider"
import LocationList from "./Location/LocationList"
import ProductList from "./Product/ProductList"
import { CustomerProvider } from "./Customer/CustomerProvider"
import { ProductTypeProvider } from "./ProductType/ProductTypeProvider"
import { EmployeeProvider } from "./Employee/EmployeeProvider"
import ProductTypeList from "./ProductType/ProductTypeList"
import CustomertList from "./Customer/CustomerList"
import EmployeeList from "./Employee/EmployeeList"

export default (props) => {
    return (
        <>
            <LocationProvider>
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/">
                    <LocationList />
                </Route>
            </LocationProvider>

            <ProductProvider>
                {/* Render the animal list when http://localhost:3000/animals */}
                <Route path="/products">
                    <ProductList />
                </Route>
            </ProductProvider>
            <ProductTypeProvider>
                {/* Render the animal list when http://localhost:3000/animals */}
                <Route path="/productTypes">
                    <ProductTypeList />
                </Route>
            </ProductTypeProvider>
            <CustomerProvider>
                {/* Render the animal list when http://localhost:3000/animals */}
                <Route path="/customers">
                    <CustomertList />
                </Route>
            </CustomerProvider>
            <EmployeeProvider>
                {/* Render the animal list when http://localhost:3000/animals */}
                <Route path="/employees">
                    <EmployeeList />
                </Route>
            </EmployeeProvider>
        </>
    )
}