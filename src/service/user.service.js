import Axios from "axios";
import authHeader from "./auth_header";

const api="https://jewelstore.onrender.com/api/"

const register=(firstname, lastname, email, username, password ) => {
    return Axios.post(api+"auth/signup", {
        firstname, lastname, email, username, password 
    })
}
const login=(username, password) => {
    return Axios.post(api+"auth/signin", {
        username, password
    }).then((response) => {
        if(response.data.accessToken)
        {
            localStorage.setItem("user", JSON.stringify(response.data)) //luu return cua api vao local storage trong  tab application tren inspect
        }
        return response.data
    })
}

const getUser=() => {
    return Axios.get(api+"user",{headers:authHeader()})
}

const logout=() => {
    localStorage.removeItem("user")
}
const updateInformation = (firstname, lastname, contact, address) => {return Axios.patch(api+"user",{
    firstname, lastname, contact, address
},{headers:authHeader()})}

const authService={register, login, logout,getUser,updateInformation}

export default authService;
