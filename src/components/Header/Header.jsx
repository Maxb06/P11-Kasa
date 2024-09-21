import { NavLink } from 'react-router-dom';
import logo from '../../assets/LOGO.png';
import styles from './Header.module.scss';

/**
 * The header component, which contains the logo and a navigation menu with links to the homepage and the about page.
 *
 * @returns {JSX.Element} - A JSX element representing the header.
 */
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo Kasa" />
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? styles.activeLink : undefined
              }
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? styles.activeLink : undefined
              }
            >
              À Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
