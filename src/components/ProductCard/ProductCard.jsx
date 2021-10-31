import Button from "../Button/Button"
import Quantity from "../Quantity"
import styles from "./ProductCard.module.scss"
import { Link } from "react-router-dom"
import { useState, useContext } from "react"
import { createCartItem, updateProduct } from "../../services/products"
import { CartContext } from "../../context/CartContext"


const ProductCard = ({name, designer, img, price, id, max}) => {

    const [count, setCount] = useState(1)
    console.log("this is count", count)
    const {cart, setCart} = useContext(CartContext)
    

    const handleCountChange = (newCount) => {
        setCount(newCount)   
    }

   

    const handleCart = async () => {

        const inCart = {
            id: id,
            name: name,
            price: price,
            qty: count,
            img: img
        }

        const partial = {
            quantity: max - count
        }

          if(cart.length < 0){
            setCart(inCart)
        }
         else setCart([...cart, inCart])
   
        await createCartItem(inCart);
        await updateProduct(id, partial);
    }

    console.log("this is cart", cart)
    //update max


    return (
       
                <div className={styles.ProductCard}>
                    <Link to={`/${id}`}>
                        <img src={img} alt=""/>
                        <h3>{name}</h3>

                        {/* {typeof designer !== "string" ? <p>by {designer}</p> : <p>by {Object.values(designer).join(", ")}</p>} */}
                         {designer.length !== 2 ? <p>by {designer}</p> : <p>by {Object.values(designer).join(", ")}</p>} 
                      
                    </Link>
                    <h4>${price}.00</h4>
                    <Quantity onChange={handleCountChange} count={count} max={max}  />
                    <Button onClick={handleCart} colour="#d79e01" fontColour="white">Add to cart</Button>
                </div>
       
    )
}

export default ProductCard
