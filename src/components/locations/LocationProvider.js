import React, { useState, createContext } from "react";
export const LocationContext = createContext();

export const LocationProvider = (props) => {
  const [locations, setLocations] = useState([]);

  const getLocations = () => {
    return fetch(
      "https://gqg-kandykorner-api.herokuapp.com/locations?_embed=employees"
    )
      .then((res) => res.json())
      .then((data) => setLocations(data));
  };

  const addLocation = (locationObject) => {
    return fetch(
      "https://gqg-kandykorner-api.herokuapp.com/locations",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(locationObject),
      }
    ).then(getLocations);
  };

  return (
    <LocationContext.Provider
      value={{
        locations,
        getLocations,
        addLocation,
      }}
    >
      {props.children}
    </LocationContext.Provider>
  );
};
