import React, { useState, createContext } from "react";
export const CustomerCandyContext = createContext();

export const CustomerCandyProvider = (props) => {
  const [customerCandy, setCustomerCandy] = useState([]);

  const getCustomerCandy = () => {
    return fetch(
      "http://localhost:8088/customerCandy?_expand=productType"
    )
      .then((res) => res.json())
      .then((data) => setCustomerCandy(data));
  };

  const addCustomerCandy = (productObject) => {
    return fetch("http://localhost:8088/customerCandy", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productObject),
    }).then(getCustomerCandy);
  };

  return (
    <CustomerCandyContext.Provider
      value={{
        customerCandy,
        getCustomerCandy,
        addCustomerCandy,
      }}
    >
      {props.children}
    </CustomerCandyContext.Provider>
  );
};
