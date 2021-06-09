import React, { useState, createContext } from "react";
export const EmployeeContext = createContext();

export const EmployeeProvider = (props) => {
  const [employees, setEmployees] = useState([]);

  const getEmployees = () => {
    return fetch(
      "http://localhost:8088/employees?_expand=location"
    )
      .then((res) => res.json())
      .then((data) => setEmployees(data));
  };

  const addEmployee = (employeeObject) => {
    return fetch(
      "http://localhost:8088/employees?_expand=location",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(employeeObject),
      }
    ).then(getEmployees);
  };

  const releaseEmployee = (employeeId) => {
    return fetch(
      `http://localhost:8088/employees/${employeeId}`,
      {
        method: "DELETE",
      }
    ).then(getEmployees);
  };

  const updateEmployee = (employee) => {
    return fetch(
      `http://localhost:8088/employees/${employee.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(employee),
      }
    ).then(getEmployees);
  };

  const getEmployeeById = (employeeId) => {
    return fetch(
      `http://localhost:8088/employees/${employeeId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => res.json());
  };

  return (
    <EmployeeContext.Provider
      value={{
        employees,
        getEmployees,
        addEmployee,
        releaseEmployee,
        updateEmployee,
        getEmployeeById,
      }}
    >
      {props.children}
    </EmployeeContext.Provider>
  );
};
