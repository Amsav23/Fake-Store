import React, {useEffect, useState} from 'react'
import './Electronics.css'
import axios from 'axios'
import ProductCard from '../../components/ProductCard/ProductCard'

function Electronics() {
    //create state for Electronics products
    const [products, setProducts] = useState([])

    //this page loads Electronics products when it loads
    //https://fakestoreapi.com/products/category/electronics

    useEffect (
        () => {
            console.log('page loaded')
            //make API call to get Electronics product data
            axios.get('https://fakestoreapi.com/products/category/electronics')
            .then(res => {
                console.log(res.data)
                //I have data, where do I store it?
                //store in state
                setProducts(res.data)
            })
            .catch(err => console.log(err))
        }, [] //run once when page loads
    )

  return (
    <div className="electronics-container">
        {
            products.map (item => <ProductCard key={item.id} product={item} />)
        }
    </div>
  )
}

export default Electronics