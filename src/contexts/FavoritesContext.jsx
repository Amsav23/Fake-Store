import {useState, createContext, useEffect} from 'react'

//create context
export const FavoritesContext = createContext()

export default function FavoritesContextProvider(props){
    //create the global state
    const [favorites, setFavorites] = useState([])

    
    
    //this one is for retrieving from localStorage
    useEffect(()=>{
        //when page loads, check if there is value in localStorage
        const storedFavorites = localStorage.getItem('favoritesList')
        //console.log(storedDarkMode)
        //if there was a value, use it
        if (storedFavorites){
            setFavorites(JSON.parse(storedFavorites))
        }
    }, []
    )
    

    //this one is for saving to localStorage
    useEffect(
        ()=>{
            //console.log('darkmode now', darkMode)
            //save current state to localStorage
            localStorage.setItem('favoritesList', JSON.stringify(favorites))

        }, [favorites] //runs anytime darkMode changes
    )
    

    //this function will add a product to the list
    const addProduct = (prodToAdd) =>{
        console.log('adding', prodToAdd)
        //verify that I have the data of the product to add
        let newFavorites = [...favorites, prodToAdd]
        console.log(newFavorites)
        //update state
        setFavorites(newFavorites)

    }

    const removeProduct = (prodId) =>{
        console.log('remove', prodId)
        //use filter to KEEP all that are not prodId
        let newFavorites = favorites.filter(item => item.id != prodId)
        console.log(newFavorites)
        //update state
        setFavorites(newFavorites)

    }

    return(
        <FavoritesContext.Provider value={{favorites, addProduct, removeProduct}}>
            {props.children}
        </FavoritesContext.Provider>
    )

}