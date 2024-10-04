import React from "react";
import { useOutletContext } from "react-router-dom";
import Button from "../ReUsableComponents/Button";
export default function ProductDetailsInfo() {
  const products = useOutletContext();

  return (
    <>
      <p>
        DESCRIPTION sold at <strong>${products.price}</strong> per piece.
      </p>
      <Button>${products.price}</Button>
    </>
  );
}
