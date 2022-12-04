import React, {useState, useEffect} from 'react'
import "../style/Menu.css"
import { Grid } from '@mui/material'
import Product from '../components/MenuItem'
import getProductList from '../service/product.service'

function Menu() {
    const [data, setData] = useState([]); 
    useEffect(() => {
      getProductList()
      .then((res) =>{
        setData(res.data.products)
      })
    }, [])
  return (
    <main className="content">
      <div className="toolbar"/>
      <Grid container justify="center" spacing={4}>
      
        {data && data.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product}  />
          </Grid>
          ))}
      </Grid>
  </main>
  )
}

export default Menu
