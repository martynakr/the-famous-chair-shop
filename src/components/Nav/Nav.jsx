import styles from "./Nav.module.scss"
import CartIcon from "../CartIcon"
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className={styles.Nav}>
            <ul className={styles.NavItems}>
                <li>
                    <Link className={styles.Link} to="/" activeClassName={styles.Link_Selected}>Home</Link>
                </li>
                <li>Top Picks</li>
                <li>All Products</li>
                <li className={styles.Icon}>
                    <Link to="/cart">
                        <CartIcon height="30px"/>
                    </Link>
                 
                </li>
            </ul>
            
        </div>
    )
}

export default Nav
