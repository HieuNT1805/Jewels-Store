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
    const GetData = async () => {
        console.log(material)
        const {productData} = await axios.get(`http://localhost:3001/v1/products/${material}`)
            .then(result => {
                setProducts(result.data.product)
                // console.log(products)
            })
            .catch(error => {
                console.log(error)
            }) || {};
    }


    useEffect(() => {
        GetData()
        console.log(products)
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
                       {products.map(product => (
                           <div key={product._id} className="box">
                               <div className="name">
                                   <h6>
                                       {product.ProName}
                                   </h6>
                               </div>
                               <div className="img-box"  id='Gold' style={{cursor: "pointer"}}>
                                   <img src={product.Img_link.toString()} alt=""/>
                               </div>
                               <div className="detail-box">
                                   <h5>
                                       $<span>{product.Price}</span>
                                   </h5>
                                   {/* <a href="">
                                       Buy Now
                                   </a> */}
                                    <Link to={{
                                        pathname: `/productDetail/${product._id}`,
                                        state: {ProductID: `${product._id}`}
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