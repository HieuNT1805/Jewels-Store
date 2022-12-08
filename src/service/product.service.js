
import axios from 'axios'
import authHeader from './auth_header';

const url = 'https://jewelstore.onrender.com/' //api product


//function get product from api, return nhieu function
const getAllProducts = () => {return axios.get(url + 'api/products')}

const postNewProduct = (name, material, price, img ) => {return axios.post(url + 'api/manage/products',{
    name, material, price, img 
},{headers:authHeader()})}

const updateProduct = (productId,ProName, Material, Price, img ) => {return axios.patch(url + `api/manage/products/${productId}`,{
    ProName, Material, Price, img 
},{headers:authHeader()})}


const getProduct = (productId) => {return axios.get(url + `api/products/${productId}`)}


const deleteProduct = (productId) => {return axios.delete(url + `api/manage/products/${productId}`,{headers:authHeader()})}


const productservice={getAllProducts, postNewProduct, updateProduct, getProduct,deleteProduct}

export default productservice;

