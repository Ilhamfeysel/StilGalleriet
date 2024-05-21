import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const PaymentPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/advertisements/${id}`
      );
      setProduct(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Hantera inskick av formulär här
    console.log('Formulär inskickat!');
  };

  return (
    product && (
      <div className="payment-page">
        <div className="product-details">
          <img src={product.imgUrl} alt={product.name} />
          <h3>{product.name}</h3>
          <p>Pris: ${product.price}</p>
          <p>Storlek: {product.size}</p>
          <p>Kategori: {product.category}</p>
        </div>

        <form onSubmit={handleFormSubmit}>
          <label>
            Fullständigt namn:
            <input type="text" name="fullName" required />
          </label>
          <label>
            Adress:
            <input type="text" name="address" required />
          </label>
          <label>
            Postnummer:
            <input type="text" name="zipCode" required />
          </label>
          <label>
            Land:
            <input type="text" name="country" required />
          </label>
          <button type="submit">Betala nu</button>
        </form>

        <div className="order-summary">
          <h3>Order</h3>
          <p>Delsumma: ${product.price}</p>
          <p>Frakt: $0</p>
          <p>Totalt att betala: ${product.price}</p>
        </div>
      </div>
    )
  );
};

export default PaymentPage;