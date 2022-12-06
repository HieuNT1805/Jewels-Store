import React, { useEffect, useState } from "react";
import "../style/checkout.css";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import authService from "../service/user.service";
import "bootstrap/dist/css/bootstrap.min.css";
import getOders from "../service/order.service";
import axios from "axios";
import { useCart } from "react-use-cart";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Checkout() {
  let history = useHistory();
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
  const [error, setError] = useState([]);

  ////
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  ///
  const [data, setData] = useState({ user: {} });
  useEffect(() => {
    authService.getUser().then((res) => {
      setData(res.data);
    });
  }, []);
  ////
  const onUpdata = (dataupdate) => {
    const firstname = dataupdate.firstname;
    const lastname = dataupdate.lastname;
    const contact = dataupdate.contact;
    const address = dataupdate.address;

    authService.updateInformation(firstname, lastname, contact, address).then(
      () => {
        // window.open("/login")
        window.location.reload();
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
    console.log(dataupdate);
  };
  //
  const onSubmit = (data) => {
    const firstname = data.firstname;
    const lastname = data.lastname;
    const email = data.email;
    const username = data.username;
    const password = data.password;
    authService.register(firstname, lastname, email, username, password).then(
      () => {
        // window.open("/login")
        window.alert("Register Successed!");
        history.push("/login");
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
  //

  const { items, cartTotal } = useCart();

  return (
    <body class="bg-light">
      <div class="container">
        <main>
          <div className="row">
            <div className="col-sm fs-3 d-flex p-2">Jewellery
            
            <pre> | </pre>
            Payment
            </div>
          </div>
          <div className="" class="col-lg-20">
            <div class="card">
              {data && (
                <address className="fs-5 text-danger">Shipping Address</address>
              )}
              <h4 />
              <div className="row">
                <div className="font-weight-bold col-sm fs-5">
                  {data.user.firstname}
                  {data.user.lastname} {data.user.contact}
                </div>
                <div className="col-sm-4 fs-5">{data.user.address}</div>
                <div class=" col-sm-4 fs-5"> Default</div>
                <Button className="col-sm" onClick={handleOpen}>
                  Update
                </Button>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <form
                    onSubmit={handleSubmit(onUpdata)}
                    className="form-register"
                  >
                    {/* name */}
                    <label htmlFor="name"> lastname</label>
                    <input
                      name="lastname"
                      type="text"
                      {...register("lastname", {
                        required: "Last name is required",
                      })}
                    ></input>
                    {errors.name && (
                      <small className="notion-text">
                        {" "}
                        {errors.name.message}
                      </small>
                    )}
                    {/** */}
                    <label htmlFor="name"> firstname</label>
                    <input
                      name="firstname"
                      type="text"
                      {...register("firstname", {
                        required: "First name is required",
                      })}
                    ></input>
                    {errors.name && (
                      <small className="notion-text">
                        {" "}
                        {errors.name.message}
                      </small>
                    )}
                    {/*Contact*/}
                    <label htmlFor="name"> contact</label>
                    <input
                      name="contact"
                      type="text"
                      {...register("contact", {
                        required: "contact name is required",
                      })}
                    ></input>
                    {errors.name && (
                      <small className="notion-text">
                        {" "}
                        {errors.name.message}
                      </small>
                    )}
                    {/*Address*/}
                    <label htmlFor="name"> address</label>
                    <input
                      name="address"
                      type="text"
                      {...register("address", {
                        required: "address name is required",
                      })}
                    ></input>
                    {errors.name && (
                      <small className="notion-text">
                        {" "}
                        {errors.name.message}
                      </small>
                    )}
                    <div className="row">
                      <Button className="col-sm" type="submit" color="primary">
                        Save
                      </Button>
                      <Button
                        className="col-sm"
                        color="secondary"
                        onClick={handleClose}
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                </Modal>
              </div>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="needs-validation"
              novalidate
            >
              <table className="table table-light- m-1 table-sm">
                <tbody>
                  <tr>
                    <td
                      className="product-col"
                      style={{ padding: "5px 70px 7px 10px" }}
                    >
                      <b>Product</b>
                    </td>
                    <td
                      className="name-col"
                      style={{ padding: "5px 100px 7px 10px" }}
                    >
                      <b>Name</b>
                    </td>
                    <td
                      className="price-col"
                      style={{ padding: "5px 50px 7px 10px" }}
                    >
                      <b>Price</b>
                    </td>
                    <td
                      className="quantity-col"
                      style={{ padding: "5px 50px 7px 10px" }}
                    >
                      <b>Quantity</b>
                    </td>
                    <td
                      className="price-col"
                      style={{ padding: "5px 50px 7px 10px" }}
                    >
                      <b>Price</b>
                    </td>
                  </tr>
                  {items.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <img
                            src={item.img}
                            style={{ height: "10rem" }}
                            alt=""
                          ></img>
                        </td>
                        <td className="content">{item.name}</td>
                        <td className="content">{item.price}</td>
                        <td className="content">{item.quantity}</td>
                        <td className="content">
                          {item.quantity * item.price}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <h4 />
              <h4 />

              <div class="card">
                <div class="row">
                  <div class="col-xl-9 fs-5">Phương thức thanh toán</div>
                  <div class="col-sm fs-5">Thanh toán khi nhận hàng</div>
                  <div class="card">
                    <div class="row">
                      <div class="col-xl-8"></div>
                      <div class="col-sm fs-5">tong tien hang</div>
                      <div class="col-sm fs-5">₫{cartTotal * 100.0}</div>
                    </div>
                    <div class="row ">
                      <div class="col-xl-8"></div>
                      <div class="col fs-5">phi van chyyen</div>
                      <div class="col-sm fs-5">₫21.600</div>
                    </div>
                    <div className="row">
                      <div class="col-xl-8"></div>
                      <div class="col-sm fs-5">tong thanh toan:</div>
                      <div class="col-sm fs-5">₫165.600</div>
                    </div>
                  </div>
                </div>
              </div>
              <button class="w-100 btn btn-primary btn-lg" type="submit">
                Continue to checkout
              </button>
            </form>
          </div>
        </main>
      </div>
    </body>
  );
}

export default Checkout;
