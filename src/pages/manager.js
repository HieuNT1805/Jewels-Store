import React, { useEffect, useState } from "react";
import {
  Link,
  useHistory,
  useNavigate,
  useParams,
  useLocation,
} from "react-router-dom";
import { useForm } from "react-hook-form";
import productservice from "../service/product.service";
import "../style/manage.css";
import ModalUser from "./addnew";
import authService from "../service/user.service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PostNewProduct from "./addnew";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import _ from "lodash";

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

function Manager() {
  let history = useHistory();
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, dirtyFields },
    setValue,
  } = useForm({ mode: "onBlur" });
  const [error, setError] = useState([]);
  ////
  const [data, setData] = useState({ products: [] });
  useEffect(() => {
    productservice.getAllProducts().then((res) => {
      setData(res.data);
    });
  }, []);

  ////
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);

  const [data1, setData1] = useState({ products: {} });
  const handleOpen = (product) => {
    setOpen(true);
    setData1(product);
    if (data1 && !_.isEmpty(data1)) {
      setValue = () => [
        { id: data1.id },
        { name: data1.name },
        { material: data1.material },
        { price: data1.price },
      ];
    }
  };
  console.log(data1);
  const handleClose = () => {
    setOpen(false);
    reset();
  };
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

  ///

  /////

  const onUpdata = (dataupdate) => {
    const name = dataupdate.name;
    const material = dataupdate.material;
    const price = dataupdate.price;
    const img = dataupdate.img;
    const productId = dataupdate.productId;
    productservice.updateProduct(productId, name, material, price, img).then(
      () => {
        // window.open("/login")
        window.alert("Successed!");
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
  };
  const onAddnew = (dataAddnew) => {
    const name = dataAddnew.name;
    const material = dataAddnew.material;
    const price = dataAddnew.price;
    const img = dataAddnew.img;
    productservice.postNewProduct(name, material, price, img).then(
      () => {
        // window.open("/login")
        window.alert(" Successed!");
        window.location.reload();
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.dataAddnew &&
            error.response.dataAddnew.message) ||
          error.message ||
          error.toString();
        setMessage(resMessage);
      }
    );
    console.log(dataAddnew);
  };

  const [isopen, setIsopen] = useState(false);

  const handelAddnewProducts = () => {
    history.push("/addnew");
  };

  const LoadEdit = (id) => {
    history.push("/edit/" + id);
  };
  const Removefunction = (id) => {
    if (window.confirm("Do you want to remove?")) {
      productservice
        .deleteProduct(id)
        .then((res) => {
          alert("Removed successfully.");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  return (
    <body>
      <div className="mx-1 mt-5">
        <button className="btn btn-primary " onClick={handleOpen1}>
          Add new product
        </button>
      </div>
      <div className="users-table mt-3 mx-1">
        <div>
          <Modal
            open={open1}
            onClose={handleClose1}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <form onSubmit={handleSubmit(onAddnew)} className="form-register">
              <h1>
                {" "}
                <b>ADD NEW</b>{" "}
              </h1>
              {/* name */}
              <label htmlFor="name"> name</label>
              <input
                name="name"
                type="text"
                {...register("name", {
                  required: " Product name is required",
                  minLength: {
                    value: 5,
                    message:
                      "Product name must be between 2 character and 10 character",
                  },
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
                type="url"
                name="img"
                {...register("img", {
                  required: "image is required",
                })}
              ></input>

              {message && (
                <div>
                  <div role="alert">{message}</div>
                </div>
              )}
              <div className="row">
                <Button className="col-sm" type="submit" color="primary">
                  Save
                </Button>
                <Button
                  className="col-sm"
                  color="secondary"
                  onClick={handleClose1}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </Modal>
        </div>
        <table id="customers">
          <tr>
            <th class="h-10 w-10"></th>
            <th>Name</th>
            <th>Price</th>
            <th>material</th>
            <th>action</th>
          </tr>
          {data.products &&
            data.products.map((product) => {
              return (
                <tr key={product.id}>
                  <td>
                    {" "}
                    <img src={product.img} />
                  </td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.material}</td>
                  <td>
                    <a
                      className="btn btn-danger m-2"
                      onClick={() => handleOpen(product)}
                    >
                      Edit
                    </a>
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                      className="bg-body"
                    >
                      <form
                        onSubmit={handleSubmit(onUpdata)}
                        className="form-register h-100 "
                      >
                        <h1>
                          {" "}
                          <b>UPDATE</b>{" "}
                        </h1>
                        {/* id */}

                        <label htmlFor="productId"> product id</label>

                        <input
                          name="productId"
                          type="text"
                          defaultValue={data1.id}
                          {...register("productId")}
                        ></input>
                        {/* name */}
                        <label htmlFor="name"> name</label>
                        <input
                          name="name"
                          type="text"
                          defaultValue={data1.name}
                          {...register("name", {
                            required: "Product name is required",
                            minLength: {
                              value: 5,
                              message:
                                "Product name must be between 2 character and 10 character",
                            },
                          })}
                        ></input>
                        {errors.name && (
                          <small className="notion-text">
                            {" "}
                            {errors.name.message}
                          </small>
                        )}

                        {/* material */}

                        <div class="form-group">
                          <label for="exampleFormControlSelect1">
                            material
                          </label>
                          <select
                            defaultValue={data1.material}
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
                          defaultValue={data1.price}
                          type="text"
                          {...register("price", {
                            required: "price is required",
                          })}
                        ></input>
                        {errors.price && (
                          <small className="notion-text">
                            {" "}
                            {errors.price.message}
                          </small>
                        )}

                        {/* image */}
                        <label htmlFor="img">img</label>
                        <input
                          type="url"
                          name="img"
                          defaultValue={data1.img}
                          {...register("img", {
                            required: "image is required",
                          })}
                        ></input>
                        {errors.img && (
                          <small className="notion-text">
                            {" "}
                            {errors.img.message}
                          </small>
                        )}

                        {message && (
                          <div>
                            <div role="alert">{message}</div>
                          </div>
                        )}

                        <div className="row">
                          <Button
                            className="col-sm"
                            type="submit"
                            color="primary"
                          >
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

                    <a
                      onClick={() => {
                        Removefunction(product.id);
                      }}
                      className="btn btn-danger"
                    >
                      Delete
                    </a>
                  </td>
                </tr>
              );
            })}
        </table>
      </div>
    </body>
  );
}

export default Manager;
