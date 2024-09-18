import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/LOGO.png';
import styles from './Header.module.scss';

/**
 * The header component, which contains the logo and a navigation menu with links to the homepage and the about page.
 *
 * @returns {JSX.Element} - A JSX element representing the header.
 */
const Header = () => {
  const location = useLocation();

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo Kasa" />
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link
              to="/"
              style={{
                textDecoration: location.pathname === '/' ? 'underline' : 'none',
              }}
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              style={{
                textDecoration: location.pathname === '/about' ? 'underline' : 'none',
              }}
            >
              À Propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
