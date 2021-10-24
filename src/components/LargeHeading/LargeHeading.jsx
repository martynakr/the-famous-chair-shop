import styles from "./LargeHeading.module.scss"

const LargeHeading = ({title, margin, size, align}) => {

    return (
        <div className={styles.HeadingDiv}>
            <h1 className={styles.LargeHeading} style={{margin: margin, fontSize: size, textAlign: align}}>{title}</h1>
        </div>
    )
}

export default LargeHeading
