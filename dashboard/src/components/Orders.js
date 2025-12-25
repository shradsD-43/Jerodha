import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/getAllUserOrder`,
          {
            withCredentials: true,
          }
        );
        setAllOrders(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchOrders();
  }, []);

  if (allOrders.length === 0) {
    return (
      <>
        <h3 className="title">Orders</h3>
        <div className="orders">
          <div className="no-orders">
            <p>
              You haven't placed any orders today
              <br />
              Place orders from the watchlist
            </p>
            <Link to={"/"} className="btn">
              Get started
            </Link>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <h3 className="title">Orders ({allOrders.length})</h3>
        <div className="order-table">
          <table>
            <thead>
              <tr>
                <th>Instrument</th>
                <th>Qty.</th>
                <th>Price</th>
                <th>Type</th>
              </tr>
            </thead>

            <tbody>
              {allOrders.map((order, index) => {
                return (
                  <tr key={index}>
                    <td>{order.name}</td>
                    <td>{order.qty}</td>
                    <td>{order.price.toFixed(2)}</td>
                    <td>{order.mode}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    );
  }
};

export default Orders;
