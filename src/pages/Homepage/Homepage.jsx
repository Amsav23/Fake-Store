import React, {useEffect, useState} from 'react'
import './Homepage.css'
import axios from 'axios'
import ProductCard from '../../components/ProductCard/ProductCard'

function Homepage() {
    //create state for the products
    const [products, setProducts] = useState([])

    //create state for the products
    const [categories, setCategories] = useState([])

    //This page shows All products when it loads
    //https://fakestoreapi.com/products

    //get categories and product when page loads
    //https://fakestoreapi.com/categories
    //https://fakestoreapi.com/jewelery

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


            //make API call for categories
            axios.get('https://fakestoreapi.com/products/categories')
            .then(res => {
                console.log(res.data)
                //I have data, where do I store it?
                //store in state
                setCategories(res.data)
            })
            .catch(err => console.log(err))

        }, [] //run once when the page loads
    )

//const categories = ["All", "Elecronics", "Jewelery", "Men's Clothing", "Women's Clothing"]
const changeCategory = (category) => {
    //verify category in console
    console.log('category is', category)
    //now that I know category variable has what the user selected. What do I do next?
    //make an API call to get data for this category

    axios.get(`https://fakestoreapi.com/products/category/${category}`)
        .then(res => {
            console.log(res.data)
            //this is the data I want to see on Homepage
            //change what is inside products
            setProducts(res.data)
        })
        .catch(err => console.log(err))
}

const showAll = () => {
    console.log("show all products")
    //make an API call to get all products
    axios.get(`https://fakestoreapi.com/products`)
        .then(res => {
            console.log(res.data)
            //I have the data, where do I store it?
            //store it in state
            setProducts(res.data)
        })
        .catch(err => console.log(err))
}


  return (
    <div className="homepage-container">
        <div className="category-container">
            <p onClick={showAll}>All</p>
            {
                categories.map(item => <p key={item} onClick={()=>changeCategory(item)}>{item}</p>)
            }
        </div>


        <div className="products-container">
            {
                products.map(item => <ProductCard 
                    key={item.id} product={item}/>)

                //products.map(item => <p key={item.id}>{item.title}</p>)
            }
        </div>
    </div>
  )
}

export default Homepage