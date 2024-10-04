import React from "react";
import { useOutletContext } from "react-router-dom";
export default function ProductStorage() {
  const product = useOutletContext();
  const storage = product.storage;

  return (
    <>
      <p>
        <strong>Storage instructions:</strong> {storage}
      </p>
    </>
  );
}
