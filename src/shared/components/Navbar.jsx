import { useState } from "react";
import styles from "./Navbar.module.css";
import banner from "../../assets/banner.png"

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
                    <a>
                        <img src={banner} 
                            alt="les mousquedevs"
                            className={styles.NavbarHomeImage} 
                        />
                    </a>
                </li>
                    {userConnected &&
                        <>
                            <li>
                                <p>Mon profil</p>
                            </li>
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