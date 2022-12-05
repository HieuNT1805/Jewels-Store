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
<<<<<<< Updated upstream
import CartButtons from "./components/CartButtons";
=======
import Cart from "./pages/Cart";
import Checkout from "./pages/checkout";
import Manager from "./pages/manager";
import PostNewProduct from './pages/addnew';
import EditProduct from './pages/edit'
// import CartButtons from "./components/CartButtons";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
            <Route exact path= "/cart" component = {CartButtons} />
            <Route exact path= "/checkout" component = {Checkout} />
=======
            <Route exact path= "/cart" component = {Cart} />
            <Route exact path= "/checkout" component = {Checkout} />
            <Route exact path= "/manageProduct" component = {Manager} />
            <Route exact path= "/addnew" component = {PostNewProduct} />
            <Route exact path= "/edit/:productId" component = {EditProduct} />
>>>>>>> Stashed changes

        </Switch>
        <Footer/>
     </>
  );
}

export default App;
