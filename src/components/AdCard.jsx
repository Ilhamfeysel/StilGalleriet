import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom"; //la till denna och link längre ner:Dany

export default function AdCard(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm mb-3">
        <Link to={`/product/${props.id}`}> 
          <div className="card">
            <img
              src={props.imgUrl}
              className="card-img-top"
              alt="product image"
            />
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex justify-content-between">
                {props.price}
                <FontAwesomeIcon
                  icon={faHeart}
                  style={{ cursor: "pointer" }}
                />{" "}
              </li>
              <li className="list-group-item">{props.size}</li>
              <li className="list-group-item">{props.category}</li>
            </ul>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
}