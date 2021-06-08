import React from "react";
import { Route } from "react-router-dom";
import { LocationList } from "./locations/LocationList";
import { LocationProvider } from "./locations/LocationProvider";
import { ProductList } from "./products/ProductList";
import { ProductProvider } from "./products/ProductProvider";
import { ProductTypeList } from "./productTypes/ProductTypeList";
import { ProductTypeProvider } from "./productTypes/ProductTypeProvider";

export const ApplicationViews = () => {
  return (
    <>
      {/* LOCATIONS */}
      <LocationProvider>
        <Route exact path="/">
          <LocationList />
        </Route>
        <Route exact path="/locations">
          <LocationList />
        </Route>
      </LocationProvider>

      {/* PRODUCTS */}
      <ProductProvider>
        <ProductTypeProvider>
          <Route exact path="/products">
            <ProductList />
          </Route>
        </ProductTypeProvider>
      </ProductProvider>

      {/* PRODUCT TYPES */}
      <ProductTypeProvider>
        <Route exact path="/productTypes">
          <ProductTypeList />
        </Route>
      </ProductTypeProvider>

      {/* EMPLOYEES */}

      {/* CUSTOMERS */}
    </>
  );
};
