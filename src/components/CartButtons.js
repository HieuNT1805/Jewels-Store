import React from 'react'
import "../style/CartButton.css";
import { Container, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';

const products = [
    {id: 1, name: 'Pearl Rings', price : '15$', category: 'Rings',},
    {id:2, name: 'Flower Earing',price: '20$',category: 'Earing',}
  ]
function CartButtons({cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart}) {

    const handleEmptyCart=() => onEmptyCart;
    const renderEmptyCart = () => (
    <Typography variant="subtitle1">You have no items in your shopping cart,
      <Link className="link" to="/menu">start adding some</Link>!
    </Typography>
  );
  if (!cart.line_items) return 'Loanding';
  const renderCart = () => (
    <>
      <Grid container spacing ={3}>
        {cart.line_items.map((lineItem)=> (
          <Grid item xs={12} sm={4} key={lineItem.id}>
            <CartItem item={lineItem} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} />
            </Grid>
        ))}
      </Grid>
      <div className="cardDetails">
        <Typography varient="h6">SubTotal: {cart.subtotal.formatted_symbol}</Typography>
        <div>
          <Button className="emptyButton" size="large" type="button" varient="contained" color="secondary" onClick={handleEmptyCart}>Empty Cart</Button>
          <Button className="checkoutButton" component={Link} to="/checkout" size="large" type="button" variant="contained" color="primary">Checkout</Button> 
        </div>
      </div>
    </>
  )
  return (
    <Container>
      <div className="toolbar"/>
      <Typography className="title" variant="h5" gutterBottom>Your Shopping Cart</Typography>
      {!cart.line_items.length ? renderEmptyCart(): renderCart()}
    </Container>
  )
}
export default CartButtons

