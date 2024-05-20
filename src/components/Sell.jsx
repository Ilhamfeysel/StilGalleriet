import { useState } from "react";
import axios from "axios";
import "/src/login.css";
//RequestBody need to be sent/returned to backend. Maybe Axios does this.
//Retrieve userId from localstorage, send required fields
//Enum
const Sell = () => {
  const [advertisement, setAdvertisement] = useState({
    sellerId: "",
    adTitles: "",
    adDescriptions: "",
    adGender: "",
    adCategory: "",
    adImgUrls: "",
    adSize: "",
    adColor: "",
    adPrice: "",
  });
  //const [error, setError] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    //console.log("name: " + name, "value: " + value);

    setAdvertisement({ ...advertisement, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    //console.log(JSON.parse(window.localStorage.getItem("user")));

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/advertisements/add`, {
        sellerId: "65fdd10f2f1b477433efc538",

        //JSON.parse(window.localStorage.getItem("user")), //Not sure the exact name of item to retrieve
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
      <form className="login-form" onSubmit={handleSubmit}>
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

        <div className="input-field">
          <label htmlFor="image">Image link</label>
          <input
            type="text"
            name="adImgUrls"
            value={advertisement.adImgUrls}
            onChange={handleChange}
          />
        </div>

        <div className="input-field">
          <label htmlFor="size">Size</label>
          <select
            name="adSize"
            id="adSize"
            value={advertisement.adSize}
            onChange={handleChange}
          >
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
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Sell;
