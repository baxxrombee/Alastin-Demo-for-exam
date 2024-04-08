import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ShopSkincare.css";

const ShopSkincare = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      {loading ? (
        <div className="loading_wrapper">
          <div className="loading"></div>
        </div>
      ) : (
        <div>
          <div className="shopSkincare_container">
            <img
              src="https://alastin.com/cdn/shop/files/All_products_Desktop_1600x@2x.jpg?v=1697499292"
              alt="pageimage"
            />
            <div className="shopSkincare_title">
              <h1>ALL SKINCARE</h1>
              <p>
                From anti-aging skincare to products designed to complement
                cosmetic treatments, find exactly what you need for glowing,
                more youthful-looking skin.
              </p>
            </div>
          </div>
          <div className="Shop_menu">
            <div className="shop_wrapper">
              <ul>
                <li>
                  <Link className="shop_link" to="./blush">
                    Blush
                  </Link>
                </li>
                <li>
                  <Link className="shop_link" to="./bronzer">
                    Bronzer
                  </Link>
                </li>
                <li>
                  <Link className="shop_link" to="./eyebrow">
                    Eyebrow
                  </Link>
                </li>
                <li>
                  <Link className="shop_link" to="./eyeliner">
                    Eyeliner
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="shop_cards">
            {products.map((product) => (
              <Link
                to={`/single-page/${product.id}`}
                className="card_link"
                key={product.id}
              >
                <div className="card">
                  <img
                    src={product.api_featured_image}
                    alt={product.name}
                    className="card_image"
                  />
                  <div className="card_content">
                    <h2 className="card_title">{product.name}</h2>
                    <p className="card_brand">{product.brand}</p>
                    <p className="card_price">{product.price}</p>
                    <div className="button_group">
                      <p className="details_button">ADD TO CARD</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ShopSkincare;
