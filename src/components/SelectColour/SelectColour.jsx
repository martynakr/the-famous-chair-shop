import styles from "./Select.module.scss"

const SelectColour = ({colourOptions}) => {
    return (
        <div>
            <select className={styles.Select} name="colours">
                {colourOptions.map((colour, index) => {
                return(
                 <option key={index} value={colour}>{colour}</option>)
})}
            </select>
        </div>
    )
}

export default SelectColour
