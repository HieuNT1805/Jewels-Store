import axios from 'axios'
import authHeader from '../service/auth_header';

<<<<<<< Updated upstream
const url = 'https://jewel-store-pj.herokuapp.com/' //api product
=======
const url = 'https://jewelstores.onrender.com/api/' //api product
>>>>>>> Stashed changes

//function get product from api, return nhieu function
const getOders = () => {return axios.get(url + 'api/orders',{headers:authHeader()})}


export default getOders