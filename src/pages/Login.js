import React, {useState} from 'react';
import HomeBackground from "../img/background1.avif";
import "../style/login.css"
// import { Redirect } from 'react-router-dom';
import authService from '../service/user.service';
import {Link, useHistory} from 'react-router-dom';
import { useForm } from "react-hook-form";

function Login() {
  let history=useHistory();
  const [message, setMessage] = useState("");
  const { register, handleSubmit, formState: { errors } } = useForm({mode: 'onBlur'});
  const onSubmit = data => {
    const username=data.username;
    const password=data.password;
    authService.login(username, password).then(
      () => {

        // window.open("/menu")
        window.alert("Login Successed!");
        history.push("/menu")
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
    //body login
    <div className="login" style={{backgroundImage: `url(${HomeBackground})`}}>
            
            <form onSubmit={handleSubmit(onSubmit)} className="form-login-mau-trang"> 
                    <h1 ><b className="tieu-de-login">Log in</b>  </h1>
                    {/* Username */}
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
                    } )}
                    ></input>
                    {errors.password && (<small className="notion-text"> {errors.password.message}</small>)}
                    {/* error log in failed */}
                    {message && (
                      <div className="error-login">
                          <div role="alert"
                          >
                          {message}
                          </div>
                      </div>
                      )}
                    {/* button submit */}
                    <button type="submit-btn" className="btn-login">Log in</button>
                    <p className="forgot-password"> or <Link to="/register"> Not have an account ? Sign up here  </Link> </p>
            </form>
    </div>
  )
}

export default Login
