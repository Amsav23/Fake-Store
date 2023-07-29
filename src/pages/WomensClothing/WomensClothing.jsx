import React, {useEffect, useState} from 'react'
import './WomensClothing.css'
import axios from 'axios'
import ProductCard from '../../components/ProductCard/ProductCard'

function WomensClothing() {
    //create state for Women's Clothing products
    const [products, setProducts] = useState([])

    //this page shows Women's Clothing products when it loads
    //https://fakestoreapi.com/products/category/womens%20clothing

    useEffect (
        () => {
            
        }
    )

  return (
    <div>WomensClothing</div>
  )
}

export default WomensClothing