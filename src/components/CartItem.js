import React from 'react'
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@mui/material';
import "../style/CartItem.css"
import Nhan from "../img/jewellery2.jpg"
const products = [
    {id: 1, name: 'Pearl Rings', price : '15$', category: 'Rings',},
    {id:2, name: 'Flower Earing',price: '20$',category: 'Earing',}
  ]
function CartItem({item, onUpdateCartOty, onRemoveFromCart}) { 
    const handleUpdateCartQty = (lineItemId, newQuantity) => onUpdateCartOty(lineItemId, newQuantity);
    const handleRemoveFromCart = (lineItemId) => onRemoveFromCart(lineItemId);
  
  return (
    <Card className="cart-item">
        <CardMedia image={item.media.source} alt={item.name} className="card-item-media"/>
        <CardContent className="cart-item-content">
            <Typography variant="h9">{item.name}</Typography>
            <Typography variant="h10">{item.line_total.formatted_with_symbol}</Typography>
        </CardContent>
        <CardActions className="cartActions">
            <div className="actions-buttons">
                <Button type="button" size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity-1)}>-</Button>
                <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
                <Button type="button" size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}>+</Button>

            </div>
            <Button variant="contained" type="button" color="secondary" onClick={() => handleRemoveFromCart(item.id)}>Remove</Button>
        </CardActions>
    </Card>
  )
}

export default CartItem
