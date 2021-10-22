import styles from "./Nav.module.scss"
import CartIcon from "../CartIcon"
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <div className={styles.Nav}>
            <ul className={styles.NavItems}>
                <li>
                    <NavLink className={styles.Link} to="/" activeClassName={styles.Link_Selected}>Home</NavLink>
                </li>
                <li>Top Picks</li>
                <li>All Products</li>
                <li className={styles.Icon}>
                    <NavLink to="/cart">
                        <CartIcon height="30px"/>
                    </NavLink>
                 
                </li>
            </ul>
            
        </div>
    )
}

export default Nav
