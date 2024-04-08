import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Bronzer.css";

const Bronzer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        "http://makeup-api.herokuapp.com/api/v1/products.json?product_type=bronzer"
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
      <div className="shopSkincare_container">
        <img
          src="https://alastin.com/cdn/shop/files/All_products_Desktop_1600x@2x.jpg?v=1697499292"
          alt="pageimage"
        />
        <div className="shopSkincare_title">
          <h1>BRONZER CATEGORY</h1>
          <p>
            From anti-aging skincare to products designed to complement cosmetic
            treatments, find exactly what you need for glowing, more
            youthful-looking skin.
          </p>
        </div>
      </div>
      <div className="bronzer_container">
        {loading ? (
          <div className="loading_wrapper">
            <div className="loading"></div>
          </div>
        ) : (
          <div className="bronzer_cards">
            {products.map((product) => (
              <div className="card" key={product.id}>
                <Link to={`/single-page/${product.id}`} className="card_link">
                  <h1 className="fetchText">{product.brand}</h1>
                  <img src={product.image_link} alt={product.name} />
                  <p>{product.name}</p>
                  <p>Price: ${product.price}</p>
                  <div className="button_group">
                    <p className="details_button">ADD TO CARD</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Bronzer;
