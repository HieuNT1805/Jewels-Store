import React from 'react';
import { useState} from "react";
import Logo from '../img/jewelleryLogo.png';
import {Link} from 'react-router-dom';
import TocIcon from '@mui/icons-material/Toc';
import '../style/Navbar.css';
import CartButtons from './CartButtons';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@mui/material';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
function Navbar({totalItems}, props) {
    const [openLinks,setOpenLinks] = useState(false) ;
    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    }
    
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
            <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCartIcon/>
            </Badge>
          </IconButton>
        </div>
    </div>
  )
}

export default Navbar
