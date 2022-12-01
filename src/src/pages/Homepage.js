import React from "react";
import {Link} from 'react-router-dom';
import HomeBackground from "../img/background1.avif";
import "../style/Homepage.css"

function Home() {
    return (
      <div className="home" style= {{backgroundImage: `url(${HomeBackground})`}}>
            <div className="container-header" >
                <h1> <b>LUX&CO.</b></h1>
                <p>Fine jewelry, revolutionary service</p>
                <Link to ="/menu">
                  <button>START BUY</button>
                </Link> 
            </div>
      </div>
    )
  }
  export default Home;