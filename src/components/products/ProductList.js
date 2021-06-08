import React, { useContext, useEffect } from "react";
// To start, you need to import the context object you created in the provider component so that the useContext() hook can access the objects it exposes.
import { ProductContext } from "./ProductProvider";
import "./Product.css";
import { useHistory, Link } from "react-router-dom";

export const ProductList = () => {
  // This state changes when `getproducts()` is invoked below
  const { products, getProducts } = useContext(ProductContext);
  const history = useHistory();

  //useEffect - reach out to the world for something
  useEffect(() => {
    getProducts();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  //   The empty array bracket is the dependency array. It only runs on first render.

  return (
    <>
      <h2 className="subsection__header">Our Sweets</h2>
      <button onClick={() => history.push("/products/create")}>
        Dream up new product
      </button>
      <div className="products">
        {products.map((product) => (
          <Link
            to={`/products/detail/${product.id}`}
            key={product.id}
            className="product"
          >
            {product.name}
          </Link>
        ))}
      </div>
    </>
  );
};
