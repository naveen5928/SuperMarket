/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from "react";
import FetchWrapper from "../ReUsableComponents/FetchWrappres";
import Product from "./Product";

export default function Products(props) {
  const { onProductAdd, onProductDelete, cart } = props;
  const [products, setProducts] = useState([]);
  const { get } = FetchWrapper("https://react-tutorial-demo.firebaseio.com/");
  useEffect(() => {
    get("supermarket.json")
      .then((product) => setProducts(product))
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
      <div className="products-layout">
        <h1>Products</h1>
        <p>Take a look at our products</p>
        <div className="products-grid">
          {products.map((product) => {
            return (
              <Product
                key={product.id}
                details={product}
                onProductAdd={onProductAdd}
                onProductDelete={onProductDelete}
                cart={cart}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
