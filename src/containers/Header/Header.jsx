import HeaderIllustration from "../../components/HeaderIllustration/HeaderIllustration"
import styles from "./Header.module.scss"
import LargeHeading from "../../components/LargeHeading"

const Header = () => {
    return (
        <div className={styles.Header}>
         <LargeHeading title="The famous chair shop"/>
         <HeaderIllustration/>
        </div>
    )
}

export default Header
