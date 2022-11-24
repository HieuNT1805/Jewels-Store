import Axios from "axios";
import authHeader from "./auth_header";

const api="https://ex-api-nodejs.herokuapp.com/api/auth/"

const register=(firstname, lastname, email, username, password ) => {
    return Axios.post(api+"register", {
        firstname, lastname, email, username, password 
    })
}
const login=(username, password) => {
    return Axios.post(api+"login", {
        username, password
    }).then((response) => {
        if(response.data.accessToken)
        {
            localStorage.setItem("user", JSON.stringify(response.data))
        }
        return response.data
    })
}

const logout=() => {
    localStorage.removeItem("user")
}
const authService={register, login, logout}

export default authService;
