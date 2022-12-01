import React, {useState, useEffect} from 'react'
import MenuList from '../components/MenuList'
import items from "../components/MenuItem"
import Categories from '../components/Categories'
import "../style/Menu.css"
import { Grid } from '@mui/material'
// import Product from '../components/MenuItem'
import getProductList from '../service/product.service'
import Item from '../components/Item'
import products from '../helper/data'
function Menu() {
    const [products, setProducts] = useState([]); 
    useEffect(() => {
      getProductList()
      .then((res) =>{
        setProducts(res.data.products)
      })
    }, [])
  return (
  <>
    <h1 className="text-center mt-3"> Our Products</h1>
		<section className="py-4 container">
			<div className="row justify-content-center">
				{products.map((item,index)=> {
					return (
						<Item img={item.img}  name={item.name} price={item.price} item={item} key={index} />
					)
				})}
			</div>
		</section>
  </>
  )
}

export default Menu
