import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedProduct } from "../redux/productSlice";
import { setCurrency, selectCurrency } from "../redux/currencySlice";
import { addToCard } from "../redux/magazinSlice";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const currency = useSelector(selectCurrency);
  const dispatch = useDispatch();

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

  const handleAddToBag = (product) => {
    dispatch(setSelectedProduct(product));
  };

  // Function to handle currency change
  const handleCurrencyChange = () => {
    dispatch(setCurrency(currency === "USD" ? "UZS" : "USD"));
  };

  // Function to add item to store (Magazin)
  const handleAddToStore = (product) => {
    dispatch(addToCard(product));
  };

  return (
    <>
      {loading ? (
        <div className="loading_wrapper">
          <div className="loading"></div>
        </div>
      ) : (
        <div>
          <div className="Home_page">
            <div className="home_page_left">
              <div className="home_page_title">
                <h1>Meet Our Award Winning Vitamin C</h1>
                <p>
                  Winner of New Beauty 2024 award, "Best Vitamin C Serum",
                  C-RADICAL Defense helps to defend against free radical damage
                  with a novel form of vitamin C, helping brighten the skin and
                  reducing the appearance of fine lines and wrinkles.
                </p>
                <button>SHOP NOW</button>
              </div>
            </div>
            <div className="home_page_right">
              <img
                style={{ width: "1013px", height: "527px" }}
                src="https://alastin.com/cdn/shop/files/Best_Vitamin_C_Serum_Homepage.png?v=1711666463"
                alt="Home_image"
              />
            </div>
          </div>
          {/* Currency Change Button */}
          <div className="currency_button">
            <button
              className="currency_button_in"
              onClick={handleCurrencyChange}
            >
              {currency === "USD" ? "UZS" : "USD"}
            </button>
          </div>
          {/* Product Cards */}
          <div className="product_cards">
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
                    <p className="card_price">
                      {currency === "USD"
                        ? `$ ${product.price}`
                        : `UZS ${product.price * 12.3}`}
                    </p>
                    {/* <Link to={`/magazin/${product.id}`}> */}
                      <div className="button_group">
                        <p
                          className="details_button"
                          onClick={() => handleAddToStore(product)}
                        >
                          ADD TO STORE
                        </p>
                      </div>
                    {/* </Link> */}
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

export default Home;
