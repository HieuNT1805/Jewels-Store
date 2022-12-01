import React, {useState} from 'react'
import HomeBackground from "../img/background1.avif";
import "../style/register.css";
import {Link, useHistory} from 'react-router-dom';
import { useForm } from "react-hook-form";
import authService from '../service/user.service';


function Register() {
  let history=useHistory();
  const [message, setMessage] = useState("");
  const { register, handleSubmit, formState: { errors } } = useForm({mode: 'onBlur'});
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

  return (
    <div className="register" style={{backgroundImage: `url(${HomeBackground})`}}>
          
          <form onSubmit={handleSubmit(onSubmit)} className="form-register" >
              <h1> <b>REGISTER</b> </h1>
                    {/* firstname */}
                    <label htmlFor="name">First Name</label>
                    <input 
                      name="name"  
                      type="text"
                      {...register("firstname", {
                        minLength: {
                            value: 2,
                            message: "First name must be between 2 character and 10 character"
                        },
                        maxLength: {
                            value: 10,
                            message: "First name must be between 2 character and 10 character "
                        },
                        required: "First name is required"

                      } )}>
                    </input>
                    {errors.firstname && (<small className="notion-text"> {errors.firstname.message}</small>)}
                    {/* lastname */}
                    <label htmlFor="name">Last Name</label>
                    <input 
                      name="name"  
                      type="text"
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

                      } )}>

                      </input>
                      {errors.lastname && (<small className="notion-text"> {errors.lastname.message}</small>)}
                    {/* email */}
                    <label htmlFor="email">Email</label>
                    <input 
                      name="email"  
                      type="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern:{
                          value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                          message: "This is not valid email"
                        }
                      })}>
                      
                      </input>
                      {errors.email && (<small className="notion-text"> {errors.email.message}</small>)}
                    {/* username */}
                    <label htmlFor="name">User Name</label>
                    <input 
                      name="name"  
                      type="text"
                      {...register("username", {
                        minLength: {
                            value: 5,
                            message: "Username must be between 5 character and 10 character"
                        },
                        maxLength: {
                            value: 10,
                            message: "Username must be between 5 character and 10 character "
                        },
                        required: "Usename is required"
                      } )}>
                      </input>
                      {errors.username && (<small className="notion-text"> {errors.username.message}</small>)}
                    {/* password */}
                    <label htmlFor="pwd">Password</label>
                    <input 
                      name="pwd"  
                      type="password"
                      {...register("password", {
                        minLength: {
                            value: 8,
                            message: "Password must be between 8 character and 20 character"
                        },
                        maxLength: {
                            value: 20,
                            message: "Password must be between 8 character and 20 character "
                        },
                        required: "Password is required"
                      } )}>
                      </input>
                      {errors.password && (<small className="notion-text"> {errors.password.message}</small>)}
                      {message && (
                      <div >
                          <div role="alert"
                          >
                          {message}
                          </div>
                      </div>
                      )}
                    <button type="submit" className="btn-login">Sign in</button>
                    <p className="forgot-password"> <Link to="/login" > or Already registered  </Link>  </p>
          </form>
          </div>
  )
}

export default Register
