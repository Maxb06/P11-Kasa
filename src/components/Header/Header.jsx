import { Link } from 'react-router-dom';
import logo from '../../assets/LOGO.png';
const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo Kasa" />
      </div>
      <nav className="nav">
        <Link to="/">Accueil</Link>
        <Link to="/about">À Propos</Link>
      </nav>
    </header>
  );
};

export default Header;