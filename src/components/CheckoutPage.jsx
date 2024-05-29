import React, {useEffect, useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import '/src/CheckoutPage.css';


const CheckoutPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    const fetchData = async (e) => {
        try {
            const response = await axios.get(
                `http://localhost:8080/api/advertisements/${id}`
            );
            setProduct (response.data);
        } catch (error) {
            console.error(error)
        }
    
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
                </form>

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
                    <p>Total to pay: {parseFloat(product.price) + 40.00},00 kr</p>
                    <button type="submit">Pay Now</button>
                </div>
            </div>
        </div>
    )
);
};

export default CheckoutPage;