import React from "react"
import './Employee.css';


export default ({ employee, location }) => (
    <section className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        <h4 className="employee__locationId">Location:{location.name}</h4>
    </section>
)
