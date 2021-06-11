import React, { useState, createContext } from "react";
export const ProductTypeContext = createContext();

export const ProductTypeProvider = (props) => {
  const [productTypes, setProductTypes] = useState([]);

  const getProductTypes = () => {
    return fetch(
      "https://gqg-kandykorner-api.herokuapp.com/productTypes?_embed=products"
    )
      .then((res) => res.json())
      .then((data) => setProductTypes(data));
  };

  const addProductType = (productTypeObj) => {
    return fetch(
      "https://gqg-kandykorner-api.herokuapp.com/productTypes",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productTypeObj),
      }
    ).then(getProductTypes);
  };

  return (
    <ProductTypeContext.Provider
      value={{
        productTypes,
        getProductTypes,
        addProductType,
      }}
    >
      {props.children}
    </ProductTypeContext.Provider>
  );
};
