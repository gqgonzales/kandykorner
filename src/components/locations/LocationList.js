import React, { useContext, useEffect } from "react";
// To start, you need to import the context object you created in the provider component so that the useContext() hook can access the objects it exposes.
import { LocationContext } from "./LocationProvider";
import "./Location.css";
import { useHistory, Link } from "react-router-dom";

export const LocationList = () => {
  // This state changes when `getLocations()` is invoked below
  const { locations, getLocations } =
    useContext(LocationContext);
  const history = useHistory();

  //useEffect - reach out to the world for something
  useEffect(() => {
    getLocations();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  //   The empty array bracket is the dependency array. It only runs on first render.

  return (
    <>
      <h2 className="subsection__header">Locations</h2>
      <button onClick={() => history.push("/locations/create")}>
        Open New Location
      </button>
      <div className="locations">
        {locations.map((location) => {
          return (
            <div
              className="location"
              id={`location--${location.id}`}
            >
              <div className="location__name option__name">
                <h3>{location.name}</h3>
              </div>
              <div className="location__info">
                <h4 className="location__address">
                  {location.address}
                </h4>
                <div className="location__squareFootage">
                  {location.squareFootage} square feet of
                  delicious candy, staffed by{" "}
                  {location.employees
                    .map((e) => {
                      return e.name;
                    })
                    .join(" + ")}
                  .
                </div>
                <br></br>
                <div className="location__accessibility">
                  Our {location.name} store
                  {location.handicapAccessible
                    ? " is wheelchair accessible."
                    : " is NOT wheelchair accessible."}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
