import React, {useEffect} from 'react'
import './Homepage.css'

function Homepage() {
    //This page shows All products when it loads
    //https://fakestoreapi.com/products

    useEffect(
        ()=>{
            console.log('homepage loaded')

        }, [] //run once when the page loads
    )

  return (
    <div className="homepage-container">
        <div className="products-container">
            Products go here
        </div>
    </div>
  )
}

export default Homepage