import styles from '../styles/Navbar.module.css'

function Navbar() {
    return (
        <nav className={styles.nav}>
            <div className={styles.wrapper}>
                <li>
                    <a href="#" className={styles.navlink}>Home</a>
                </li>
                <li>
                    <a href="#" className={styles.navlink}>Login</a>
                </li>
                <li>
                    <a href="#" className={styles.navlink}>Sign Up</a>
                </li>
            </div>
        </nav>
    );
}

export default Navbar;
