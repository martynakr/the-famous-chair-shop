import styles from "./CarouselItem.module.scss"
import Button from "../Button"

export const CarouselItem = () => {
    return (
        <div className={styles.CarouselItem}>
            <div className={styles.Grey}>
                <div>
                    <Button fontSize="40px" colour="#b2b2b2">&#60;</Button>
                </div>
                <div>
                    <p className={styles.Number}>1</p>
                </div>
                <div className={styles.Info}>
                    <h4>Name</h4>
                    <p>Designer: <span></span></p>
                    <p>Year Designed:<span></span></p>
                </div>
            </div>
            <div className={styles.White}>
                    <img src="" alt="chair"/>
                    <Button fontSize="40px" colour="white">&#62;</Button>
            </div>
        </div>
    )
}
