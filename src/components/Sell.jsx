import { useState } from "react";
import axios from "axios";
//ResponseBody need to be sent/returned to backend
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

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/advertisements/add`, {
        adTitles: advertisement.adTitles,
        adDescriptions: advertisement.adDescriptions,
      });
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
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Sell;
