import React from 'react';
import { useCart } from 'react-use-cart'
import { useState, useEffect} from "react";
import Logo from '../img/jewelleryLogo.png';
import {Link} from 'react-router-dom';
import TocIcon from '@mui/icons-material/Toc';
import '../style/Navbar.css';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@mui/material';
import axios from 'axios'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import authHeader from '../service/auth_header';

function Navbar() {
    const [openLinks,setOpenLinks] = useState(false) ;
    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    }
    const { totalItems } = useCart(); 
    //lay so order
    const [countOrder, setCountOrder] = useState(); //set gia tri mac dinh cua so don hang
    //du lieu thay doi thi no render lai du lieu cua so don hang
    useEffect(()=>{
      setCountOrder(totalItems)
    });
    
  return (
    <div className="navbar" id={openLinks ? "open" : "close"}>
        <div className="leftside">
                <img src={Logo} alt="LOGOJEWELLERY"></img> 
                <div className="hiddenLinks">
                        <Link to="/">Home</Link>
                        <Link to="/menu">Product</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/register" >Log in</Link>
                </div>
        </div>
        <div className="rightside d-flex">
                       <Link to="/manageProduct">Admin</Link>
                        <Link to="/">Home</Link>
                        <Link to="/menu">Product</Link>
                        {/* <Link to="/product">Menu</Link> */}
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/login">Log in</Link>
                        <button onClick={toggleNavbar}>
                            <TocIcon/>
                        </button>
                        {/* <Link to="/cart">Cart</Link> */}
                        <div className="btn-cart">
          <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
            <Badge badgeContent={countOrder} color="secondary" >
                <ShoppingCartIcon/>
            </Badge>
          </IconButton>
        </div> 
        </div>
        
    </div>
  )
}

export default Navbar