import React, { useContext } from "react"
import { CustomerContext } from "./CustomerProvider"
import Customer from "./Customer"
import "./Customer"

export default () => {
    const { customers } = useContext(CustomerContext)

    return (
        <div className="customers">
            {
                customers.map(cu => <Customer key={cu.id} customer={cu} />)
            }
        </div>
    )
}