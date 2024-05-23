import React, { useState } from "react";
//import "/src/Favorites.css";

const FavoriteButton = ({ item }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (itemToAdd) => {
    setFavorites([...favorites, itemToAdd]);
  };

  return <button onClick={() => addToFavorites(item)}>Favorites</button>;
};

export default FavoriteButton;
