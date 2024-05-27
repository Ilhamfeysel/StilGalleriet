import React, { useEffect, useState } from "react";
import axios from "axios";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

/*
  Can be done:
  - Solve boolean value issue, not sure if it comes from backend or frontend
  - Better styling, display image
  - Show advertisement title instead of ID, might require change in backend or grab data from advertisement here
  - Pagination

*/

const Purchases = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = JSON.parse(window.localStorage.getItem("user"));

        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/orders/purchases/${user.id}`
        );

        setOrders(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <h4 className="text-center">Purchases</h4>
      <div className="row">
        {orders.map((order, index) => (
          <div key={index} className="col-sm-4">
            <ListGroup>
              <Link to={`/product/${order.advertisementId}`}>
                <ListGroup.Item>Ad ID: {order.advertisementId}</ListGroup.Item>
              </Link>
              <ListGroup.Item>Seller: {order.sellerUserId}</ListGroup.Item>
              <ListGroup.Item>Date: {order.orderDate}</ListGroup.Item>
              <ListGroup.Item>Quantity: {order.quantity}</ListGroup.Item>
              <ListGroup.Item>Price: {order.totalPrice}</ListGroup.Item>
              <ListGroup.Item>Sold: {`${order.isSold}`}</ListGroup.Item>
            </ListGroup>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Purchases;
