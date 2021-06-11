import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { CustomerCandyContext } from "../customercandy/CustomerCandyProvider";
import "./Cart.css";

export const Cart = (item) => {
  const { customerCandy, getCustomerCandy } = useContext(
    CustomerCandyContext
  );
  const history = useHistory();

  const usersCart = customerCandy.filter(
    (c) =>
      c.customerId ===
      parseInt(localStorage.getItem("kandy_customer"))
  );

  useEffect(() => {
    getCustomerCandy();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <div className="subsection__header__container">
        <h2 className="subsection__header">Cart</h2>
      </div>
      <div className="cart">
        {usersCart.map((item) => {
          return (
            <div
              className="cart__items item"
              id={`cart--${item.id}`}
              key={`cart--${item.id}`}
            >
              <div className="item__name option__name">
                <h3>{item.product.name}</h3>
              </div>
              <div className="item__price">
                <div>
                  {item.product.price.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
