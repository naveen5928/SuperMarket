// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import NavBar from "./Components/NavBar";
import Products from "./Components/Products";
import Cart from "./Components/Cart";
function App() {
  return (
    <Router>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
