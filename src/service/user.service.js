import Axios from "axios";
import authHeader from "./auth_header";

const api="https://jewelstore.onrender.com/api/auth/"

const register=(firstname, lastname, email, username, password ) => {
    return Axios.post(api+"signup", {
        firstname, lastname, email, username, password 
    })
}
const login=(username, password) => {
    return Axios.post(api+"signin", {
        username, password
    }).then((response) => {
        if(response.data.accessToken)
        {
            localStorage.setItem("user", JSON.stringify(response.data)) //luu return cua api vao local storage trong  tab application tren inspect
        }
        return response.data
    })
}

const logout=() => {
    localStorage.removeItem("user")
}
const authService={register, login, logout}

export default authService;
