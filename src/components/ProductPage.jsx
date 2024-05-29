import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { useParams, useNavigate } from "react-router-dom";
import "/src/ProductPage.css"; 

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
    navigate(`/checkout/${id}`);
  };

  return (
    product && (
      <div className="container product-page-container ">
        <div className="row">
          <div className="col-sm mb-3 product-details-container">
            <div className="card product-image-container">
              <img
                src={product.imgUrl}
                className="card-img-top product-image"
                alt="product image"
              />
              </div>
              </div>
              <div className="col-sm-6 mb-3 product-details-container">
            <div className="card">
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between product-price">
                  {product.price},00 kr
                  <FontAwesomeIcon
                    icon={faHeart}
                    style={{ cursor: "pointer" }}
                  />{" "}
                </li>
                <li className="list-group-item product-size">{product.size}</li>
                <li className="list-group-item product-category">{product.category}</li>
              </ul>
              <button onClick={handleBuyNow} className= "Buy-now-button">Buy Now</button>
            </div>
          </div>
        </div>
        </div>
    )
  );
};

export default ProductPage;