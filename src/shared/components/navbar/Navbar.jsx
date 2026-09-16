import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAtom } from "jotai";

import styles from "./Navbar.module.css";

import banner from "../../../assets/banner.png"
import { tokenAtom, userAtom } from "../../../features/auth";

export default function Navbar() {
    const [_token, setToken] = useAtom(tokenAtom);
    const [userConnected, setUserConnected] = useAtom(userAtom);

    const nav = useNavigate();

    const handleClick = () => {
        if (_token) {
            setToken('');
            setUserConnected(null);
            nav('');
        } else {
            nav("/login");
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
                    _token &&
                    <>
                        <li>
                            <NavLink to="/achievement/my-achievements">
                                <p>Mes succés</p>
                            </NavLink>
                        </li>
                    </>
                }
                
            </ul>
            <div className={styles.NavbarContent}>
                {
                    _token ?
                    <a onClick={handleClick}>Se déconnecter</a>:
                    <a onClick={handleClick}>Se connecter</a>
                }
            </div>
        </nav>
    );
}