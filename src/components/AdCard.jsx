import React from "react";
import resim from "../assets/images/resim.jpg";

export default function AdCard(props) {
  return (
    <div className="container">
      <h4 className="text-left mb-2">Recently added</h4>
      <div className="row">
        <div className="col-sm">
          <div className="card">
            <img src={props.img} className="card-img-top" alt="..." />
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{props.price}</li>
              <li className="list-group-item">{props.size}</li>
              <li className="list-group-item">{props.category}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}