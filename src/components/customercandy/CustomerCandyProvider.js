import React, { useState, createContext } from "react";
export const CustomerCandyContext = createContext();

export const CustomerCandyProvider = (props) => {
  const [customerCandy, setCustomerCandy] = useState([]);

  const getCustomerCandy = () => {
    return fetch(
      "https://gqg-kandykorner-api.herokuapp.com/customerCandy?_expand=product&_expand=customer"
    )
      .then((res) => res.json())
      .then((data) => setCustomerCandy(data));
  };

  const addCustomerCandy = (productObject) => {
    return fetch(
      "https://gqg-kandykorner-api.herokuapp.com/customerCandy",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productObject),
      }
    ).then(getCustomerCandy);
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
