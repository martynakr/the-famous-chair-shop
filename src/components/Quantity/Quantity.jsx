import Button from "../Button"
import styles from "./Quantity.module.scss"
import { useContext } from "react"
import { QuantityContext } from "../../context/QuantityContext"

const Quantity = ({min, max, onChange}) => {

    // const {count}= useContext(QuantityContext)

    // console.log("max", max)
    // const handleIncrement = () => {
    //     if(count < max){
    //         onChange(count + 1)
    //     }
    // }


    // const handleDecrement = () => {
    //     if(count > 1){
    //         onChange(count - 1)
    //     }
    // }


    return (
        <div className={styles.Quantity}>
             <Button  fontWeight="900" colour="white" fontColour="#d79e01" fontSize="38px">-</Button>
             <span>1</span>
             <Button fontSize="38px" colour="white" fontColour="#d79e01">+</Button>
        </div>
    )
}

export default Quantity
