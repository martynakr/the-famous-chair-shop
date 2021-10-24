import styles from "./Button.module.scss"


const Button = ({children, colour, fontColour, fontWeight, fontSize, padding, onClick}) => {
    return (
        <>
            <button onClick={onClick} className={styles.Button} style={{backgroundColor: colour, color:fontColour, fontWeights: fontWeight, fontSize: fontSize, padding}}>{children}</button>
        </>
    )
}

export default Button
