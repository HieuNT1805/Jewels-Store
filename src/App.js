import React from "react";
import './App.css';
import Home from  "./pages/Homepage";
import Footer  from "./components/footer";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Navbar from "./components/navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Menu from "./pages/Menu";
import CartButtons from "./components/CartButtons";
import {Route, Switch} from "react-router-dom";
import axios from "axios";
import Checkout from "./pages/checkout";


function App() {
  return (
     <>
      <Navbar/>
        <Switch>
            <Route exact path= "/"  component={Home} />
            <Route exact path= "/menu" component={Menu}/>
            <Route exact path= "/contact"  component={Contact} />
            <Route exact path= "/about"  component={About} />
            <Route exact path= "/register"  component={Register} />
            <Route exact path= "/login" component={Login}/>
            <Route exact path= "/cart" component = {CartButtons} />
            <Route exact path= "/checkout" component = {Checkout} />

        </Switch>
        <Footer/>
     </>
  );
}

export default App;
