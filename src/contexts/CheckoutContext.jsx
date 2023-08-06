import {useState, createContext, useEffect} from 'react'

//create context
export const CheckoutContext = createContext()

export default function CheckoutContextProvider(props){
    //create the global state
    const [checkout, setCheckout] = useState([])

    
    
    //this one is for retrieving from localStorage
    useEffect(()=>{
        //when page loads, check if there is value in localStorage
        const storedCheckout = localStorage.getItem('checkoutList')
        //console.log(storedDarkMode)
        //if there was a value, use it
        if (storedCheckout){
            setCheckout(JSON.parse(storedCheckout))
        }
    }, []
    )
    

    //this one is for saving to localStorage
    useEffect(
        ()=>{
            //console.log('darkmode now', darkMode)
            //save current state to localStorage
            localStorage.setItem('checkoutItem', JSON.stringify(checkout))

        }, [checkout] //runs anytime darkMode changes
    )
    

    //this function will add a product to the list
    const addProduct = (prodToAdd) =>{
        console.log('adding', prodToAdd)
        //verify that I have the data of the product to add
        let newCheckout = [...checkout, prodToAdd]
        console.log(newCheckout)
        //update state
        setCheckout(newCheckout)

    }

    const removeProduct = (prodId) =>{
        console.log('remove', prodId)
        //use filter to KEEP all that are not prodId
        let newCheckout = checkout.filter(item => item.id != prodId)
        console.log(newCheckout)
        //update state
        setCheckout(newCheckout)

    }

    return(
        <CheckoutContext.Provider value={{checkout, addProduct, removeProduct, setCheckout}}>
            {props.children}
        </CheckoutContext.Provider>
    )

}