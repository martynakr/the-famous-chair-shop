import Button from "../Button/Button"
import Quantity from "../Quantity"
import styles from "./ProductCard.module.scss"
import { Link } from "react-router-dom"

const ProductCard = ({name, designer, img, price, id}) => {
    
    return (
        <Link to={`/${id}`}>
                <div className={styles.ProductCard}>
                    <img src={img} alt=""/>
                    <h3>{name}</h3>
                    <p>by {designer}</p>
                    <h4>${price}.00</h4>
                    <Quantity/>
                    <Button colour="#d79e01" fontColour="white">Add to cart</Button>
                </div>
        </Link>
    )
}

export default ProductCard
