import React from "react";
import {Link} from 'react-router-dom';
import HomeBackground from "../img/background1.avif";
import "../style/Homepage.css"

function Home() {
    return (
      <div className="home" style= {{backgroundImage: `url(${HomeBackground})`}}>
            <div className="container-header" >
              <div >
                <h1 > <b className="fs-1">LUX&CO.</b></h1>
              </div>
                <p>Fine jewelry, revolutionary service</p>
                <Link to ="/menu">
                  <button>START BUY</button>
                </Link> 
            </div>
      </div>
    )
  }
  export default Home;