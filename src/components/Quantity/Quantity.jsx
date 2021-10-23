import Button from "../Button"
import styles from "./Quantity.module.scss"

const Quantity = ({min, max}) => {
    return (
        <div className={styles.Quantity}>
             <Button fontWeight="900" colour="white" fontColour="#d79e01" fontSize="38px">-</Button>
             <span>0</span>
             <Button fontSize="38px" colour="white" fontColour="#d79e01">+</Button>
        </div>
    )
}

export default Quantity
