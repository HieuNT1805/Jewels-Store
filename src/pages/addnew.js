import React, { useState } from "react";
import "../style/register.css";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import productservice from "../service/product.service";

function PostNewProduct() {
  let history = useHistory();
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => {
    const name = data.name;
    const material = data.material;
    const price = data.price;
    const img = data.img;
    productservice.postNewProduct(name, material, price, img).then(
      () => {
        // window.open("/login")
        window.alert(" Successed!");
        history.push("/manage");
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        setMessage(resMessage);
      }
    );
    console.log(data);
  };

  return (
    <div className="register">
      <form onSubmit={handleSubmit(onSubmit)} className="form-register">
        <h1>  <b>ADD NEW</b> </h1>
        {/* name */}
        <label htmlFor="name"> name</label>
        <input
          name="name"
          type="text"
          {...register("name", {
            required: "First name is required",
          })}
        ></input>
        {errors.name && (
          <small className="notion-text"> {errors.name.message}</small>
        )}

        {/* material */}

        <div class="form-group">
          <label for="exampleFormControlSelect1">material</label>
          <select
            class="form-control"
            id="exampleFormControlSelect1"
            {...register("material")}
          >
            <option>Diamond</option>
            <option>Gold</option>
            <option>Silver</option>
          </select>
        </div>

        {/* price */}

        <label htmlFor="price">price</label>
        <input
          name="price"
          type="text"
          {...register("price", {
            required: "price is required",
          })}
        ></input>
        {errors.price && (
          <small className="notion-text"> {errors.price.message}</small>
        )}

        {/* image */}
        <label htmlFor="img">img</label>
        <input
          name="img"
          {...register("img", {
            required: "img is required"
          })}
        ></input>

        {message && (
          <div>
            <div role="alert">{message}</div>
          </div>
        )}
        <button type="submit" className="btn-login">Save</button>
      </form>
    </div>
  );
}

export default PostNewProduct;
