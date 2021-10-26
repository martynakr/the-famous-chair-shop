import LargeHeading from "../../components/LargeHeading"
import { getCart } from "../../services/products"
import { useEffect, useState } from "react"
import Quantity from "../../components/Quantity"
import Product from "../Product/Product"

const Cart = () => {

    const [inCart, setInCart] = useState(null)

    console.log(inCart)


    useEffect(()=> {
        const populateCart = async () => {
        const data = await getCart()    
        setInCart(data)

        }
    populateCart()

    }, [])

    if (inCart === null) {
        return <p>Your cart is empty.</p>;
    }




    return (
        <div>
            <LargeHeading size="58px" title="Cart"/>
            <h3>{inCart[0].name}</h3>
        
             
        </div>)}
  

export default Cart
