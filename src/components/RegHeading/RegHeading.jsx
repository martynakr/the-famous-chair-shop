import styles from "./RegHeading.module.scss"

const RegHeading = ({title}) => {
    return (
        <div>
            <h2 className={styles.RegHeading}>{title}</h2>
        </div>
    )
}

export default RegHeading
