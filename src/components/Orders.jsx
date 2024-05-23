import { useState } from "react";
import axios from "axios";

const Orders = () => {
  const [order, setOrder] = useState([]);

  const orderData = async () => {
    try {
      const user = JSON.parse(window.localStorage.getItem("user"));

      const getBuyerOrders = await axios.get(
        `${import.meta.env.VITE_API_URL}/orders/${user.id}` //Need to grab orders where logged in user id = buyerId
      );

      setOrder(getBuyerOrders);

      console.log(order);
    } catch (error) {
      console.log("Error: " + error);
    }
  };

  return <div className="container">{"Data: " + order}</div>;
};

export default Orders;
