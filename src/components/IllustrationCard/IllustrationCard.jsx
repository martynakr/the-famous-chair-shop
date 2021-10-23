import styles from "./IllustrationCard.module.scss"

const IllustrationCard = ({fill, colour, height, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10}) => {
    return (
        <div className={styles.IllustrationCard} style={{backgroundColor: colour}} >
            <svg height={height} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" fill={fill}><path class="cls-1" d={d1}/><path class="cls-1" d={d2}/><path class="cls-1" d={d3}/><path class="cls-1" d={d4}/><path class="cls-1" d={d5}/><path class="cls-1" d={d6}/><path class="cls-1" d={d7}/><path class="cls-1" d={d8}/><path class="cls-1" d={d9}/><path class="cls-1" d={d10}/></svg>
        </div>
    )
}

export default IllustrationCard
