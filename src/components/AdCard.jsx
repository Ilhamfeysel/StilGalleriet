import React from "react";

export default function AdCard(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <div className="card">
            <img src={props.imgUrl} className="card-img-top" alt="..." />
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{props.price} </li>
              <li className="list-group-item">{props.size}</li>
              <li className="list-group-item">{props.category}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
