import HeaderIllustration from "../../components/HeaderIllustration/HeaderIllustration"
import styles from "./Header.module.scss"
import LargeHeading from "../../components/LargeHeading"

const Header = () => {
    return (
        <div className={styles.Header}>
            <div className={styles.HeadingDiv}>
                <LargeHeading title="The famous chair shop"/>
            </div>
            <HeaderIllustration/>
        </div>
    )
}

export default Header
