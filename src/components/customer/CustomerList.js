import React, { useContext, useEffect } from "react";
import { CustomerContext } from "./CustomerProvider";
import "./Customer.css";

export const CustomerList = () => {
  const { customers, getCustomers } =
    useContext(CustomerContext);

  //useEffect - reach out to the world for something
  useEffect(() => {
    getCustomers();
  }, []);

  //   The empty array bracket is the dependency array. It only runs on first render.
  return (
    <section className="customers">
      <h2>Customers</h2>
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
            <div className="customer__address">
              Address: {customer.address}
            </div>
            <div className="customer__animals">
              Pets:{" "}
              {customer.animals
                .map((a) => {
                  return a.name;
                })
                .join(", ")}
            </div>
          </div>
        );
      })}
    </section>
  );
};
