import React, { useContext, useEffect, useState } from "react";
// To start, you need to import the context object you created in the provider component so that the useContext() hook can access the objects it exposes.
import { EmployeeContext } from "./EmployeeProvider";
import "./Employee.css";
import { useHistory } from "react-router-dom";

export const EmployeeList = () => {
  // This state changes when `getemployees()` is invoked below
  const { employees, getEmployees } =
    useContext(EmployeeContext);
  const [employee, setEmployee] = useState({
    location: {},
  });

  const history = useHistory();

  //useEffect - reach out to the world for something
  useEffect(() => {
    getEmployees();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  //   The empty array bracket is the dependency array. It only runs on first render.

  return (
    <>
      <h2 className="subsection__header">Our Team</h2>
      <button onClick={() => history.push("/employees/create")}>
        Hire new employee
      </button>
      <div className="employees">
        {employees.map((employee) => {
          return (
            <div
              className="employee"
              id={`employee--${employee.id}`}
            >
              <div className="employee__name option__name">
                <h3>{employee.name}</h3>
              </div>
              <div className="employee__info">
                <div className="employee__location">
                  Serving smiles at our {employee.location.name}{" "}
                  store.
                </div>
                <br></br>
                <div className="employee__email">
                  Reach them at: {employee.email}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
