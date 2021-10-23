import styles from "./Button.module.scss"


const Button = ({children, colour, fontColour, fontWeight, fontSize}) => {
    return (
        <div>
            <button className={styles.Button} style={{backgroundColor: colour, color:fontColour, fontWeights: fontWeight, fontSize: fontSize}}>{children}</button>
        </div>
    )
}

export default Button
