import React, {useEffect, useState} from 'react'
import './Homepage.css'
import axios from 'axios'
import ProductCard from '../../components/ProductCard/ProductCard'

function Homepage() {
    //create state for the products
    const [products, setProducts] = useState([])

    //This page shows All products when it loads
    //https://fakestoreapi.com/products

    useEffect(
        ()=>{
            console.log('homepage loaded')
            //make api call to get product data
            axios.get('https://fakestoreapi.com/products')
            .then(res => {
                console.log(res.data)
                //I have data, where do I store it?
                //store in state
                setProducts(res.data)
            })
            .catch(err => console.log(err))

        }, [] //run once when the page loads
    )

  return (
    <div className="homepage-container">
        <div className="products-container">
            {
                products.map(item => <ProductCard key={item.id} product={item}/>)

                //products.map(item => <p key={item.id}>{item.title}</p>)
            }
        </div>
    </div>
  )
}

export default Homepage