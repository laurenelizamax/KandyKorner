import React, { useContext } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { LocationContext } from "../Location/LocationProvider"
import Employee from "./Employee"
import "./Employee"

export default () => {
    const { employees } = useContext(EmployeeContext)
    const { locations } = useContext(LocationContext)

    return (
        employees.map(employee => {
            const clinic = locations.find(l => l.id === employee.locationId)

            return <Employee key={employee.id}
                location={clinic}
                employee={employee} />
        })
    )
}
