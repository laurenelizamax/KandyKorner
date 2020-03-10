import React, { useContext } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import Employee from "./Employee"
import "./Employee"

export default () => {
    const { employees } = useContext(EmployeeContext)

    return (
        <div className="employees">
            {
                employees.map(em => <Employee key={em.id} employee={em} />)
            }
        </div>
    )
}