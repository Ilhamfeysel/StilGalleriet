import axios from "axios";
import { useState, useContext } from "react";
import { useForm } from "react-hook-form";

//Login
//Connect to backend

// 1. kolla vilka fält som måste fyllas i för att skapa en advertisement, kolla backend
// 2. när du gjort lista dom här i kommentar och se till att 100% korrekt
// 3. du vill skapa en ny advertisement med alla fält som ska fyllas i, det här ska vara ett state
// 4. antingen gör du ett objekt som har alla properties eller så sätter ett state för varje property
// se till att ha ett input fält med varje property som har rätt value och rätt name (se exempel)
// 5. det här ska du sedan skicka med i requesten

const ProductRegister = () => {
  // det går att ha ett objekt men titta på multiple input video för att skapa onchange
  // som hanterar data dynamiskt
  const [advertisement, setAdvertisement] = useState({
    title: "",
  });

  // eller så sätter man ett state för varje fält som krävs och skickar med alla dessa states
  // i requesten
  const [title, setTile] = useState("");
  /* const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm(); */

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/advertisements/add`,
        {
          // antingen skickar du med flera states eller objektet om du väljer
          // att ha ett objekt. för objekt hade du skickat advertisement
          title,
        }
      );

      throw new Error();
      //console.log(data);
    } catch (error) {
      setError("title", { message: "Title is already taken" });
    }
  };

  return (
    <div className="container">
      <form
        onSubmit={onSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <label htmlFor="">Title</label>
        <input
          /*  {...register("title", {
            required: "Title is required",
            validate: (value) => {
              if (!value.includes("@")) {
                return "Must include @";
              }
              return true;
            },
          })} */
          value={advertisement.title}
          name="title"
          type="text"
          placeholder="Title"
        />
        {errors.title && <p style={{ color: "red" }}>{errors.title.message}</p>}

        {/*
        <label htmlFor="">Description</label>
        <textarea {...register("description")} name="" id=""></textarea>
        <label htmlFor="">Category</label>
        <select {...register("category")} name="" id="">
          <option value=""></option>
        </select>
        <label htmlFor="">Size</label>
        <select name="" id="">
          <option value=""></option>
        </select>
        <label htmlFor="">Color</label>
        <select name="" id="">
          <option value=""></option>
        </select>
        <label htmlFor="">Gender</label>
        <select name="" id="">
          <option value=""></option>
        </select>
        <label htmlFor="">Price</label>
        <input {...register("price")} type="text" placeholder="Price" />
        */}

        <button disabled={isSubmitting} type="submit">
          {isSubmitting ? "Loading..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ProductRegister;
