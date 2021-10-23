import { useParams } from "react-router"
import { useEffect, useState } from "react";
import LargeHeading from "../../components/LargeHeading";
import { findProduct } from "../../services/products";
import Quantity from "../../components/Quantity";
import Button from "../../components/Button";
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

   //fix this to lazy evaluation
   if (!product) {
    return <h1>Product with Id: {id} was not found</h1>;
}

    return (
        <div className={styles.Product}>
            <div className={styles.ProductImg}>
                <img src={product.img}/>
            </div>
            <div className={styles.ProductDesc}>
                <LargeHeading title={product.name}/>
                <p>{product.price}</p>
                <p>{product.description}</p>  
                <p>Qty:<span><Quantity/></span></p>
                <Button>Add to cart</Button>
            </div>
        </div>
    )
}

export default Product
