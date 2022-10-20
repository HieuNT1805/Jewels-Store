import React from "react";
import {Link} from 'react-router-dom';
import HomeBackground from "../img/background1.avif";
import '../style/MenuStyle/css/style.css';
import '../style/MenuStyle/css/bootstrap.css'
import '../style/MenuStyle/css/responsive.css'


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
                                <img src="https://res.cloudinary.com/dgnwtkolg/image/upload/v1666280779/Jewels%20store_%20Product/Italian_silver_necklace_Lux_Co_s3a2w4.png" alt=""/>
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
                                <img src="https://res.cloudinary.com/dgnwtkolg/image/upload/v1666280704/Jewels%20store_%20Product/Couple_White_Gold_Ring_Lux_Co_ydpj8p.jpg" alt=""/>
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
                                <img src="https://res.cloudinary.com/dgnwtkolg/image/upload/v1666280780/Jewels%20store_%20Product/Dainty_Thin_Bar_Earring_By_Lux_Co_zfoko8.png" alt=""/>
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
                            Our Jewellery Hot Price
                        </h2>
                    </div>
                    <div className="price_container">
                        <div className="box">
                            <div className="name">
                                <h6>
                                    Diamond
                                </h6>
                            </div>
                            <div className="img-box">
                                <img src="https://res.cloudinary.com/dgnwtkolg/image/upload/v1666280780/Jewels%20store_%20Product/Gold_Diamond_Ring_14K_By_Lux_Co_hhxwdy.png" alt=""/>
                            </div>
                            <div className="detail-box">
                                <h5>
                                    $<span>1099.00</span>
                                </h5>
                                <a href="">
                                    Buy Now
                                </a>
                            </div>
                        </div>
                        <div className="box">
                            <div className="name">
                                <h6>
                                    Gold
                                </h6>
                            </div>
                            <div className="img-box">
                                <img src="https://res.cloudinary.com/dgnwtkolg/image/upload/v1666280779/Jewels%20store_%20Product/Gold_Necklace_18K_Lux_Co_pfcwen.png" alt=""/>
                            </div>
                            <div className="detail-box">
                                <h5>
                                    $<span>599.00</span>
                                </h5>
                                <a href="">
                                    Buy Now
                                </a>
                            </div>
                        </div>
                        <div className="box">
                            <div className="name">
                                <h6>
                                    Silver
                                </h6>
                            </div>
                            <div className="img-box">
                                <img src="https://res.cloudinary.com/dgnwtkolg/image/upload/v1666280703/Jewels%20store_%20Product/Couple_Rings_Friends_By_Lux_Co_pvm4vl.png" alt=""/>
                            </div>
                            <div className="detail-box">
                                <h5>
                                    $<span>99.00</span>
                                </h5>
                                <a href="">
                                    Buy Now
                                </a>
                            </div>
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