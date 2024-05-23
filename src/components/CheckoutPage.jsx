import React, {useEffect, useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


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
      <div>
        {/* Visa produktinformation i en mindre ruta */}
        <div>
          <img src={product.imgUrl} alt="product image" style={{ width: "100px" }} />
          <p>{product.price}</p>
          {/* Lägg till mer produktinformation här */}
        </div>

        {/* Adressformulär */}
        <form>
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
            Country:
            <input type="text" name="country" />
          </label>
          <input type="submit" value="Pay Now" />
        </form>
      </div>
    )
  );
};  


export default CheckoutPage;