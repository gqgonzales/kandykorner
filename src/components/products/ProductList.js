import React, { useContext, useEffect } from "react";
// To start, you need to import the context object you created in the provider component so that the useContext() hook can access the objects it exposes.
import { ProductContext } from "./ProductProvider";
import { CustomerCandyContext } from "../customercandy/CustomerCandyProvider";
import "./Product.css";
import { useHistory } from "react-router-dom";

export const ProductList = () => {
  // This state changes when `getproducts()` is invoked below
  const { products, getProducts } = useContext(ProductContext);
  const { addCustomerCandy } = useContext(CustomerCandyContext);
  const history = useHistory();

  //useEffect - reach out to the world for something
  useEffect(() => {
    getProducts();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  //   The empty array bracket is the dependency array. It only runs on first render.

  return (
    <>
      <div className="subsection__header__container">
        <h2 className="subsection__header">Our Sweets</h2>
      </div>
      <button
        className="btn"
        onClick={() => history.push("/products/create")}
      >
        Dream up new product
      </button>
      <section className="products">
        {products.map((product) => {
          return (
            <div
              className="product"
              id={`product--${product.id}`}
            >
              <div className="product__name option__name">
                <h3>{product.name}</h3>
              </div>
              <div className="product__info">
                <div className="product__type">
                  A tasty {product.productType.name} treat!
                </div>
                <div className="product__price">
                  ${product.price}
                </div>
                <button
                  className="btn"
                  onClick={(event) => {
                    addCustomerCandy({
                      customerId: parseInt(
                        localStorage.getItem("kandy_customer")
                      ),
                      productId: product.id,
                    });
                  }}
                >
                  Add to order
                </button>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};
