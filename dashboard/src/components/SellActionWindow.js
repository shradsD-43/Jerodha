import React, { useState, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import GeneralContext from "./GeneralContext";
import "./SellActionWindow.css";

const SellActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const generalContext = useContext(GeneralContext);

  const handleSellClick = async () => {
    try {
      const { data } = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/addNewOrder`, {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "SELL",
      }, { withCredentials: true });
      const { success, message } = data;

      if (success) {
        toast.success(message);
        generalContext.closeSellWindow();
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Failed to place order";
      toast.error(errorMessage);
      generalContext.closeSellWindow();
    }
  };

  const handleCancelClick = () => {
    generalContext.closeSellWindow();
  };

  return (
    <div className="container-s" id="buy-window">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <button className="btn btn-warning" onClick={handleSellClick}>
            Sell
          </button>
          <button className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;
