import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "/src/CheckoutPage.css";

/*Have to think about the process of making an order(buy) will work.
For example right now there is no use of the inputs, as there is no way to store them.
This branch will be suspended for the time being until we can work on the project again.
*/

const CheckoutPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const [order, setOrder] = useState({
    buyerUserId: "",
    sellerUserID: "",
  });

  const fetchData = async (e) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/advertisements/${id}`
      );
      setProduct(response.data);
    } catch (error) {
      console.error(error);
    }

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;

      setOrder({ ...order, [name]: value });
    };

    const handleSubmit = async (event) => {
      event.preventDefault();

      const user = JSON.parse(window.localStorage.getItem("user"));
      const advertisement = await axios.get(
        `http://localhost:8080/api/advertisements/${id}`
      );

      try {
        await axios.post(`${import.meta.env.VITE_API_URL}/orders`, {
          buyerUserId: user.id,
          sellerUserID: advertisement.sellerUserID,
        });

        console.log({ advertisement });
      } catch (error) {
        console.log("Error: " + error);
      }
    };
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    product && (
      <div className="checkout-page">
        {/* Visa produktinformation i en mindre ruta */}
        <div className="order">
          <img src={product.imgUrl} alt="product" className="product-image" />
          <div className="product-details">
            <p>{product.name}</p>
            <p>Medium</p>
            <p>{product.price},00 kr</p>
          </div>
        </div>

        <div className="form-section">
          {/* Adressformulär */}
          <form className="address-form">
            <h2>Add your address</h2>
            <label>
              Full Name:
              <input type="text" name="name" />
            </label>
            <label>
              Address:
              <input type="text" name="address" />
            </label>
            <label>
              ZIP Code:
              <input type="text" name="zip" />
            </label>
            <label>
              City:
              <input type="text" name="country" />
            </label>
            {/* Delivery details */}
            <div className="delivery-details">
              <h2>Delivery details</h2>
              <p>UPS Express</p>
              <p>4.00 kr</p>
              <p>Home delivery, 2-5 business days</p>
            </div>

            {/* Order summary */}
            <div className="order-summary">
              <h2>Order summary</h2>
              <p>Order: {product.price},00 kr</p>
              <p>Shipping: 40.00 kr</p>
              <p>Total to pay: {parseFloat(product.price) + 40.0},00 kr</p>
              <button type="submit">Pay Now</button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default CheckoutPage;
