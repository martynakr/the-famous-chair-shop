import Button from "../Button/Button"
import Quantity from "../Quantity"
import styles from "./ProductCard.module.scss"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { QuantityContext } from "../../context/QuantityContext"

const ProductCard = ({name, designer, img, price, id, max}) => {

    // const {count, setCount}= useContext(QuantityContext)

    // const handleCountChange = (newCount) => {
    //     setCount(newCount)
    // }

    // const des = designer
    //onChange={handleCountChange}
    //count={count}

    return (
       
                <div className={styles.ProductCard}>
                    <Link to={`/${id}`}>
                        <img src={img} alt=""/>
                        <h3>{name}</h3>
                        <p>by {designer}</p>
                    </Link>
                    <h4>${price}.00</h4>
                    <Quantity max={max}  />
                    <Button colour="#d79e01" fontColour="white">Add to cart</Button>
                </div>
       
    )
}

export default ProductCard
