import styles from './Header.module.css'
import HeaderLink from '../HeaderLink';

const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <img src="/images/logo.png" alt="Banner" />
                <div className={styles.links}>
                    <HeaderLink to="/">
                        Home
                    </HeaderLink>
                    <HeaderLink to="/blog">
                        Blog
                    </HeaderLink>
                </div>
            </nav>
        </header>
    )
}

export default Header;