import React, { useContext, useEffect } from "react";
// To start, you need to import the context object you created in the provider component so that the useContext() hook can access the objects it exposes.
import "./ProductTypes.css";
import { useHistory, Link } from "react-router-dom";
import { ProductTypeContext } from "./ProductTypeProvider";

export const ProductTypeList = () => {
  // This state changes when `getProductTypes()` is invoked below
  const { productTypes, getProductTypes } = useContext(
    ProductTypeContext
  );
  const history = useHistory();

  //useEffect - reach out to the world for something
  useEffect(() => {
    getProductTypes();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  //   The empty array bracket is the dependency array. It only runs on first render.

  return (
    <>
      <h2 className="subsection__header">Product Families</h2>
      <button className="btn" onClick={() => history.push("/products/create")}>
        Create a new category
      </button>
      <div className="productTypes">
        {productTypes.map((productType) => (
          <Link
            to={`/products/detail/${productTypes.id}`}
            key={productTypes.id}
            className="productType option__name"
          >
            {productType.name}
          </Link>
        ))}
      </div>
    </>
  );
};
