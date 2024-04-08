import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCard, selectItems } from "../redux/magazinSlice";
import "./Magazin.css";

const Magazin = () => {
  const items = useSelector(selectItems);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCard(item));
  };

  return (
    <div className="magazin">
      <h1>Magazin</h1>
      <div className="items">
        {items.map((item) => (
          <div className="item" key={item.id}>
            <img
              src={item.api_featured_image}
              alt={item.name}
              className="item_image"
            />
            <div className="item_details">
              <p className="item_name">{item.name}</p>
              <p className="item_brand">{item.brand}</p>
              <p className="item_price">
                {item.currency === "USD"
                  ? `$ ${item.price}`
                  : `UZS ${item.price * 12.300}`}
              </p>
              {/* Modify button to remove from store */}
              <button
                className="remove_button"
                onClick={() => handleRemoveFromCart(item)}
              >
                REMOVE
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Magazin;
