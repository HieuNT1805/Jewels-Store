import React from "react";
import "../style/about.css";
import {Link, useParams, useLocation} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from "axios";
import '../style/MenuStyle/css/style.css';
import '../style/MenuStyle/css/bootstrap.css'
import '../style/MenuStyle/css/responsive.css'

function MaterialTypeProducts() {
    const {page} = useParams()
    const material = useLocation().state.material;

    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get("https://jewelstore.onrender.com/api/products")
        .then((res)=>{
            setProducts(res.data.products)
        })
    }, [])


    return (
       <>
           <section className="price_section layout_padding">
               <div className="container">
                   <div className="heading_container">
                       <h2>
                           Our {material} Jewellery
                       </h2>
                   </div>
                   <div className="price_container">
                       {products.filter(products => products.material.includes(material)).map(product => (
                           <div key={product._id} className="box">
                               <div className="name">
                                   <h6>
                                       {product.name}
                                   </h6>
                               </div>
                               <div className="img-box"  id='Gold' style={{cursor: "pointer"}}>
                                   <img src={product.img} alt=""/>
                               </div>
                               <div className="detail-box">
                                   <h5>
                                       $<span>{product.price}</span>
                                   </h5>
                                   {/* <a href="">
                                       Buy Now
                                   </a> */}
                                    <Link to={{
                                        pathname: `/productDetail/${product.id}`,
                                        state: {ProductID: `${product.id}`}
                                    }}>
                                        View Detail
                                    </Link>
                               </div>
                           </div>
                       ))}
                   </div>
                   <div className="d-flex justify-content-center">
                       <a href="" className="price_btn">
                           See More
                       </a>
                   </div>
               </div>
           </section>

       </>
    )
}
export default MaterialTypeProducts;