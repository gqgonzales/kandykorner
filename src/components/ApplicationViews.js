import React from "react";
import { Route } from "react-router-dom";
import { LocationList } from "./locations/LocationList";
import { LocationProvider } from "./locations/LocationProvider";
import { ProductList } from "./products/ProductList";
import { ProductProvider } from "./products/ProductProvider";
import { ProductTypeProvider } from "./productTypes/ProductTypeProvider";

export const ApplicationViews = () => {
  return (
    <>
      {/* LOCATIONS */}
      <LocationProvider>
        <Route exact path="/">
          <LocationList />
        </Route>
      </LocationProvider>

      {/* PRODUCTS */}
      <ProductProvider>
        <Route exact path="/products">
          <ProductList />
        </Route>
      </ProductProvider>

      {/* PRODUCT TYPES */}
      <ProductTypeProvider>
        <Route exact path="/productTypes">
          <ProductList />
        </Route>
      </ProductTypeProvider>

      {/* EMPLOYEES */}

      {/* CUSTOMERS */}
    </>
  );
};
