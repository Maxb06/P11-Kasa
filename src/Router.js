import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import Rent from './pages/RentPage';
import About from './pages/AboutPage';
import NotFound from './pages/ErrorPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


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
