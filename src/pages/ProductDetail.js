import React from "react";
import "../style/about.css";
import {Link, useParams, useLocation,useHistory} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from "axios";
// import '../style/MenuStyle/css/style.css';
// import '../style/MenuStyle/css/bootstrap.css'
// import '../style/MenuStyle/css/responsive.css'
import '../style/ProductDetailStyle/ProductDetail.css'
import { useCart } from "react-use-cart";
import AuthService from "../service/user.service";


function ProductDetail() {
    const ProductID = useLocation().state.ProductID;

    const [currentUser, setCurrentUser] = useState(undefined);
    const [product, setProduct] = useState([])
    
    
    useEffect(() => {
        axios.get(`https://jewelstore.onrender.com/api/products/${ProductID}`)
        .then(res=>{
            setProduct(res.data.product)
        })
        .catch(error => {
            console.log(error)
        })
        
        const user = AuthService.getCurrentUser()
      
        if (user){
          setCurrentUser(user)
        }
        
    },[])
    
    const history=useHistory()
    const {addItem} = useCart();
    const add=(item)=>{
        if(currentUser){
            addItem(item)
        }else{  
           
            history.push("/login")
            window.location.reload();
        }
        
    }

    return (
        <div>
            <div class="container-product-detail">
                <div class="images">
                    <img className='img-product-detail' src={product.img} />
                </div>
                <div class="slideshow-buttons">
                    <div class="one"></div>
                    <div class="two"></div>
                    <div class="three"></div>
                    <div class="four"></div>
                </div>
                <div class="product-detail">
                    <p fontsize>{product.Material}</p>
                    <h1>{product.name}</h1>
                    <h2>${product.price}</h2>
                    <p class="desc">{product.desc}</p>
                    <div class="buttons">
                    <button class="add" onClick={() => add(product)}>Add to Cart</button>
                    {/* <button class="like"><span>♥</span></button> */}
                    </div>
                </div>
            </div>
        </div>
       

    )
}
export default ProductDetail;