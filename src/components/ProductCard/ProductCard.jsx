import Button from "../Button/Button"
import Quantity from "../Quantity"
import styles from "./ProductCard.module.scss"

const ProductCard = ({name, designer, img, price}) => {
    
    return (
        <div className={styles.ProductCard}>
            <img src={img} alt=""/>
            <h3>{name}</h3>
            <p>by {designer}</p>
            <h4>${price}.00</h4>
            <Quantity/>
            <Button colour="#d79e01" fontColour="white">Add to cart</Button>
        </div>
    )
}

export default ProductCard
