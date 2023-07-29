import React, {useEffect, useState} from 'react'
import './MensClothing.css'
import axios from 'axios'
import ProductCard from '../../components/ProductCard/ProductCard'

function MensClothing() {
    //create state for Men's Clothing products
    const [products, setProducts] = useState([])

    //this page shows Men's Clothing products when it loads
    //https://fakestoreapi.com/products/category/men's%clothing

    useEffect (
        () => {
            console.log('page loaded')
            //make API call to get Men's Clothing product data
            axios.get('')
            .then(res => console.log(res))
            .catch(err => console.log(err))

        }, [] //run once when the page loads
    )

  return (
    <div>MensClothing</div>
  )
}

export default MensClothing