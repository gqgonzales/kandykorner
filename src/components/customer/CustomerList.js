import React, { useContext, useEffect, useState } from "react";
import { CustomerContext } from "./CustomerProvider";
import "./Customer.css";
import { useHistory } from "react-router-dom";

export const CustomerList = () => {
  const { customers, getCustomers } =
    useContext(CustomerContext);
  // const [] = useState();

  //useEffect - reach out to the world for something
  useEffect(() => {
    getCustomers();
  }, []);

  // const history = useHistory();

  //   The empty array bracket is the dependency array. It only runs on first render.
  return (
    <>
      <div className="subsection__header__container">
        <h2 className="subsection__header">Customers</h2>
      </div>
      <div className="customers">
        {customers.map((customer) => {
          return (
            <div
              className="customer"
              id={`customer--${customer.id}`}
              key={customer.id}
            >
              <h3 className="customer__name">{customer.name}</h3>
              <div className="customer__email">
                e-Mail: {customer.email}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
