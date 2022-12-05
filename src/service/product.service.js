<<<<<<< Updated upstream
import axios from 'axios'

const url = 'https://jewel-store-pj.herokuapp.com/' //api product

//function get product from api, return nhieu function
const getProductList = () => {return axios.get(url + 'api/products')}


export default getProductList
=======
import axios from 'axios'
import authHeader from './auth_header';

const url = 'http://localhost:3000/' //api product


//function get product from api, return nhieu function
const getAllProducts = () => {return axios.get(url + 'api/products')}

const postNewProduct = (name, material, price, img ) => {return axios.post(url + 'api/manage/products',{
    name, material, price, img 
},{headers:authHeader()})}

const updateProduct = (productId,name, material, price, img ) => {return axios.patch(url + `api/manage/products/${productId}`,{
    name, material, price, img 
},{headers:authHeader()})}


const getProduct = (productId) => {return axios.get(url + `api/products/${productId}`)}


const deleteProduct = (productId) => {return axios.delete(url + `api/manage/products/${productId}`,{headers:authHeader()})}


const productservice={getAllProducts, postNewProduct, updateProduct, getProduct,deleteProduct}

export default productservice;
>>>>>>> Stashed changes
