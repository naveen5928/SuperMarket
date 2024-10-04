import React, { useState, useEffect } from "react";
import { NavLink, useParams, Outlet } from "react-router-dom";
import FetchWrappers from "../ReUsableComponents/FetchWrappres";
export default function ProductDetails() {
  const [products, setProducts] = useState([]);
  const params = useParams();
  const id = params.id;
  const { get } = FetchWrappers(
    "https://react-tutorial-demo.firebaseio.com/productinfo/id"
  );
  useEffect(() => {
    get(`${id}.json`)
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);
  const getClassName = ({ isActive }) => {
    return isActive ? "tab-active" : "";
  };

  return (
    <>
      <div className="product-details-layout">
        <div>
          <h2>{products.name}</h2>
          <img
            width="125"
            height="125"
            className="product-details-image"
            alt={products.name}
            src={products.image}
          />
        </div>
        <div>
          <div className="tabs">
            <ul>
              <li>
                <NavLink to="" className={getClassName} end>
                  Details
                </NavLink>
              </li>
              <li>
                <NavLink to="nutrition" className={getClassName}>
                  Nutrition
                </NavLink>
              </li>
              <li>
                <NavLink to="storage" className={getClassName}>
                  Storage
                </NavLink>
              </li>
            </ul>
          </div>
          <Outlet context={products} />
        </div>
      </div>
    </>
  );
}
