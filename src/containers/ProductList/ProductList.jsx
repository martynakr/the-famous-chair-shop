import RegHeading from "../../components/RegHeading"
import ProductCard from "../../components/ProductCard/ProductCard"
import { useState, useEffect } from "react"
import firestore from "../../services/firestore"
import { getProducts } from "../../services/products"
import styles from "./ProductList.module.scss"


const ProductList = () => {
    const[products, setProducts] = useState(null)

    useEffect(()=> {
        const populateProducts = async () => {
        const data = await getProducts()
        console.log(data)
        setProducts(data)
        }

    populateProducts()

}, [])

    return (
        <div>
            <RegHeading title="All Products"/>
            <div className={styles.ProductList}>
                {products && products.map((product, index) => {       
                    return (
                  <ProductCard key={index} id={product.id} name={product.name} designer={product.designer} img={product.img} price={product.price_per_unit} max={product.quantity}/> )
            })}
            </div>
        </div>
    )
}

export default ProductList
