import React, { useContext, useEffect, useState } from "react";

import "./Employee.css";
import { useHistory, useParams } from "react-router-dom";
import { EmployeeContext } from "./EmployeeProvider";
import { LocationContext } from "../locations/LocationProvider";

export const EmployeeForm = () => {
  const {
    addEmployee,
    getEmployeeById,
    updateEmployee,
    getEmployees,
  } = useContext(EmployeeContext);
  const { locations, getLocations } =
    useContext(LocationContext);

  //for edit, hold on to state of employee in this view
  // The input fields need to be CONTROLLED and thus need to be definied form the outset.
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    locationId: 0,
    isManager: false,
    isFullTime: false,
    hourlyRate: 0,
  });
  //wait for data before button is active
  const [isLoading, setIsLoading] = useState(true);

  const { employeeId } = useParams();
  const history = useHistory();

  //when field changes, update state. This causes a re-render and updates the view.
  //Controlled component
  const handleControlledInputChange = (event) => {
    //When changing a state object or array,
    //always create a copy make changes, and then set state.
    const newEmployee = { ...employee };
    //employee is an object with properties.
    //set the property to the new value
    newEmployee[event.target.name] = event.target.value;
    //update state
    setEmployee(newEmployee);
  };

  const handleSaveEmployee = () => {
    if (parseInt(employee.locationId) === 0) {
      window.alert(
        "Please enter all required fields to continue."
      );
    } else {
      //disable the button - no extra clicks
      setIsLoading(true);
      if (employeeId) {
        //PUT - update
        updateEmployee({
          id: employee.id,
          name: employee.name,
          locationId: parseInt(employee.locationId),
          email: employee.email,
          isManager: employee.isManager,
          isFullTime: employee.isFullTime,
          hourlyRate: parseFloat(employee.hourlyRate),
        }).then(() => history.push(`/employees`));
      } else {
        //POST - add
        if (employee.isManager === "true") {
          employee.isManager = true;
        } else if (employee.isManager === "false") {
          employee.isManager = false;
        }

        if (employee.isFullTime === "true") {
          employee.isFullTime = true;
        } else if (employee.isFullTime === "false") {
          employee.isFullTime = false;
        }

        const newEmployeeObject = {
          name: employee.name,
          locationId: parseInt(employee.locationId),
          email: employee.email,
          isManager: employee.isManager,
          isFullTime: employee.isFullTime,
          hourlyRate: parseFloat(employee.hourlyRate),
        };
        addEmployee(
          newEmployeeObject
          // name: employee.name,
          // locationId: parseInt(employee.locationId),
          // email: employee.email,
          // isManager: employee.isManager,
          // isFullTime: employee.isFullTime,
          // hourlyRate: parseFloat(employee.hourlyRate),
        ).then(() => history.push("/employees"));
      }
    }
  };

  // Get customers and locations. If employeeId is in the URL, getEmployeeById
  useEffect(() => {
    getEmployees()
      .then(getLocations)
      .then(() => {
        if (employeeId) {
          getEmployeeById(employeeId).then((employee) => {
            setEmployee(employee);
            setIsLoading(false);
          });
        } else {
          setIsLoading(false);
        }
      });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  //since state controlls this component, we no longer need
  //useRef(null) or ref

  return (
    <form className="employeeForm">
      <h2 className="employeeForm__title subsection__header">
        Hire someone sweet
      </h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="employeeName">Name: </label>
          <input
            type="text"
            id="employeeName"
            name="name"
            value={employee.name}
            required
            autoFocus
            className="form-control"
            placeholder="Employee Name"
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="location">Location: </label>
          <select
            value={employee.locationId}
            name="locationId"
            id="employeeLocation"
            className="form-control"
            onChange={handleControlledInputChange}
          >
            <option value="0">Select a location</option>
            {locations.map((l) => (
              <option key={l.id} value={l.id}>
                {l.name}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="employeeEmail">Email: </label>
          <input
            type="text"
            id="employeeEmail"
            name="email"
            value={employee.email}
            required
            autoFocus
            className="form-control"
            placeholder="E-Mail Address"
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      {/* isManager */}
      <fieldset>
        <div className="form-group">
          <label htmlFor="employeeLevel">Level: </label>
          <select
            id="employeeLevel"
            name="isManager"
            className="form-control"
            placeholder="Store role"
            onChange={handleControlledInputChange}
            value={employee.isManager}
          >
            <option value="false">Associate</option>
            <option value="true">Lead</option>
          </select>
        </div>
      </fieldset>
      {/* isFullTime */}
      <fieldset>
        <div className="form-group">
          <label htmlFor="employeeInvolvement">
            Involvement:{" "}
          </label>
          <select
            id="employeeInvolvement"
            name="isFullTime"
            value={employee.isFullTime}
            className="form-control"
            placeholder="Full or part time?"
            onChange={handleControlledInputChange}
          >
            <option value="false">Part Time</option>
            <option value="true">Full Time</option>
          </select>
        </div>
      </fieldset>
      {/* ONE MORE */}
      <fieldset>
        <div className="form-group">
          <label htmlFor="employeeHourlyRate">
            Hourly Rate:{" "}
          </label>
          <input
            type="float"
            id="employeeHourlyRate"
            name="hourlyRate"
            value={employee.hourlyRate}
            required
            className="form-control"
            placeholder="Starting Pay"
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <button
        className="btn btn-primary"
        disabled={isLoading}
        onClick={(event) => {
          event.preventDefault(); // Prevent browser from submitting the form and refreshing the page
          handleSaveEmployee();
        }}
      >
        {employeeId ? <>Save those changes!</> : <>Hire 'em!</>}
      </button>
      <button
        class="cancel__button"
        onClick={() => history.push("/employees")}
      >
        Cancel!
      </button>
    </form>
  );
};
