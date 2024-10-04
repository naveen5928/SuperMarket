/* eslint-disable react/prop-types */
import React from "react";
import Button from "../ReUsableComponents/Button";
import { NavLink } from "react-router-dom";
export default function Product(props) {
  const { details, onProductAdd, onProductDelete } = props;
  return (
    <>
      <div className="product">
        <div className="product-image-container">
          <NavLink to={`${details.id}`}>
            <img
              width="100"
              height="100"
              className="product-image"
              src={details.image}
              alt={details.name}
            />
          </NavLink>
          <div className="product-quantity-container">
            <div className="product-quantity">0</div>
          </div>
        </div>
        <div className="product-info">
          <h3>{details.name}</h3>
          <p> {details.description}</p>
        </div>
        <div className="product-checkout">
          <div>
            {
              <Button
                onClick={() => {
                  onProductDelete(details.id);
                }}
                outline
                className="product-delete">
                x
              </Button>
            }
          </div>
          {
            <Button onClick={() => onProductAdd(details)} outline>
              {details.price}
            </Button>
          }
        </div>
      </div>
    </>
  );
}
