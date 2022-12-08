import React from 'react'
import { useCart } from 'react-use-cart'
import { Link, useHistory,useNavigate  } from "react-router-dom";

import "../style/Cart.css"
function Cart() {

  let history = useHistory();

	const {	
    isEmpty,
		totalUniqueItems,
		items,
		totalItems,
		cartTotal,
		updateItemQuantity,
		removeItem,
		emptyCart 
    } = useCart();

    const tocheckout =() => 
    { history.push("/checkout")}
    
    if (isEmpty) return <h5 className="text-center" >Cart is Empty </h5>
  return (
    <>
    <section className="py-4 container">
      <div className="row justify-content-center">
        {/* {console.warn(items)} */}
        <div className="col-12">
          <h3 className="title-total-items"> Total Items: {totalItems} </h3>
          <br></br>
          <table className="table table-light- table-hover m-0">
            <tbody>
              <tr>
                <td className="product-col" style={{padding: "5px 70px 7px 10px"}}>
                  <b>Product</b>
                  </td>
                <td className="name-col" style={{padding: "5px 100px 7px 10px"}}>
                  <b>Name</b>
                </td>
                <td className="price-col" style={{ padding: "5px 50px 7px 10px" }}>
                  <b>Price</b>
                </td>
                <td className="quantity-col" style={{padding: "5px 50px 7px 10px"}}>
                  <b>Quantity</b>
                </td>
              </tr>
              {items.map((item,index) =>{
                return (
                  <tr key={index}>
                      <td>
                        <img src={item.img} style={{height: "10rem"}} alt=""></img>
                      </td>
                      <td className="content" >{item.name}</td>
                      <td className="content">{item.price}</td>
                      <td className="content">{item.quantity}</td>
                      <td className="">
                        <button style={{border:"3px solid pink" }} className="btn-subtract btn btn-light ms-2  " 
                                onClick={() => updateItemQuantity(item.id, item.quantity-1)}>
                          - 
                        </button>
                        <button style={{border:"3px solid black" }} className="btn-add btn btn-light ms-2 "
                                onClick={() => updateItemQuantity(item.id, item.quantity+1)}>
                          +
                        </button>
                        <button className="btn-remove btn btn-dark ms-2" onClick={() => removeItem(item.id)}>
                          Remove Item
                        </button>
                      </td>
                  </tr>
                )
            })}
            </tbody>
          </table>
        </div>
        <hr/>
        <br/>
        <br/>
        <div className="col-auto ms-auto">
          <h3>Total Price: $ {cartTotal}</h3>
        </div>
        <div className="col-auto ms-auto">
          <button className="clear-btn btn btn-warning m-2" onClick={() => emptyCart()}>Clear Cart</button>
          <button className="checkout-btn btn btn-primary m-2" onClick={() => tocheckout()}>Check Out</button>
        </div>
      </div>
    </section>
	</>
  )
}

export default Cart
