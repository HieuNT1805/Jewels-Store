import React from "react";
import "../style/about.css";
import {Link, useParams, useLocation} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from "axios";
// import '../style/MenuStyle/css/style.css';
// import '../style/MenuStyle/css/bootstrap.css'
// import '../style/MenuStyle/css/responsive.css'
import '../style/ProductDetailStyle/ProductDetail.css'

function ProductDetail() {
    const {page} = useParams()
    const ProductID = useLocation().state.ProductID;

    const [product, setProduct] = useState([])
    const GetData = async () => {
        console.log(ProductID)
        const {productData} = await axios.get(`http://localhost:3001/v1/products/id/${ProductID}`)
            .then(result => {
                setProduct(result.data.product)
                // console.log(products)
            })
            .catch(error => {
                console.log(error)
            }) || {};
    }


    useEffect(() => {
        GetData()
        console.log(product)
    }, [])


    return (
        <div>
            <div class="container-product-detail">
                <div class="images">
                    <img className='img-product-detail' src={product.Img_link} />
                </div>
                <div class="slideshow-buttons">
                    <div class="one"></div>
                    <div class="two"></div>
                    <div class="three"></div>
                    <div class="four"></div>
                </div>
                <div class="product-detail">
                    <p fontsize>{product.Material}</p>
                    <h1>{product.ProName}</h1>
                    <h2>${product.Price}</h2>
                    <p class="desc">{product.desc}</p>
                    <div class="buttons">
                    <button class="add">Add to Cart</button>
                    <button class="like"><span>♥</span></button>
                    </div>
                </div>
            </div>
        </div>
       

    )
}
export default ProductDetail;