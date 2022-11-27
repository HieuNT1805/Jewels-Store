import Reactget, {useEffect,useState} from 'react'
import HomeBackground from "../img/background1.avif";
import "../style/checkout.css";
import {Link, useHistory} from 'react-router-dom';
import { useForm } from "react-hook-form";
import authService from '../service/user.service';
import 'bootstrap/dist/css/bootstrap.min.css';
import getOders from '../service/order.service'


function Checkout() {
  let history=useHistory();
  const [message, setMessage] = useState("");
  const { register, handleSubmit, formState: { errors } } = useForm({mode: 'onBlur'});
  
  ////
  const [data, setData] = useState({orders:[]}); 
  useEffect(() => {
    getOders()
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

  return (
    <body class="bg-light">
    
    <div class="container">
      <main>
      
    
        <div class="row g-5">
          <div class="col-md-5 col-lg-4 order-md-last">
            <h4 class="d-flex justify-content-between align-items-center mb-3">
              <span class="text-primary">Your cart</span>
              <span class="badge bg-primary rounded-pill">3</span>
            </h4>
            <div className="col-md-5">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th width="50%">Product</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                    {data.orders && data.orders.map((order,orders) =>  {
                    totalCartPrice += order.quantity* order.product.price;
                            return (
                                <tr key={order._id}>
                                 <td>{order.product.name}</td>
                                 <td>{order.product.price}</td>
                                  <td>{order.quantity}</td>
                                  <td>{order.quantity* order.product.price}</td>
                                </tr>
                            )
                        })}
                        <tr>
                          <td colSpan="2" className="text-end fw-bold">Grand Total</td>
                          <td colSpan="2" className="text-end fw-bold">{totalCartPrice}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
    
            <form class="card">
          <div class="input-group">
            <input type="text"  placeholder="Voucher"/>
            <button type="submit" class="--btn --btn-secondary">Add</button>
          </div>
        </form>
          </div>
          <div class="col-md-7 col-lg-8">
            <h4 class="mb-3">Billing address</h4>
            <form class="needs-validation" novalidate>
              <div class="row g-3">
                <div class="col-sm-6">
                  <label for="firstName" class="form-label">First name</label>
                  <input type="text" class="form-control" id="firstName" 
                   {...register("firstname", {
                    minLength: {
                        value: 2,
                        message: "firstname must be between 2 character and 10 character"
                    },
                    maxLength: {
                        value: 10,
                        message: "firstname must be between 2 character and 10 character "
                    },
                    required: "firstname is required"

                  } )}>

                  </input>
                  {errors.firstname && (<small className="notion-text"> {errors.firstname.message}</small>)}
            
                </div>
    
                <div class="col-sm-6">
                  <label for="lastName" class="form-label">Last name</label>
                  <input type="text" class="form-control" id="lastName" 
                   {...register("lastname", {
                    minLength: {
                        value: 2,
                        message: "Last name must be between 2 character and 10 character"
                    },
                    maxLength: {
                        value: 10,
                        message: "Last name must be between 2 character and 10 character "
                    },
                    required: "Last name is required"

                  } )}/>
                  {errors.lastname && (<small className="notion-text"> {errors.lastname.message}</small>)}

    
                </div>
    
                <div class="col-12">
                  <label for="username" class="form-label">Phone</label>
                    <input type="text" class="form-control" id="username" 
                     {...register("phone", {
                       pattern:{
                        value: /^\d{1}-?\d{5}-?\d{4}$/,
                        message: "Phone need to have 10 digits"
                       }
                       ,
                        required: "phone is required"
    
                      } )}/>
                      {errors.phone && (<small className="notion-text"> {errors.phone.message}</small>)}
    
                </div>
    
                <div class="col-12">
                  <label for="email" class="form-label">Email <span class="text-muted">(Optional)</span></label>
                  <input type="email" class="form-control" id="email" 
                   {...register("email", {
                    required: "Email is required",
                    pattern:{
                      value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: "This is not valid email"
                    }
                  })}>
                  
                  </input>
                  {errors.email && (<small className="notion-text"> {errors.email.message}</small>)}
              
                </div>
    
                <div class="col-12">
                  <label for="address" class="form-label">Address</label>
                  <input type="text" class="form-control" id="address" placeholder="1234 Main St" required/>
                  <div class="invalid-feedback ">
                    Please enter your shipping address.
                  </div>
                </div>
    
                <div class="col-12">
                  <label for="address2" class="form-label">Address 2 <span class="text-muted">(Optional)</span></label>
                  <input type="text" class="form-control" id="address2" placeholder="Apartment or suite"/>
                </div>
    
                <div class="col-md-5">
                  <label for="country" class="form-label">Country</label>
                  <select class="form-select" id="country" required>
                    <option value="">Choose...</option>
                    <option>United States</option>
                  </select>
                  <div class="invalid-feedback ">
                    Please select a valid country.
                  </div>
                </div>
    
                <div class="col-md-4">
                  <label for="state" class="form-label">State</label>
                  <select class="form-select" id="state" required>
                    <option value="">Choose...</option>
                    <option>California</option>
                  </select>
                  <div class="invalid-feedback ">
                    Please provide a valid state.
                  </div>
                </div>
    
                <div class="col-md-3">
                  <label for="zip" class="form-label">Zip</label>
                  <input type="text" class="form-control" id="zip" placeholder="" required/>
                  <div class="invalid-feedback ">
                    Zip code required.
                  </div>
                </div>
              </div>
    
              <hr class="my-4"/>
    
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="same-address"/>
                <label class="form-check-label" for="same-address">Shipping address is the same as my billing address</label>
              </div>
    
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="save-info"/>
                <label class="form-check-label" for="save-info">Save this information for next time</label>
              </div>
    
              <hr class="my-4"/>
    
              <h4 class="mb-3">Payment</h4>
    
              <div class="my-3">
                <div class="form-check">
                  <input id="credit" name="paymentMethod" type="radio" class="form-check-input" checked required/>
                  <label class="form-check-label" for="credit">Credit card</label>
                </div>
                <div class="form-check">
                  <input id="debit" name="paymentMethod" type="radio" class="form-check-input" checked required/>
                  <label class="form-check-label" for="debit">Debit card</label>
                </div>
                <div class="form-check">
                  <input id="paypal" name="paymentMethod" type="radio" class="form-check-input"checked required/>
                  <label class="form-check-label" for="paypal">PayPal</label>
                </div>
              </div>
    
              <div class="row gy-3">
                <div class="col-md-6">
                  <label for="cc-name" class="form-label">Name on card</label>
                  <input type="text" class="form-control" id="cc-name" placeholder="" required/>
                  <small class="text-muted">Full name as displayed on card</small>
                  <div class="invalid-feedback ">
                    Name on card is required
                  </div>
                </div>
    
                <div class="col-md-6">
                  <label for="cc-number" class="form-label">Credit card number</label>
                  <input type="text" class="form-control" id="cc-number" placeholder="" required/>
                  <div class="invalid-feedback ">
                    Credit card number is required
                  </div>
                </div>
    
                <div class="col-md-3">
                  <label for="cc-expiration" class="form-label">Expiration</label>
                  <input type="text" class="form-control" id="cc-expiration" placeholder="" required/>
                  <div class="invalid-feedback ">
                    Expiration date required
                  </div>
                </div>
    
                <div class="col-md-3">
                  <label for="cc-cvv" class="form-label">CVV</label>
                  <input type="text" class="form-control" id="cc-cvv" placeholder="" required/>
                  <div class="invalid-feedback ">
                    Security code required
                  </div>
                </div>
              </div>
    
              <hr class="my-4"/>
    
              <button class="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
            </form>
          </div>
        </div>
      </main>
    
    </div>
    </body>
  )
}

export default Checkout;
