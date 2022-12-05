import React from "react";
import "../style/about.css";
import {Link, useParams, useLocation} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from "axios";
// import '../style/MenuStyle/css/style.css';
// import '../style/MenuStyle/css/bootstrap.css'
// import '../style/MenuStyle/css/responsive.css'
import '../style/ProductDetailStyle/ProductDetail.css'
import { useCart } from "react-use-cart";

function ProductDetail() {
    const { addItem } = useCart();
    const ProductID = useLocation().state.ProductID;
    const [product, setProduct] = useState([])
    

    useEffect(() => {
        axios.get(`https://jewelstore.onrender.com/api/products/${ProductID}`)
        .then(res=>{
            setProduct(res.data.product)
        })
        .catch(error => {
            console.log(error)
        })
    },[])
    


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
                    <button class="add" onClick={() => addItem(product)}>Add to Cart</button>
                    <button class="like"><span>♥</span></button>
                    </div>
                </div>
            </div>
        </div>
       

    )
}
export default ProductDetail;