import React from 'react';
import { useState, useEffect} from "react";
import Logo from '../img/jewelleryLogo.png';
import {Link} from 'react-router-dom';
import TocIcon from '@mui/icons-material/Toc';
import '../style/Navbar.css';
import CartButtons from './CartButtons';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@mui/material';
import axios from 'axios'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import authHeader from '../service/auth_header';

function Navbar({totalItems}, props) {
    const [openLinks,setOpenLinks] = useState(false) ;
    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    }
    //lay so order
    const [countOrder, setCountOrder] = useState(); //set gia tri mac dinh cua so don hang
    //du lieu thay doi thi no render lai du lieu cua so don hang
    useEffect(()=>{
      axios.get("https://jewel-store-pj.herokuapp.com/api/orders", {headers:authHeader()})
      .then((res) => {
        setCountOrder(res.data.count)
        console.log(res.data)
      })
    });
    
  return (
    <div className="navbar" id={openLinks ? "open" : "close"}>
        <div className="leftside">
                <img src={Logo} alt="LOGOJEWELLERY"></img> 
                <div className="hiddenLinks">
                        <Link to="/">Home</Link>
                        <Link to="/menu">Menu</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/register">Log in</Link>
                        <Link to="/login" >Log in</Link>
                </div>
        </div>
        <div className="rightside">
                        <Link to="/">Home</Link>
                        <Link to="/menu">Menu</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/register">Log in</Link>
                        <button onClick={toggleNavbar}>
                            <TocIcon/>
                        </button>
        </div>
        <div className="btn-cart">
          <IconButton component={Link} to ="/cart" aria-label="Show cart items" color="inherit">
            <Badge badgeContent={countOrder} color="secondary">
                <ShoppingCartIcon/>
            </Badge>
          </IconButton>
        </div>
    </div>
  )
}

export default Navbar
