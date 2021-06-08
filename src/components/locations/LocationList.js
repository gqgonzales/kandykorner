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
      <h2>Locations</h2>
      <button onClick={() => history.push("/locations/create")}>
        Open New Location
      </button>
      <div className="locations">
        {locations.map((location) => (
          <Link
            to={`/locations/detail/${location.id}`}
            key={location.id}
            className="location"
          >
            {location.name}
          </Link>
        ))}
      </div>
    </>
  );
};
