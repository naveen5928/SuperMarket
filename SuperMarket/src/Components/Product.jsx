/* eslint-disable react/prop-types */
import React from "react";
import Button from "../ReUsableComponents/Button";
import { NavLink } from "react-router-dom";
export default function Product(props) {
  const { id, description, name, image, price, ...rest } = props.details;

  return (
    <>
      <div className="product">
        <div className="product-image-container">
          <NavLink to={`${id}`}>
            <img
              width="100"
              height="100"
              className="product-image"
              src={image}
              alt={name}
            />
          </NavLink>
          <div className="product-quantity-container">
            <div className="product-quantity">0</div>
          </div>
        </div>
        <div className="product-info">
          <h3>{name}</h3>
          <p> {description}</p>
        </div>
        <div className="product-checkout">
          <div>
            {
              <Button outline className="product-delete">
                x
              </Button>
            }
          </div>
          {<Button outline>{price}</Button>}
        </div>
      </div>
    </>
  );
}
