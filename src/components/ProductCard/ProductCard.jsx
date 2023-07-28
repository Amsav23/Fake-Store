import React from 'react'
import './ProductCard.css'

function ProductCard({product}) {
  return (
    <div className="product-card">
        <img src={product.image}></img>
        <a href={`/details/${product.id}`} style={{fontWeight: "bold"}}>{product.title}</a>
        <p style={{color: "grey"}}>{product.category}</p>
        <p style={{fontWeight: "bold"}}>{product.price}€</p>
    </div>
  )
}

export default ProductCard