import {useState, createContext, useEffect} from 'react'

//create context
export const CheckoutContext = createContext()

export default function CheckoutContextProvider(props){
    //create the global state
    const [checkout, setCheckout] = useState([])

    //this one is for RETRIEVING from localStorage
    useEffect(()=>{
        //when page loads, check if there is value in localStorage
        const storedCheckout = localStorage.getItem('checkoutItem')
        console.log(storedCheckout)
        //if there was a value, use it
        if (storedCheckout){
            setCheckout(JSON.parse(storedCheckout))
        }
    }, []
    )
    
    //this one is for SAVING to localStorage
    useEffect(
        ()=>{
            //save current state to localStorage
            localStorage.setItem('checkoutItem', JSON.stringify(checkout))

        }, [checkout] //runs anytime checkout changes
    )
    
    //this function will ADD a product to the list
    const addProduct = (prodToAdd) =>{
        console.log('adding', prodToAdd)
        //verify that I have the data of the product to add
        let newCheckout = [...checkout, prodToAdd]
        console.log(newCheckout)
        //update state
        setCheckout(newCheckout)
    }

    //this function will REMOVE a product from the list
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