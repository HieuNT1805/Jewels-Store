import React,{useState, useEffect} from 'react'
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@mui/material';
import "../style/CartItem.css"

function CartItem({item, onUpdateCartQty, onRemoveFromCart}) { 
    const [quantity, setQuantity]=useState(item.quantity)
    const handleUpdateCartQty = (lineItemId, newQuantity) => onUpdateCartQty(lineItemId, newQuantity);
    const handleRemoveFromCart = (lineItemId) => onRemoveFromCart(lineItemId);
    useEffect(()=>{
      
    },[item.quantity])
  return (
    <Card className="cart-item">
        <CardMedia image={''} alt={item.product.name} className="card-item-media"/>
        <CardContent className="cart-item-content">
            <Typography variant="h9">{item.product.name}</Typography>
            <Typography variant="h10">{}</Typography>
        </CardContent>
        <CardActions className="cartActions">
            <div className="actions-buttons">
                <Button type="button" size="small" onClick={() => handleUpdateCartQty(item._id, item.quantity - 1)}>-</Button>
                <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
                <Button type="button" size="small" onClick={() => handleUpdateCartQty(item._id, item.quantity + 1)}>+</Button>

            </div>
            <Button variant="contained" type="button" color="secondary" onClick={() => handleRemoveFromCart(item.id)}>Remove</Button>
        </CardActions>
    </Card>
  )
}

export default CartItem
