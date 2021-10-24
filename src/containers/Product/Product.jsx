import { useParams } from "react-router"
import { useEffect, useState } from "react";
import LargeHeading from "../../components/LargeHeading";
import { findProduct } from "../../services/products";
import Quantity from "../../components/Quantity";
import Button from "../../components/Button";
import SelectColour from "../../components/SelectColour";
import styles from "./Product.module.scss"



const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null)

   useEffect(() => {
       const populateStudent = async () => {
           const data = await findProduct(id)
           console.log(data)
           setProduct(data)
       }

       populateStudent();

   }, [id])

   //fix this to product &&
   if (!product) {
    return <h1>Product with Id: {id} was not found</h1>;
}

    return (
        <div className={styles.Product}>
            <div className={styles.ProductImg}>
                <img src={product.img}/>
            </div>
            <div className={styles.ProductDesc}>
                <LargeHeading margin="0" size="48px" title={product.name} align="left"/>
                <p className={styles.Price}>${product.price_per_unit}.00</p>
                <p>{product.description}</p> 
                <div className={styles.Qty}>
                    <p className={styles.Qtytext}>Colour: </p>
                    <SelectColour colourOptions={product.colour}/>
                </div>
                <div className={styles.Qty}>
                    <p className={styles.Qtytext}>Qty:</p>
                    <Quantity/>
                </div>
                <Button fontColour="white" colour="#d79e01" padding="10px 80px">Add to cart</Button>
            </div>
        </div>
    )
}

export default Product
