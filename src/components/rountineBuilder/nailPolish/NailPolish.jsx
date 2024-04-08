import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./NailPolish.css";

const NailPolish = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        "http://makeup-api.herokuapp.com/api/v1/products.json?product_type=nail_polish"
      )
      .then((response) => {
        let products = response.data;
        console.log(response.data);
        setProducts(products);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="rountine_container">
        <img
          src="https://alastin.com/cdn/shop/files/Build_a_Better_Routine_1600x@2x.png?v=1683238628"
          alt="pageimage"
        />
        <div className="rountine_title">
          <h1>ROUNTINE BUILDER</h1>
          <p>
            From anti-aging skincare to products designed to complement cosmetic
            treatments, find exactly what you need for glowing, more
            youthful-looking skin.
          </p>
        </div>
      </div>
      <ul className="product_cards">
        {loading ? (
          <div className="loading_wrapper">
            <div className="loading"></div>
          </div>
        ) : (
          products.map((product) => (
            <li key={product.id} className="card">
              <Link to={`/single-page/${product.id}`} className="card_link">
                <img
                  src={product.image_link}
                  alt={product.name}
                  className="card_image"
                />
                <div className="card_content">
                  <h2 className="card_title">{product.name}</h2>
                  <p className="card_brand">{product.brand}</p>
                  <p className="card_price">${product.price}</p>
                  <div className="button_group">
                    <p className="details_button">ADD TO CARD</p>
                  </div>
                </div>
              </Link>
            </li>
          ))
        )}
      </ul>
    </>
  );
};

export default NailPolish;
