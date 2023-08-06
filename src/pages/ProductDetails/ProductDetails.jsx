import React, {useEffect, useContext, useState} from 'react'
import {useParams} from 'react-router-dom'
import './ProductDetails.css'
import axios from 'axios'
import { CheckoutContext } from '../../contexts/CheckoutContext'

function ProductDetails() {
    //this page shows details about a specific product
    //the product id is in the url

    //extract productId from url
    const {productId} = useParams()
    //I need to get details for this product when the page loads
    //https://fakestoreapi.com/products/1

    //create state for data for this product
    const {addProduct, checkout, removeProduct} = useContext(CheckoutContext)

    const [inCheckout, setInCheckout] = useState(false)

    useEffect(
        ()=>{
            setInCheckout(checkout?.find(item=>item.id==productId))
        }, [checkout]
    )

    //create state for data for this character
    const [product, setProduct] = useState('')

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

            {
                inCheckout?
                <button className="remove-btn" onClick={()=>removeProduct(product.id)}>Remove from Cart</button>
                :
                <button className="add-btn" onClick={()=>addProduct(product)}>Add to Cart</button>
            }

        </div>
    </div>
  )
}

export default ProductDetails