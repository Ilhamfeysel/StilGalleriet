import { useState } from "react";
import axios from "axios";
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

    console.log("name: " + name, "value: " + value);

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
        //adGender: advertisement.adGender,
        adPrice: advertisement.adPrice,
      });

      console.log("Request sent");
    } catch (error) {
      console.log("Error: " + error);
    }
  };

  return (
    <div className="container">
      <form action="" className="form">
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="adTitles"
            value={advertisement.adTitles}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            name="adDescriptions"
            value={advertisement.adDescriptions}
            onChange={handleChange}
          />
        </div>
        {/*
        <div>
          <label htmlFor="gender">Gender</label>
          <select
            name="adGender"
            id="adGender"
            value={adGender}
            onChange={handleChange}
          >
            <option value="FEMALE">Female</option>
            <option value="MALE">Male</option>
            <option value="UNISEX">Unisex</option>
          </select>
          
        </div>
        */}
        <div>
          <label htmlFor="price">Price:</label>
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
