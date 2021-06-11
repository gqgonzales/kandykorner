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

  usersCart.sort((a, b) => {
    return a.productId - b.productId;
  });

  const productQuantities = [{ product: {} }];

  usersCart.forEach((item) => {
    const lastProduct = [...productQuantities].pop();
    if (item.productId !== lastProduct.productId) {
      const productObj = {
        productId: item.productId,
        name: item.product.name,
        price: item.product.price,
        quantity: 1,
      };
      productQuantities.push(productObj);
    } else {
      lastProduct.quantity += 1;
      productQuantities.pop();
      const productObj = {
        productId: item.productId,
        name: item.product.name,
        price: item.product.price,
        quantity: lastProduct.quantity,
      };
      productQuantities.push(productObj);
    }
  });

  productQuantities.shift();

  useEffect(() => {
    getCustomerCandy();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <h2 className="subsection__header">Cart</h2>
      <div className="cart">
        {customerCandy.map((item) => {
          return (
            <div
              className="cart__items item"
              id={`cart--${item.id}`}
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
