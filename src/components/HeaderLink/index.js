import styles from "./HeaderLinks.module.css";
import { Link, useLocation } from "react-router-dom";

export default function HeaderLink({children, to}) {
    const location = useLocation();

    return (
        <Link className={`
            ${styles.link}
            ${location.pathname === to ? styles.linkActive : ""}
        `} to={to}>
            {children}
        </Link>
    )
}