import { deleteCartItem } from "../../services/products"
import Quantity from "../../components/Quantity"
import BinIcon from "../../components/BinIcon"
import styles from "./CartList.module.scss"
const CartList = ({name, qty, id, price, img}) => {
    console.log(id)

        // const handleDelete= async () => {
        //     console.log("clicked")
        //     console.log(id)
        //     await deleteCartItem(id)
        // }


    return (
        <div className={styles.CartItem}>
            <div className={styles.Photo}>
                <img src={img}/>
            </div>
            <div className={styles.Desc}>
                <h3>{name}</h3>
                <p>${price}.00</p>
                <div className={styles.BinQty}>
                    <Quantity count={qty}/>
                    <BinIcon/>
                </div>
             </div>
        </div>
    )
}

export default CartList
