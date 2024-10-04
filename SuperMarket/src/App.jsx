// src/App.jsx
import React from "react";
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
  return (
    <Router>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/productS/:id" element={<ProductDetails />}>
            <Route path="" element={<ProductDetailsInfo />}></Route>
            <Route path="nutrition" element={<ProductNutrition />}></Route>
            <Route path="storage" element={<ProductStorage />}></Route>
          </Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
