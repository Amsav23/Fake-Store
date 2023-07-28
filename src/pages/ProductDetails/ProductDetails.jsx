import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import './ProductDetails.css'
import axios from 'axios'

function ProductDetails() {
    //this page shows details about a specific product
    //the product id is in the url

    //extract productId from url
    const {productId} = useParams()
    //I need to get details for this product when the page loads
    //https://fakestoreapi.com/products/1

    //create state for data for this product
    const [product, setProduct] = React.useState([])

    useEffect(
        ()=>{
            console.log('get data for product', productId)
            //call API to get data
            axios.get(`https://fakestoreapi.com/products/${productId}`)
            .then(res=> {
                console.log(res.data)
                //I have the data, what do I do with it?
                //store in state
                setProduct(res.data)
                
            })

            .catch(err=> console.log(err))


        }, [] //run once when page loads
    )


  return (
    <div className='details-container'>
        <img src={product.image} />
        <div className="container-info">
            <p>{product.title}</p>
            <p>{product.price}€</p>
            <p>Description</p>
            <p>{product.description}</p>
            <button>Add to Cart</button>

        </div>
    </div>
  )
}

export default ProductDetails