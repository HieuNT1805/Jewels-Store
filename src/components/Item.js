import React from 'react'
import {useCart} from 'react-use-cart'
import "../style/Item.css"

function Item(props) {
  const {addItem}= useCart();
return (
  <div className="container col-11  col-md-6 col-lg-3 mx-0 mb-4">
      <div className=" card card p-0 overflow-hidden h-60 w-100 shadow">
          <img src={props.img} className="card-img-top img-fluid" alt=""></img>
          <div className="card-body text-center">
              <h5 className="card-title">{props.title}</h5>
              <h6 className="card-text"> $ {props.price}</h6>
              <button className="btn-add-to-cart btn-success" onClick={()=>{addItem(props.item)}} > Add to Cart</button>
          </div>
      </div>
  </div>
)
}

export default Item
