import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "../components/Location/LocationProvider"
import { ProductProvider } from "../components/Product/ProductProvider"
import LocationList from "./Location/LocationList"
import ProductList from "./Product/ProductList"
import { CustomerProvider } from "./Customer/CustomerProvider"
import { ProductTypeProvider } from "./ProductType/ProductTypeProvider"
import { EmployeeProvider } from "./Employee/EmployeeProvider"
import CustomertList from "./Customer/CustomerList"
import EmployeeList from "./Employee/EmployeeList"

export default (props) => {
    return (
        <>
            <LocationProvider>
                <Route exact path="/">
                    <LocationList />
                </Route>
            </LocationProvider>

            < CustomerProvider >
                < Route path="/customers" >
                    <CustomertList />
                </Route >
            </CustomerProvider >

            <ProductProvider>
                <ProductTypeProvider>
                    <Route path="/products">
                        <ProductList />
                    </Route>
                </ProductTypeProvider>
            </ProductProvider>

            <EmployeeProvider>
                <LocationProvider>
                    <Route path="/employees">
                        <EmployeeList />
                    </Route>
                </LocationProvider>
            </EmployeeProvider>
        </>
    )
}