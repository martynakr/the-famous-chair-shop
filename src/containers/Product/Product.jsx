import { useParams } from "react-router"
import { useEffect, useState } from "react";
import LargeHeading from "../../components/LargeHeading";
import { findProduct } from "../../services/products";
import Quantity from "../../components/Quantity";
import Button from "../../components/Button";
import SelectColour from "../../components/SelectColour";
import styles from "./Product.module.scss"
import HeartIcon from "../../components/HeartIcon";
import { updateProduct } from "../../services/products";
import { useContext } from "react";
import { createCartItem } from "../../services/products";
import { CartContext } from "../../context/CartContext";



const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null)
    const {cart, setCart} = useContext(CartContext)
    const [count, setCount] = useState(1)

    const handleCart = async () => {

        const cartItem = {
            id: id,
            name: product.name,
            price: product.price_per_unit,
            qty: parseInt(count)
        }
        
        
      const partial = {
        quantity: product.quantity - count
    }

        if(cart.length < 0){
            setCart(cartItem)
        }
         else setCart([...cart, cartItem])


      await createCartItem(cartItem);
      await updateProduct(product.id, partial);
      }

    //   useEffect(() => {}, [handleCart])





// const handleCart = () => {
// console.log("cart state", cart)
//     const cartItem = {
//         id: id,
//         name: product.name,
//         price: product.price_per_unit,
//         qty: parseInt(count)
//     }

//     const cartId = cartItem.id

//     // const index = cart.findIndex((n) => n.id === cartId) 
//     // console.log("index", index)
//     // console.log(cart.filter(n=> n.id === cartItem.id).length > 0, "filter")
//     // console.log("cart", cart[index].qty += count)

//     console.log(cart.filter(n=> n.id === cartId).length > 0, "length")


//     if(cart.length === 0 || cart.filter(n=> n.id === cartId).lenght < 0){
//         setCart([...cart, cartItem])
//     }

//     if(cart.filter(n=> n.id === cartId).lenght > 0) {
//         console.log(cartItem, "cartItem")
//         const index = cart.findIndex((n) => n.id === cartId) 
//         console.log("index", index)
//         setCart(cart[index].qty += count)
//         console.log("updated cart", cart)

//     } 
       
    
 
//         // await createCartItem(cartItem);
//         // await updateProduct(product.id, partial);
//     }

  

console.log("new cart", cart)

    function handleCountChange(newCount) {
        setCount(newCount);
    }

   useEffect(() => {
       const populateProduct = async () => {
           const data = await findProduct(id)
           setProduct(data)
       }

       populateProduct();

   }, [id])




   if (!product) {
    return <h4>Product with Id: {id} was not found</h4>;
}

    return (
        <div className={styles.Product}>
            <div className={styles.ProductImg}>
                <img src={product.img}/>
            </div>
            <div className={styles.ProductDesc}>
                <LargeHeading margin="0" size="44px" title={product.name} align="left"/>
                <p className={styles.Price}>${product.price_per_unit}.00</p>
                <p>{product.description}</p> 
                <div className={styles.Qty}>
                    <p className={styles.Qtytext}>Add to favourites: </p>
                    <HeartIcon product={product}/>
                 </div> 
                <div className={styles.Qty}>
                    <p className={styles.Qtytext}>Colour: </p>
                    <SelectColour colourOptions={product.colour}/>
                </div>
                <div className={styles.Qty}>
                    <p className={styles.Qtytext}>Qty:</p>
                    <Quantity count={count} onChange={handleCountChange}/>
                </div>
                <Button onClick={handleCart} fontColour="white" colour="#d79e01" padding="10px 80px">Add to cart</Button>
            </div>
        </div>
    )
}

export default Product
