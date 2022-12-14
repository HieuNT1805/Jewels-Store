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
import Cart from "./pages/Cart";
import Manager from "./pages/manager";
import PostNewProduct from './pages/addnew';
import EditProduct from './pages/edit';
import Checkout from './pages/checkout';


// import CartButtons from "./components/CartButtons";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {Route, Switch} from "react-router-dom";
import MaterialTypeProducts from "./pages/MaterialTypeProducts";
import ProductDetail from './pages/ProductDetail';
import {CartProvider} from 'react-use-cart'
import AccountMenu from './components/test'
function App() {
  return (
     <>
      <CartProvider>
      <Navbar/>
        <Switch>
            <Route exact path= "/"  component={Home} />           
            <Route exact path= "/menu" component={Menu}/>
            <Route exact path= "/contact"  component={Contact} />
            <Route exact path= "/about"  component={About} />
            <Route exact path= "/register"  component={Register} />
            <Route exact path= "/login" component={Login}/>
            <Route exact path= "/cart" component = {Cart} />
            <Route path = "/product/:page" component={MaterialTypeProducts}/>
            <Route path = "/productDetail/:ProductID" component={ProductDetail}/>
            <Route exact path= "/checkout" component = {Checkout} />
            <Route exact path= "/manageProduct" component = {Manager} />
            <Route exact path= "/addnew" component = {PostNewProduct} />
            <Route exact path= "/edit/:productId" component = {EditProduct} />
            <Route exact path= "/test" component = {AccountMenu} />

        </Switch>
        <Footer/>
        </CartProvider>
     </>
  );
}

export default App;
