// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import NavBar from "./Components/NavBar";
import Products from "./Components/Products";
import Cart from "./Components/Cart";
import ProductDetailsInfo from "./Components/ProductDetailsInfo";
import ProductStorage from "./Components/ProductStorage";
import ProductNutrition from "./Components/ProductNutrition";
import ProductDetails from "./Components/ProductDetails";
function App() {
  const [cart, setCart] = useState([]);
  const handleProductAdd = (newProduct) => {
    console.log("Adding Product" + newProduct.id);
  };
  const handleProductDelete = (newProduct) => {
    console.log("Deleting Product" + newProduct.id);
  };
  return (
    <Router>
      <NavBar cart={cart} />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/products"
            element={
              <Products
                cart={cart}
                onProductAdd={handleProductAdd}
                onProductDelete={handleProductDelete}
              />
            }
          />

          <Route path="/products/:id" element={<ProductDetails />}>
            <Route path="" element={<ProductDetailsInfo />}></Route>
            <Route path="nutrition" element={<ProductNutrition />}></Route>
            <Route path="storage" element={<ProductStorage />}></Route>
          </Route>
          <Route path="/cart" element={<Cart cart={cart} />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
