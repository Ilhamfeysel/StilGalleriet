import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { useParams, useNavigate } from "react-router-dom";

const ProductPage = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchData = async (e) => {
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

  const handleBuyNow = () => {
    navigate(`/pay/${id}`);
  };

  return (
    product && (
      <div className="container">
        <div className="row">
          <div className="col-sm mb-3">
            <div className="card">
              <img
                src={product.imgUrl}
                className="card-img-top"
                alt="product image"
              />
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                  {product.price}
                  <FontAwesomeIcon
                    icon={faHeart}
                    style={{ cursor: "pointer" }}
                  />{" "}
                </li>
                <li className="list-group-item">{product.size}</li>
                <li className="list-group-item">{product.category}</li>
              </ul>
              <button onClick={handleBuyNow}>Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductPage;