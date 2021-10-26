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

        const cleaned = {
            id: id,
            name: product.name,
            price: product.price_per_unit,
            qty: parseInt(count)
        }
        
        
      const partial = {
        quantity: product.quantity - count
    }


        setCart( cleaned)


      await createCartItem(cleaned);
      await updateProduct(product.id, partial);
      }

console.log("new cart", cart)
  


    const handleCountChange = (newCount) => {
        setCount(newCount)
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
