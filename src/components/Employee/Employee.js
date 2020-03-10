import React from "react"
import './Employee.css';


export default ({ employee }) => (
    <section className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        <h4 className="employee__locationId">{employee.locationId}</h4>
    </section>
)