import React from "react";
import "./Employee.css";
import { Link } from "react-router-dom";

export const employee = ({ employeeObj }) => (
  <section className="employee">
    <Link to={`/employees/${employeeObj.id}`}>
      <h3 className="employee__name">{employeeObj.name}</h3>
    </Link>
    <div className="employee__address">
      {employeeObj.address}
    </div>
  </section>
);
