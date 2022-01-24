import styles from "./Nav.module.scss"
import { NavLink } from "react-router-dom";


const Nav = () => {
    
    return (
        <div className={styles.Nav}>
            <ul className={styles.NavItems}>
                <li>
                    <NavLink activeStyle={{fontWeight: "bold"}}className={styles.Link} exact to="/" >Home</NavLink>
                </li>
            </ul>    
        </div>
    )
}


export default Nav
