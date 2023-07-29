import React, {useEffect, useState} from 'react'
import './Jewelery.css'
import axios from 'axios'
import ProductCard from '../../components/ProductCard/ProductCard'

function Jewelery() {
    //create state for Jewelery products
    const [products, setProducts] = useState([])

    //this page shows Jewelery products when it loads
    //https://fakestoreapi.com/products/category/jewelery

    useEffect (
      ()=> {
        console.log('page loaded')
        //make API call to get Jewelery product data
        axios.get('https://fakestoreapi.com/products/category/jewelery')
        .then(res=> {
          console.log(res.data)
          //I have data, where do I store it?
          //store in state
          setProducts(res.data)
        })
        .catch(err=> console.log(err))
      }, [] //run once when the page loads
    )

  return (
    <div className="jewelery-container">
      {
        products.map(item => <ProductCard key={item.id} product={item}/>)
        //products.map(item => <p key={item.id}>{item.category}</p>)
      }
    </div>
  )
}

export default Jewelery