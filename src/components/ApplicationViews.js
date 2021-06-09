import React from "react";
import { Route } from "react-router-dom";
import { EmployeeList } from "./employees/EmployeeList";
import { EmployeeProvider } from "./employees/EmployeeProvider";
import { EmployeeForm } from "./employees/EmployeeForm";
import { LocationList } from "./locations/LocationList";
import { LocationProvider } from "./locations/LocationProvider";
import { ProductList } from "./products/ProductList";
import { ProductProvider } from "./products/ProductProvider";
import { ProductTypeList } from "./productTypes/ProductTypeList";
import { ProductTypeProvider } from "./productTypes/ProductTypeProvider";
import { CustomerProvider } from "./customer/CustomerProvider";
import { Customer } from "./customer/Customer";
import { CustomerCandyProvider } from "./customercandy/CustomerCandyProvider";

export const ApplicationViews = () => {
  return (
    <>
      <LocationProvider>
        <ProductProvider>
          <ProductTypeProvider>
            <EmployeeProvider>
              <CustomerProvider>
                <CustomerCandyProvider>
                  {/* LOCATIONS */}
                  <Route exact path="/">
                    <LocationList />
                  </Route>
                  <Route exact path="/locations">
                    <LocationList />
                  </Route>
                  {/* PRODUCTS */}
                  <Route exact path="/products">
                    <ProductList />
                  </Route>

                  {/* PRODUCT TYPES */}
                  <Route exact path="/productTypes">
                    <ProductTypeList />
                  </Route>

                  {/* EMPLOYEES */}
                  <Route exact path="/employees">
                    <EmployeeList />
                  </Route>

                  {/* <Route path="/employees/edit/:employeeId(\d+)">
                <EmployeeForm />
              </Route> */}

                  <Route exact path="/employees/create">
                    <EmployeeForm />
                  </Route>

                  {/* CUSTOMERS */}
                  <Route exact path="/customers">
                    <Customer />
                  </Route>
                </CustomerCandyProvider>
              </CustomerProvider>
            </EmployeeProvider>
          </ProductTypeProvider>
        </ProductProvider>
      </LocationProvider>
    </>
  );
};
