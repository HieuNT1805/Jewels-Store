import React, {useEffect,useState} from 'react'
import "../style/checkout.css";
import {Link, useHistory} from 'react-router-dom';
import { useForm } from "react-hook-form";
import authService from '../service/user.service';
import 'bootstrap/dist/css/bootstrap.min.css';
import getOders from '../service/order.service'
import axios from 'axios';
import { useCart } from 'react-use-cart';


function Checkout() {
  let history=useHistory();
  const [message, setMessage] = useState("");
  const { register, handleSubmit, formState: { errors } } = useForm({mode: 'onBlur'});
  const [error, setError] = useState([]);

  ////
  const [data, setData] = useState({user:{}}); 
  useEffect(() => {
    authService.getUser()
    .then((res) =>{
      setData(res.data)
    })
  }, [])
  ////

  const onSubmit = data => {
      const firstname=data.firstname;
      const lastname=data.lastname;
      const email=data.email;
      const username=data.username;
      const password=data.password;
      authService.register(firstname, lastname, email, username, password).then(
        () => {
          // window.open("/login")
          window.alert("Register Successed!")
          history.push("/login")
        }, (error) => {
          const resMessage =
                    (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                    error.message  ||
                    error.toString();
          setMessage(resMessage)
        }
      )
   console.log(data)};

   
   var totalCartPrice = 0;

   const { items, cartTotal} = useCart(); 

   
  


  return (
    <body class="bg-light">
    
    <div class="container">
      <main>
          <div class="col-md-7 col-lg-12">
            <h4 class="mb-5">Billing address</h4>
            <form onSubmit={handleSubmit(onSubmit)} className="needs-validation" novalidate>

                <div className='' class="col-lg-20">
                <div class="card">
                  {data &&
                    <address>
                  {data.user.email}
                  </address>}
                </div>
                </div>

                <h4/>
                <h4/>

          <table className="table table-light- table-hover m-0">
            <tbody>
              <tr>
                <td className="product-col" style={{padding: "5px 70px 7px 10px"}}>
                  <b>Product</b>
                  </td>
                <td className="name-col" style={{padding: "5px 100px 7px 10px"}}>
                  <b>Name</b>
                </td>
                <td className="price-col" style={{ padding: "5px 50px 7px 10px" }}>
                  <b>Price</b>
                </td>
                <td className="quantity-col" style={{padding: "5px 50px 7px 10px"}}>
                  <b>Quantity</b>
                </td>
                <td className="price-col" style={{padding: "5px 50px 7px 10px"}}>
                  <b>Price</b>
                </td>
              </tr>
              {items.map((item,index) =>{
                return (
                  <tr key={index}>
                      <td>
                        <img src={item.img} style={{height: "10rem"}} alt=""></img>
                      </td>
                      <td className="content" >{item.name}</td>
                      <td className="content">{item.price}</td>
                      <td className="content">{item.quantity}</td>  
                      <td className="content">{item.quantity*item.price}</td>                    
                  
                  </tr>
                )
            })}
            </tbody>
          </table>
            <h4/>
            <h4/>

          <div class="card">
          <div class="row">
            <div class="col-xl-9 fs-5">Phương thức thanh toán</div>
            <div class="col-sm fs-5">Thanh toán khi nhận hàng</div> 
              <div class="card">
               <div class="row">
               <div class="col-xl-8"></div>
              <div class="col-sm fs-5">tong tien hang</div>
              <div class="col-sm fs-5">₫{cartTotal*100.000}</div>

              </div>
              <div class="row ">
              <div class="col-xl-8"></div>
              <div class="col fs-5" >phi van chyyen</div>
              <div class="col-sm fs-5">₫21.600</div>

                </div>
                <div className='row'>
                <div class="col-xl-8"></div>
                <div class="col-sm fs-5">tong thanh toan:</div>
                <div class="col-sm fs-5">₫165.600</div>

                </div>
              </div>
          </div>
          </div>


              <button class="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
            </form>
          </div>
      </main>
    
    </div>

           
    </body>
  )
}

export default Checkout;
