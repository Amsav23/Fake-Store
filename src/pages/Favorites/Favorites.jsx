import React, {useContext} from 'react'
import './Favorites.css'
import {FavoritesContext} from '../../contexts/FavoritesContext'
import ProductCard from './../../components/ProductCard/ProductCard';

function Favorites() {
  //get the global state
  //NOTE {} NOT []
  const {favorites} = useContext(FavoritesContext)


  return (
    <div className="favorites-container">
      <h1>My Favorite Products</h1>
      <div className="favorite-products">
        {
          favorites.map(item => <ProductCard key={item.id} product={item}/>)
        }
      </div>
    </div>
  )
}

export default Favorites