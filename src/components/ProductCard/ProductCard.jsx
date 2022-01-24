import Button from "../Button/Button"
import Quantity from "../Quantity"
import styles from "./ProductCard.module.scss"
import { Link } from "react-router-dom"
import { useState, useContext } from "react"



const ProductCard = ({name, designer, img, price, id, max}) => {

    const [count, setCount] = useState(1)
    

    const handleCountChange = (newCount) => {
        setCount(newCount)   
    }


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
                    <Button colour="#d79e01" fontColour="white">Add to cart</Button>
                </div>
       
    )
}

export default ProductCard
