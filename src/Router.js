import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import Rent from './pages/RentPage';
import About from './pages/AboutPage';
import NotFound from './pages/ErrorPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


/**
 * This component renders the router for the whole application.
 * It renders a header, a routes component with four routes (for home, rent, about and not found pages),
 * and a footer.
 *
 * @returns {JSX.Element} - The router element.
 */
const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rent/:id" element={<Rent />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
