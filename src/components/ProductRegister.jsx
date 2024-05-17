import axios from "axios";
import { useState, useContext } from "react";
import { useForm } from "react-hook-form";

//Login
//Connect to backend

const ProductRegister = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/advertisements/add`,
        {
          title,
        }
      );

      throw new Error();
      console.log(data);
    } catch (error) {
      setError("title", { message: "Title is already taken" });
    }
  };

  return (
    <div className="container">
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <label htmlFor="">Title</label>
        <input
          {...register("title", {
            required: "Title is required",
            validate: (value) => {
              if (!value.includes("@")) {
                return "Must include @";
              }
              return true;
            },
          })}
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
