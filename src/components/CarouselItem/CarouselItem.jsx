import styles from "./CarouselItem.module.scss"

export const CarouselItem = ({name, designer, year_designed, carousel_img, index}) => {

    return (
            <div className={styles.CarouselItem}>
                <div className={styles.Grey}>
                    <div>
                        <p className={styles.Number}>{index + 1}</p>
                    </div>
                    <div className={styles.Info}>
                        <h4>{name}</h4>
                        <p>Designer: <span>{designer}</span></p>
                        <p>Year Designed: <span>{year_designed}</span></p>
                    </div>
                </div>
                <div className={styles.White}>
                        <img src={carousel_img} alt="chair"/>
                </div>
             </div>

    )
}
