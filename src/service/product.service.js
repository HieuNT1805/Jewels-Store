import axios from 'axios'

const url = 'https://jewel-store-pj.herokuapp.com/' //api product

//function get product from api, return nhieu function
const getProductList = () => {return axios.get(url + 'api/products')}


export default getProductList