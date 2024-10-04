/* eslint-disable react/prop-types */
import React from "react";
import Button from "../ReUsableComponents/Button";
export default function Product(props) {
  const { description, name, image, price, ...rest } = props.details;
  console.log(props.details);
  return (
    <>
      <div className="product">
        <div className="product-image-container">
          <img
            width="100"
            height="100"
            className="product-image"
            src={image}
            alt={name}
          />
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
