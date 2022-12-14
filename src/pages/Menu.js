import React from "react";
import { Switch, Route, useHistory, Link } from "react-router-dom";
import MaterialTypeProducts from "./MaterialTypeProducts";
import '../style/MenuStyle/css/style.css';
import '../style/MenuStyle/css/bootstrap.css'
import '../style/MenuStyle/css/responsive.css'
import {useState, useEffect} from 'react'
import axios from 'axios'


function Menu() {

    return (
        <div>
            <div className="item_section layout_padding2">
                <div className="container">
                    <div className="item_container">
                        <div className="box">
                            <div className="price">
                                <h6>
                                    Best PRICE
                                </h6>
                            </div>
                            <div className="img-box">
                                <img src="https://res.cloudinary.com/dgnwtkolg/image/upload/v1669393585/Jewels%20store_%20Product/Diamond%20Jewelry/gvxm00w000058-vong-tay-vang-trang-y-18k-dinh-da-cz-pnj-01_wmfebo.png" alt=""/>
                            </div>
                            <div className="name">
                                <h5>
                                    Bracelet
                                </h5>
                            </div>
                        </div>
                        <div className="box">
                            <div className="price">
                                <h6>
                                    Best PRICE
                                </h6>
                            </div>
                            <div className="img-box">
                                <img src="https://res.cloudinary.com/dgnwtkolg/image/upload/v1669393706/Jewels%20store_%20Product/Diamond%20Jewelry/gndrwa60920.5a0-nhan-kim-cuong-pnj-vang-trang-01_pxedal.png" alt=""/>
                            </div>
                            <div className="name">
                                <h5>
                                    Ring
                                </h5>
                            </div>
                        </div>
                        <div className="box">
                            <div className="price">
                                <h6>
                                    Best PRICE
                                </h6>
                            </div>
                            <div className="img-box">
                                <img src="https://res.cloudinary.com/dgnwtkolg/image/upload/v1668100048/Jewels%20store_%20Product/Diamond%20Jewelry/gb00ddw060279-vo-bong-tai-kim-cuong-vang-trang-18k-pnj-01_fwzuqm.png" alt=""/>
                            </div>
                            <div className="name">
                                <h5>
                                    Earings
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="price_section layout_padding">
                <div className="container">
                    <div className="heading_container">
                        <h2>
                            Our Jewellery
                        </h2>
                    </div>
                    <div className="price_container">
                        <div className="box">
                            <div className="name">
                                <h6>
                                    Gold Jewelry
                                </h6>
                            </div>
                            <div className="img-box"  id='Gold' style={{cursor: "pointer"}}>
                                <Link to={{
                                    pathname: "/product/GoldProduct",
                                    state: {material: 'Gold'}
                                }}>
                                    <img className="w-125 h-100" src="https://res.cloudinary.com/dgnwtkolg/image/upload/v1669394174/Jewels%20store_%20Product/Gold%20Jewelry/gvxmxmy062505-vong-tay-vang-18k-dinh-da-cz-pnj-1_tcuqtq.png" alt=""/>
                                </Link>
                            </div>
                            <div className="detail-box"></div>
                        </div>
                        <div className="box">
                            <div className="name">
                                <h6>
                                    Diamond Jewelry
                                </h6>
                            </div>
                            <div className="img-box" id={'Diamond'}  style={{cursor: "pointer"}}>
                                <Link to={{
                                    pathname: "/product/DiamondProduct",
                                    state: {material: 'Diamond'}
                                }}>
                                    <img className="w-125 h-100" src="https://res.cloudinary.com/dgnwtkolg/image/upload/v1669394174/Jewels%20store_%20Product/Diamond%20Jewelry/gnddddw007498-nhan-kim-cuong-vang-trang-14k-disneypnj-sleeping-beauty-01_x5n29j.png" alt=""/>
                                </Link>
                            </div>
                            <div className="detail-box"></div>
                        </div>
                        <div className="box">
                            <div className="name">
                                <h6>
                                    Silver Jewelry
                                </h6>
                            </div>
                            <div className="img-box" id={'Silver'}  style={{cursor: "pointer"}}>
                                <Link to={{
                                    pathname: '/product/SilverProduct',
                                    state: {material: "Silver"}
                                }}>
                                    <img  className="w-125 h-100" src="https://res.cloudinary.com/dgnwtkolg/image/upload/v1669394363/Jewels%20store_%20Product/Silver%20Jewelry/gmxmxmw000791-mat-day-chuyen-vang-trang-y-18k-dinh-da-cz-pnj-1_fcawus.png" alt=""/>
                                </Link>
                            </div>
                            <div className="detail-box"></div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <a href="" className="price_btn">
                            See More
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Menu;