import React, { useState, useEffect } from "react";
import axios from "axios";
import "../blush/Blush.css";

const Eyeliner = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        "http://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeliner"
      )
      .then((response) => {
        let products = response.data;
        console.log(response.data);
        setProducts(products);
        setLoading(false); // Set loading to false when data is fetched
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
          <h1>EYELINER CATEGORY</h1>
          <p>
            From anti-aging skincare to products designed to complement cosmetic
            treatments, find exactly what you need for glowing, more
            youthful-looking skin.
          </p>
        </div>
      </div>
      <div className="Blush_container">
        {loading ? (
          <div className="loading_wrapper">
            <div className="loading"></div>
          </div>
        ) : (
          <div className="blush_cards">
            {products.map((product) => (
              <div className="card" key={product.id}>
                <h1 className="fetchText">{product.brand}</h1>
                <img src={product.image_link} alt={product.name} />
                <p>{product.name}</p>
                <p>Price: ${product.price}</p>
                <div className="button_group">
                  <p className="details_button">ADD TO CARD</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Eyeliner;
