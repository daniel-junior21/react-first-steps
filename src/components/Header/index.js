import { Link } from 'react-router-dom';
import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <img src="/images/logo.png" alt="Banner" />
                <div className={styles.links}>
                    <Link className={styles.link} to="/">
                        Home
                    </Link>
                    <Link className={styles.link} to="/blog">
                        Blog
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Header;