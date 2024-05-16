import axios from "axios";
import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
const ProductRegister = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
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
        {errors.title && <p className="text-red-500">{errors.title.message}</p>}
        <label htmlFor="">Description</label>
        <textarea name="" id=""></textarea>
        <label htmlFor="">Category</label>
        <select name="" id="">
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
        <input type="text" placeholder="Price" />
        <button disabled={isSubmitting}>
          {isSubmitting ? "Loading..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ProductRegister;
