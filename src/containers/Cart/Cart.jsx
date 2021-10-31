import LargeHeading from "../../components/LargeHeading"
import { getCart, deleteCartItem, updateProduct } from "../../services/products"
import { useEffect, useState, useContext } from "react"
import Button from "../../components/Button"
import styles from "./Cart.module.scss"
import { CartContext } from "../../context/CartContext";
import CartList from "../CartList"
import Product from "../Product/Product"


const Cart = () => {

    const [inCart, setInCart] = useState(null) // created because cart context doesn't work properly
    const {cart, setCart} = useContext(CartContext)

    useEffect(()=> {
        const populateCart = async () => {
        const data = await getCart()    
        setInCart(data)

        }
    populateCart()

    }, [])




    // const uniqueInCart = inCart.map((n) => {
    //     n.id
    // })


//   const groupArray = (myArray) => {
//         let grouped = [];
    
//         for (let i = 0; i < myArray.length; i++) {
//             let row = myArray[i];
//             let group = grouped[row.id];
//             if (!group) {
//                 group = [];
//                 grouped[row.id] = group;
//             }
//             group.push(row);
//         }
    
//         return grouped
//         }

//         const groupedCart = groupArray(inCart)

// { if(inCart.lenght !== 0) {

// }  
        
     
  


    

        console.log(inCart)


    return (
        <div className={styles.Cart}>
      
      <div>
        {inCart && inCart.map((item, index) => {

    return (
        <div className={styles.Item}>
        <CartList key={index} name={item.name} qty={item.qty} id={item.id} price={item.price} img={item.img}/>
        </div>
        )  
        })}
            </div>
            <div className={styles.CartTotal}>
                <LargeHeading size="58px" title="Cart"/>
                {/* {inCart ?
                <> */}
                <>
                <h4>Order Summary</h4>
                <p>Subtotal: ${
                // inCart.map((n) => n.price).reduce((a,b) => a + b)
                }.00 </p>
                <p>Shipping: FREE</p>
                <p>TOTAL: ${
                // inCart.map((n) => n.price).reduce((a,b) => a + b)
                }.00 </p>
                <Button colour="#d79e01" fontColour="white">Checkout &#62;</Button></> 
                {/* : <p>Your cart is empty.</p>} */}
                </div>
  
           
             
        </div>)}
  

export default Cart
