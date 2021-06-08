import React from "react";
import { Route } from "react-router-dom";
import { LocationList } from "./locations/LocationList";
import { LocationProvider } from "./locations/LocationProvider";

export const ApplicationViews = () => {
  return (
    <>
      <LocationProvider>
        <Route exact path="/">
          <LocationList />
        </Route>
      </LocationProvider>
    </>
  );
};
