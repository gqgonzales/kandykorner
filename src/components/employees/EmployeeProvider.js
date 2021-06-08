import React, { useState, createContext } from "react";
export const EmployeeContext = createContext();

export const EmployeeProvider = (props) => {
  const [employees, setEmployees] = useState([]);

  const getEmployees = () => {
    return fetch(
      "http://localhost:8088/employees?_embed=locations"
    )
      .then((res) => res.json())
      .then((data) => setEmployees(data));
  };

  const addEmployee = (employeeObject) => {
    return fetch("http://localhost:8088/employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employeeObject),
    }).then(getEmployees);
  };

  return (
    <EmployeeContext.Provider
      value={{
        employees,
        getEmployees,
        addEmployee,
      }}
    >
      {props.children}
    </EmployeeContext.Provider>
  );
};
