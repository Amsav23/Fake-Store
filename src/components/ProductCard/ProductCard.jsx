import React from 'react'
import './ProductCard.css'

function ProductCard({product}) {
  return (
    <div className="product-card">
        <img src={product.image}></img>
        <p style={{fontWeight: "bold"}}>{product.title}</p>
        <p style={{color: "grey"}}>{product.category}</p>
        <p style={{fontWeight: "bold"}}>{product.price}€</p>
    </div>
  )
}

export default ProductCard