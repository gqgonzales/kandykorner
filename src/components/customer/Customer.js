import React from "react";
import "./Customer.css";
import { Link } from "react-router-dom";

export const Customer = ({ customer }) => (
  <section className="customer">
    <Link to={`/customers/${customer.id}`}>
      <h3 className="customer__name">{customer.name}</h3>
    </Link>
    <div className="customer__email">{customer.email}</div>
  </section>
);
