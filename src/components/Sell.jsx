import { useState } from "react";
import axios from "axios";

import "/src/login.css";

/* Possible improvements:
1. Better validation(Refactor) and more validation(Only numbers in price field)
2. Display error message only when the field is currently invalid
*/

const Sell = () => {
  const [advertisement, setAdvertisement] = useState({
    sellerId: "",
    adTitles: "",
    adDescriptions: "",
    adGender: "",
    adCategory: "",
    //adImgUrls: "",
    adSize: "",
    adColor: "",
    adPrice: "",
  });

  //const for error and success messages
  const [error, setError] = useState("");
  const [sent, setSent] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setAdvertisement({ ...advertisement, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    //Check input is not empty. Not the best solution.
    if (advertisement.adTitles.length === 0) {
      return setError("Empty title");
    }

    if (advertisement.adGender.length === 0) {
      return setError("No gender specified");
    }

    if (advertisement.adCategory.length === 0) {
      return setError("No category specified");
    }

    if (advertisement.adSize.length === 0) {
      return setError("No size specified");
    }

    if (advertisement.adColor.length === 0) {
      return setError("No color specified");
    }

    if (!advertisement.adPrice) {
      return setError("No price specified");
    }

    //Store local item object in const so the id field in it can be accessed
    const user = JSON.parse(window.localStorage.getItem("user"));

    //console.log(user + " " + user.id);

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/advertisements/add`, {
        sellerId: user.id,
        adTitles: advertisement.adTitles,
        adDescriptions: advertisement.adDescriptions,
        adGender: advertisement.adGender,
        //adImgUrls: advertisement.adImgUrls,
        adCategory: advertisement.adCategory,
        adSize: advertisement.adSize,
        adColor: advertisement.adColor,
        adPrice: advertisement.adPrice,
      });

      console.log("Request sent");
      setSent("New ad created");
    } catch (error) {
      console.log("Error: " + error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f0f0f0",
      }}
    >
      <form
        className="login-form"
        onSubmit={handleSubmit}
        style={{ marginBottom: "1%", marginTop: "1%" }}
      >
        <h2>New advertisement</h2>
        <div className="input-field">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="adTitles"
            value={advertisement.adTitles}
            onChange={handleChange}
          />
        </div>
        <div className="input-field">
          <label htmlFor="description">Description</label>

          <textarea
            name="adDescriptions"
            id="adDescriptions"
            value={advertisement.adDescriptions}
            onChange={handleChange}
          />
        </div>

        <div className="input-field">
          <label htmlFor="gender">Gender</label>
          <select
            name="adGender"
            id="adGender"
            value={advertisement.adGender}
            onChange={handleChange}
          >
            <option value=""></option>
            <option value="FEMALE">Female</option>
            <option value="MALE">Male</option>
            <option value="UNISEX">Unisex</option>
          </select>
        </div>

        <div className="input-field">
          <label htmlFor="category">Category</label>
          <select
            name="adCategory"
            id="adCategory"
            value={advertisement.adCategory}
            onChange={handleChange}
          >
            <option value=""></option>
            <option value="DRESS">Dress</option>
            <option value="SKIRT">Skirt</option>
            <option value="SHIRT">Shirt</option>
            <option value="PANTS">Pants</option>
            <option value="SWEATER">Sweater</option>
            <option value="SHORTS">Shorts</option>
            <option value="COAT">Coat</option>
            <option value="JACKET">Jacket</option>
            <option value="SUIT">Suit</option>
            <option value="JEANS">Jeans</option>
          </select>
        </div>

        {/*
        <div className="input-field">
          <label htmlFor="image">Image link</label>
          <input
            type="text"
            name="adImgUrls"
            value={advertisement.adImgUrls}
            onChange={handleChange}
          />
        </div>
         */}
        <div className="input-field">
          <label htmlFor="size">Size</label>
          <select
            name="adSize"
            id="adSize"
            value={advertisement.adSize}
            onChange={handleChange}
          >
            <option value=""></option>
            <option value="XSMALL">XS</option>
            <option value="SMALL">S</option>
            <option value="MEDIUM">M</option>
            <option value="LARGE">L</option>
            <option value="XLARGE">XL</option>
          </select>
        </div>

        <div className="input-field">
          <label htmlFor="color">Color</label>
          <select
            name="adColor"
            id="adColor"
            value={advertisement.adColor}
            onChange={handleChange}
          >
            <option value=""></option>
            <option value="BLACK">Black</option>
            <option value="BLUE">Blue</option>
            <option value="PINK">Pink</option>
            <option value="RED">Red</option>
            <option value="BROWN">Brown</option>
            <option value="WHITE">White</option>
            <option value="YELLOW">Yellow</option>
            <option value="GREEN">Green</option>
            <option value="ORANGE">Orange</option>
            <option value="GRAY">Gray</option>
            <option value="MIX">Mixed</option>
          </select>
        </div>

        <div className="input-field">
          <label htmlFor="price">Price</label>
          <input
            type="text"
            name="adPrice"
            value={advertisement.adPrice}
            onChange={handleChange}
          />
        </div>
        <p style={{ color: "red" }}>{error}</p>
        <p style={{ color: "green" }}>{sent}</p>
        <button className="login-button" type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Sell;
