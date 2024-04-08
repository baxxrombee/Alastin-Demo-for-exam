import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrency } from "../redux/currencySlice";
import "./SinglePage.css";

const SinglePage = () => {
  const { id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const currency = useSelector(selectCurrency);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }
        const data = await response.json();
        setSelectedProduct(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <div className="single_page">
      {loading ? (
        <div className="loading_wrapper">
          <div className="loading"></div>
        </div>
      ) : selectedProduct ? (
        <div className="product_details">
          <h2>{selectedProduct.name}</h2>
          <p>Brand: {selectedProduct.brand}</p>
          <p>Price: {currency === "USD" ? `$ ${selectedProduct.price}` : `UZS ${selectedProduct.price * 12.300}`}</p>
          <img
            src={selectedProduct.api_featured_image}
            alt={selectedProduct.name}
            className="product_image"
          />
        </div>
      ) : (
        <div>No product found</div>
      )}
    </div>
  );
};

export default SinglePage;
