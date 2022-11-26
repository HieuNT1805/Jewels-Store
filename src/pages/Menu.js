import React, {useState, useEffect} from 'react'
import MenuList from '../components/MenuList'
import items from "../components/MenuItem"
import Categories from '../components/Categories'
import "../style/Menu.css"
import { Grid } from '@mui/material'
import Product from '../components/MenuItem'
import getProductList from '../service/product.service'
// const allCategories = ["all", ...new Set(items.map((item) => item.category))];
// const products = [
//   {id: 1, name: 'Pearl Rings', price : '15$', category: 'Rings',},
//   {id:2, name: 'Flower Earing',price: '20$',category: 'Earing',}
// ]
function Menu() {
    const [data, setData] = useState({products:[]}); 
    useEffect(() => {
      getProductList()
      .then((res) =>{
        setData(res.data)
      })
    }, [])
    // const [menuItems, setMenuItems] = useState(items);
    // const [activeCategory, setActiveCategory] = useState("");
    // const [categories, setCategories] = useState(allCategories);
    // const filterItems = (category) => {
    //     setActiveCategory(category);
    //     if (category === "all") {
    //       setMenuItems(items);
    //       return;
    //     }
    //     const newItems = items.filter((item) => item.category === category);
    //     setMenuItems(newItems);
    //   };
    
  return (
    <main className="content">
      <div className="toolbar"/>
      <Grid container justify="center" spacing={4}>
        {data.products && data.products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product}  />
          </Grid>
          ))}
      </Grid>
    {/* <section className="menu section">
      <div className="title">
        <h2>Our Product</h2>
        <div className="underline"></div>
      </div>
      <Categories
        categories={categories}
        activeCategory={activeCategory}
        filterItems={filterItems}
      />
      <MenuList items={menuItems} />
    </section> */}
  </main>
  )
}

export default Menu
