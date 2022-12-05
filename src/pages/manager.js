import React, { useEffect, useState } from "react";
import { Link, useHistory,useNavigate  } from "react-router-dom";
import { useForm } from "react-hook-form";
import productservice from "../service/product.service";
import "../style/manage.css";
import ModalUser from "./addnew";
import authService from "../service/user.service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PostNewProduct from './addnew'
function Manager() {
  let history = useHistory();
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
  const [error, setError] = useState([]);
  ////
  const [data, setData] = useState({ products: [] });
  useEffect(() => {
    productservice.getAllProducts().then((res) => {
      setData(res.data);
    });
  }, []);
  /////
  const onSubmit = (data) => {
    const name=data.name;
      const material=data.material;
      const price=data.price;
      const img=data.img;
      authService.postNewProduct(name, material, price, img).then(
        () => {
        // window.open("/login")
        window.alert("Successed!");
        history.push("/");
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
  const [isopen,setIsopen] = useState(false);

  const handelAddnewProducts =() => 
  { history.push("/addnew")}
 
  const LoadEdit = (id) => {
    history.push("/edit/" + id);
}
const Removefunction = (id) => {
  if (window.confirm('Do you want to remove?')) {
     productservice.deleteProduct(id).then((res) => {
          alert('Removed successfully.')
          window.location.reload();
      }).catch((err) => {
          console.log(err.message)
      })
  }
}


  return (
    <div className="users-table mt-3 mx-1">
      <div className="mx-1">
        <button className="btn btn-primary " onClick={handelAddnewProducts}>
          Add new user</button>
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
              <tr key={product._id}>
                <td>
                  {" "}
                  <img src={product.img} />
                </td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.material}</td>
                <td>
                <a onClick={() => { LoadEdit(product.id) }} className="btn btn-success">Edit</a>
                <a onClick={() => { Removefunction(product.id) }} className="btn btn-danger">Delete</a>
                </td>
              </tr>
            );
          })}
      </table>
    </div>
  );
}

export default Manager;
