import React, { useContext, useEffect, useState } from "react";
// To start, you need to import the context object you created in the provider component so that the useContext() hook can access the objects it exposes.
import { EmployeeContext } from "./EmployeeProvider";
import "./Employee.css";
import { useHistory, useParams } from "react-router-dom";

export const EmployeeList = () => {
  // This state changes when `getemployees()` is invoked below
  const { employees, getEmployees, releaseEmployee } =
    useContext(EmployeeContext);
  const [employee, setEmployee] = useState({
    location: {},
  });

  const history = useHistory();

  //useEffect - reach out to the world for something
  useEffect(() => {
    getEmployees();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // const { employeeId } = useParams();

  // useEffect(() => {
  //   const thisEmployee = employees.find(
  //     (e) => e.id === parseInt(employeeId)
  //   ) || { location: {} };

  //   setEmployee(thisEmployee);
  // }, [employeeId]);

  return (
    <>
      <div className="subsection__header__container">
        <h2 className="subsection__header">Our Team</h2>
      </div>
      <div className="button__container">
        <button
          className="btn"
          onClick={() => history.push("/employees/create")}
        >
          Hire new employee
        </button>
      </div>
      <div className="employees">
        {employees.map((employee) => {
          return (
            <div
              className="employee"
              id={`employee--${employee.id}`}
              key={`employee--${employee.id}`}
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
                <br></br>
                <div className="button_group">
                  <button
                    className="btn"
                    onClick={() => {
                      history.push(
                        `/employees/edit/${employee.id}`
                      );
                    }}
                  >
                    Edit Employee Info
                  </button>
                  {/* <button
                    className="btn"
                    onClick={() => history.push("/employees")}
                  >
                    Cancel!
                  </button> */}
                  <button
                    className="btn delete__button"
                    onClick={() => {
                      releaseEmployee(employee.id);
                      history.push("/employees");
                    }}
                  >
                    Fire 'em ????
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
