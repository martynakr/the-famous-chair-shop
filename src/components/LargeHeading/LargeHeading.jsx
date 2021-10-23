import styles from "./LargeHeading.module.scss"

const LargeHeading = ({title}) => {

    return (
        <div className={styles.HeadingDiv}>
            <h1 className={styles.LargeHeading}>{title}</h1>
        </div>
    )
}

export default LargeHeading
