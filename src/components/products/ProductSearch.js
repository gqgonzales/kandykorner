import React, { useContext } from "react";
import { ProductContext } from "./ProductProvider";
import "./Product.css";

export const ProductSearch = () => {
  const { setSearchTerms } = useContext(ProductContext);

  return (
    <>
      Candy search:
      <input
        type="text"
        className="input--wide"
        onKeyUp={(event) => setSearchTerms(event.target.value)}
        placeholder="Search for a candy... "
      />
    </>
  );
};
