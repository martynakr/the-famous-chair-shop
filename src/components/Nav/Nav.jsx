import styles from "./Nav.module.scss"
import CartIcon from "../CartIcon"
import { NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

const Nav = () => {

    const {cart, setCart} = useContext(CartContext)

    const classes = cart.length > 0 ? styles.Incart : styles.Empty;

    
    return (
        <div className={styles.Nav}>
            <ul className={styles.NavItems}>
                <li>
                    <NavLink activeStyle={{fontWeight: "bold"}}className={styles.Link} exact to="/" >Home</NavLink>
                </li>
                {/* <li>
                    Top Picks</li>
                <li>All Products</li> */}
                <li className={styles.Icon}>
                    <NavLink exact to="/cart" activeClassName={styles.ActiveCart}>
                        <div className={classes}></div>
                        <CartIcon height="30px"/>
                    </NavLink>
                 
                </li>
            </ul>
            
        </div>
    )
}


export default Nav
