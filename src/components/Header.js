import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/a-propos">À Propos</Link>
    </nav>
  );
};

export default Header;