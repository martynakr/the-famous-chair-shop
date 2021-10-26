import Button from "../Button"
import styles from "./Quantity.module.scss"


const Quantity = ({min, max, onChange, count}) => {


    const handleIncrement = () => {
        if(count < max){
            onChange(count + 1)
        }
    }


    const handleDecrement = () => {
        if(count > 1){
            onChange(count - 1)
        }
    }


    return (
        <div className={styles.Quantity}>
             <Button onClick={handleDecrement} fontWeight="900" colour="white" fontColour="#d79e01" fontSize="38px">-</Button>
             <span>{count}</span>
             <Button onClick={handleIncrement} fontSize="38px" colour="white" fontColour="#d79e01">+</Button>
        </div>
    )
}

export default Quantity
