import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { CustomerContext } from "../customer/CustomerProvider";
import { LocationContext } from "../locations/LocationProvider";
import { ProductTypeContext } from "../productTypes/ProductTypeProvider";
import "./Product.css";
import { ProductContext } from "./ProductProvider";

export const ProductForm = () => {
  const { addProduct, getproductById, updateProduct } =
    useContext(ProductContext);
  const { locations, getLocations } =
    useContext(LocationContext);
  const { customers, getCustomers } =
    useContext(CustomerContext);
  const { productTypes, getProductTypes } = useContext(
    ProductTypeContext
  );

  //for edit, hold on to state of product in this view
  const [product, setProduct] = useState({
    name: "",
    productTypeId: 0,
    price: "",
  });
  //wait for data before button is active
  const [isLoading, setIsLoading] = useState(true);

  const { productId } = useParams();
  const history = useHistory();

  //when field changes, update state. This causes a re-render and updates the view.
  //Controlled component
  const handleControlledInputChange = (event) => {
    //When changing a state object or array,
    //always create a copy make changes, and then set state.
    const newProduct = { ...product };
    //product is an object with properties.
    //set the property to the new value
    newProduct[event.target.name] = event.target.value;
    //update state
    setProduct(newProduct);
  };

  const handleSaveproduct = () => {
    if (parseInt(product.productTypeId) === 0) {
      window.alert("Please select a location");
    } else {
      //disable the button - no extra clicks
      setIsLoading(true);
      if (productId) {
        //PUT - update
        updateProduct({
          id: product.id,
          name: product.name,
          price: product.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          }),
          productTypeId: product.productTypeId,
        }).then(() => history.push(`/products/${product.id}`));
      } else {
        //POST - add
        addProduct({
          name: product.name,
          price: product.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          }),
          productTypeId: product.productTypeId,
        }).then(() => history.push("/products"));
      }
    }
  };

  // Get customers and locations. If productId is in the URL, getproductById
  useEffect(() => {
    getCustomers()
      .then(getProductTypes)
      .then(() => {
        if (productId) {
          getproductById(productId).then((product) => {
            setProduct(product);
            setIsLoading(false);
          });
        } else {
          setIsLoading(false);
        }
      });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  //since state controlls this component, we no longer need
  //useRef(null) or ref

  return (
    <form className="productForm">
      <div className="subsection__header__container">
        <h2 className="productForm__title subsection__header">
          New Candy!
        </h2>
      </div>
      {/* --------------- NAME --------------- */}
      <fieldset>
        <div className="form-group">
          <label htmlFor="productName">
            What should we call it?{" "}
          </label>
          <input
            type="text"
            id="productName"
            name="name"
            required
            className="form-control"
            placeholder="Candy Name"
            onChange={handleControlledInputChange}
            value={product.name}
          />
        </div>
      </fieldset>
      {/* --------------- TYPE --------------- */}
      <fieldset>
        <div className="form-group">
          <label htmlFor="location">
            What family does it belong to?{" "}
          </label>
          <select
            value={product.productTypeid}
            name="productTypeId"
            id="productLocation"
            className="form-control"
            onChange={handleControlledInputChange}
          >
            <option value="0">Select a candy family</option>
            {productTypes.map((t) => (
              <option key={t.id} value={t.id}>
                {t.name}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      {/* --------------- {PRICE} --------------- */}
      <fieldset>
        <div className="form-group">
          <label htmlFor="productPrice">
            How much will it cost per unit?{" "}
          </label>
          <input
            type="text"
            id="productPrice"
            name="price"
            required
            className="form-control"
            placeholder="Candy price"
            onChange={handleControlledInputChange}
            value={product.price}
          />
        </div>
      </fieldset>
      {/* --------------- {SAVE IT} --------------- */}
      <button
        className="btn btn-primary"
        disabled={isLoading}
        onClick={(event) => {
          event.preventDefault(); // Prevent browser from submitting the form and refreshing the page
          handleSaveproduct();
        }}
      >
        {productId ? <>Save product</> : <>Add product</>}
      </button>
      <button
        className="cancel__button"
        onClick={() => history.push("/products")}
      >
        Cancel
      </button>
    </form>
  );
};
