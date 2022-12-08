import React from 'react';
import { useCart } from 'react-use-cart'
import { useState, useEffect} from "react";
import Logo from '../img/jewelleryLogo.png';
import {Link} from 'react-router-dom';
import TocIcon from '@mui/icons-material/Toc';
import '../style/Navbar.css';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography,Button } from '@mui/material';
import AuthService from "../service/user.service";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import eventBus from '../common/EventBus';
import {useHistory} from 'react-router-dom'
import Logout from '@mui/icons-material/Logout';
import AccountMenu from './test'


function Navbar() {
    const [openLinks,setOpenLinks] = useState(false) ;
    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    }
    const { totalItems } = useCart(); 
    //lay so order
    const [currentUser, setCurrentUser] = useState(undefined);
    const [isAdmin, setIsAdmin]= useState(false)
    useEffect(()=>{
      const user = AuthService.getCurrentUser()
      // const role = AuthService.getCurrentUser().roles
      
      if (user){
        console.log("b",AuthService.getCurrentUser())
        setCurrentUser(user)
        if(user.roles[0]==='ROLE_ADMIN')
        {
          setIsAdmin(true)
        }
      }
      
      eventBus.on("logout", () => {
        logOut();
      });
      return () => {
        eventBus.remove("logout");
      };
      
    },[]);
    
    const history=useHistory()
    const logOut = () => {
      AuthService.logout();
      setCurrentUser(undefined);
      history.push("/login")
        window.location.reload();
    };
  return (
    <div className="navbar" id={openLinks ? "open" : "close"}>
        <div className="leftside">
                <img src={Logo} alt="LOGOJEWELLERY"></img> 
              
                <div className="hiddenLinks">
                        <Link to="/">Home</Link>
                        <Link to="/menu">Product</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/register">Sign up</Link>
                        <Link to="/login" >Sign in</Link>
                </div>
        </div>
        <div className="rightside ml-5">
                      <div className='ml-5'>
                        {isAdmin ?
                        (<Link to="/manageProduct">Admin</Link>)
                        :(
                          <Link to="/"></Link>
                          )}
                         
                        <Link to="/">Home</Link>
                        <Link to="/menu">Product</Link>
                        {/* <Link to="/product">Menu</Link> */}
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                        </div>
                        {currentUser ? 
                        (
                          <div className='row'>
                            
                          </div>
                        ):(
                          <div className='mr-0'>
                            <Link to="/register">Sign up</Link>
                            <Link to="/login" >Sign in</Link>
                          </div>
                        )}
                        <button onClick={toggleNavbar}>
                            <TocIcon/>
                        </button>
                        {/* <Link to="/cart">Cart</Link> */}
                        <div className="btn-cart">
          {currentUser ? (
            <IconButton className='ml-5' component={Link} to="/cart" aria-label="Show cart items" color="inherit">
            <Badge badgeContent={totalItems} color="secondary" >
                <ShoppingCartIcon/>
            </Badge>
          </IconButton>
          ):(
            <IconButton component={Link} to="/login" aria-label="Show cart items" color="inherit">
                <ShoppingCartIcon/>
          </IconButton>
          )}

        </div> 
        
        </div>
        {currentUser ? 
          (<AccountMenu />):( <div></div>)}
      </div>
   

  )
}

export default Navbar