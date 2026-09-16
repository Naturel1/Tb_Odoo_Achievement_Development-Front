import { NavLink } from "react-router-dom";
import { useState } from "react";
import banner from "../../../assets/banner.png"
import styles from "./Navbar.module.css";

export default function Navbar() {
    const [userConnected, setUserConnected] = useState(null);

    const handleClick = () => {
        if (userConnected) {
            setUserConnected(null);
        } else {
            setUserConnected({name:"toto"});
        }
    }

    return (
        <nav className={styles.Navbar}>
            <ul className={styles.NavbarContent}>
                <li>
                    <NavLink to="/">
                        <img src={banner} 
                            alt="les mousquedevs"
                            className={styles.NavbarHomeImage} 
                        />
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/achievement">
                        <p>Les succés</p>
                    </NavLink>
                </li>
                { 
                    userConnected &&
                    <>
                        <li>
                            <p>Mes succés</p>
                        </li>
                    </>
                }
                
            </ul>
            <div className={styles.NavbarContent}>
                {
                    userConnected ?
                    <a onClick={handleClick}>Se déconnecter</a>:
                    <a onClick={handleClick}>Se connecter</a>
                }
            </div>
        </nav>
    );
}