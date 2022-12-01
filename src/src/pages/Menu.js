import React, {useState, useEffect} from 'react'
import MenuList from '../components/MenuList'
import items from "../components/MenuItem"
import Categories from '../components/Categories'
import "../style/Menu.css"
import { Grid } from '@mui/material'
// import Product from '../components/MenuItem'
// import getProductList from '../service/product.service'
import Item from '../components/Item'
import products from '../helper/data'
function Menu() {
    // const [data, setData] = useState({products:[]}); 
    // useEffect(() => {
    //   getProductList()
    //   .then((res) =>{
    //     setData(res.data)
    //   })
    // }, [])
  // console.warn(data.productData) 
  return (
  //   <main className="content">
  //     <div className="toolbar"/>
  //     <Grid container justify="center" spacing={4}>
  //       {data.products && data.products.map((product) => (
  //         <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
  //           <Product product={product}  />
  //         </Grid>
  //         ))}
  //     </Grid>
  // </main>

  //code Cart moi
  <>
    <h1 className="text-center mt-3"> Our Products</h1>
		<section className="py-4 container">
			<div className="row justify-content-center">
				{products.map((item,index)=> {
					return (
						<Item img={item.img}  title={item.title} price={item.price} item={item} key={index} />
					)
				})}
			</div>
		</section>
  </>
  )
}

export default Menu
