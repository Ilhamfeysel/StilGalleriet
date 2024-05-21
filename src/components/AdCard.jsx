import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom"; //la till denna och link längre ner:Dany

export default function AdCard(props) {
  const cardStyle = {
    width: "90%", 
    maxWidth: "300px", 
    margin: "10px",
  };

  const imgContainerStyle = {
    width: "100%",
    height: "200px", 
    overflow: "hidden", 
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  };

  const imgStyle = {
    width: "auto",
    height: "100%",
    objectFit: "cover", 
  };

  const listItemStyle = {
    fontSize: "14px",
  };

  const handleImageClick = () => {
    alert("You clicked the advertisement!");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm mb-3">
        <Link to={`/product/${props.id}`}> 
          <div className="card" style={cardStyle}>
            <div style={imgContainerStyle} onClick={handleImageClick}>
              <img src={props.imgUrl} alt="product image" style={imgStyle} />
            </div>
            <ul className="list-group list-group-flush">
              <li
                className="list-group-item d-flex justify-content-between"
                style={listItemStyle}
              >
                {props.price}
                <FontAwesomeIcon
                  icon={faHeart}
                  style={{ cursor: "pointer" }}
                />{" "}
              </li>
              <li className="list-group-item" style={listItemStyle}>
                {props.size}
              </li>
              <li className="list-group-item" style={listItemStyle}>
                {props.category}
              </li>
            </ul>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
}


