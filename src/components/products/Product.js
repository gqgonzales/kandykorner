import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";

export const Product = ({ productObj }) => (
  <section className="product">
    <Link to={`/products/${productObj.id}`}>
      <h3 className="product__name">{productObj.name}</h3>
    </Link>
    <div className="product__type">
      {productObj.productTypes.name}
    </div>
    <div className="product__price">{productObj.price}</div>
  </section>
);
