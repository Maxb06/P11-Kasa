import { Link } from 'react-router-dom';
import logo from '../../assets/LOGO.png';
import styles from './Header.module.scss';
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo Kasa" />
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/about">À Propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;