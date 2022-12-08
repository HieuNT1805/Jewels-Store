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
import orderService from "../service/order.service";

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
            error.response.dataupdate &&
            error.response.dataupdate.message) ||
          error.message ||
          error.toString();
        setMessage(resMessage);
      }
    );
    console.log(dataupdate);
  };
  //
  const onSubmit = (items) => {
    {
      items &&
        items.map((item) => {
          const productId = item.id;
          const quantity = item.quantity;

          orderService.postOrder(productId, quantity).then(
            () => {
              // window.open("/login")
            },
            (error) => {
              const resMessage =
                (error.response &&
                  error.response.items &&
                  error.response.items.message) ||
                error.message ||
                error.toString();
              setMessage(resMessage);
            }
          );
          console.log(item);
        });
    }
    window.alert("Thank you");
    history.push("/");
    emptyCart();
  };
  //

  const { items, emptyCart, cartTotal } = useCart();

  return (
    <body class="bg-light">
      <div class="container">
        <main>
          <div className="row">
            <div className="col-sm fs-3 d-flex p-2">
              Jewellery
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
                      <td className="content">{item.quantity * item.price}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <h4 />
            <h4 />

            <div class="card bg-light">
              <div class="row">
                <div class="col-xl-9 fs-5">Payment Method</div>
                <div class="col-sm fs-5">Cash on Delivery</div>
                <div class="row">
                  <div class="col-xl-8"></div>
                  <div class="col-sm-3 fs-5">Merchandise Subtotal:</div>
                  <div class="col-sm fs-5">${cartTotal}</div>
                </div>
                <div class="row ">
                  <div class="col-xl-8"></div>
                  <div class="col-sm-3 fs-5">Shipping Total:</div>
                  <div class="col-sm fs-5">$160</div>
                </div>
                <div className="row">
                  <div class="col-xl-8"></div>
                  <div class="col-sm-3 fs-5">Total Payment:</div>
                  <div class="col-sm fs-5">${cartTotal + 160}</div>
                </div>
              </div>

              <div className="row ">
                <div className=" col-sm m-2 d-inline">
                <a className=''> By clicking "Place Order", you are agreeing to</a>
              <a className="" href="https://help.shopee.vn/portal/article/77242">
                   Jewellery's
                  General Transaction Terms
                </a>
                </div>
                <button
                  class=" col-sm-3 btn btn-primary m-2"
                  type="submit"
                  onClick={() => onSubmit(items)}
                >
                  Place Order
                </button>
              </div>
            </div>

            <h4 />
          </div>
        </main>
      </div>
    </body>
  );
}

export default Checkout;
