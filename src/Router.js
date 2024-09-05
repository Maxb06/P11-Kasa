import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import Rent from './pages/RentPage';
import About from './pages/AboutPage';
import NotFound from './pages/ErrorPage';


const AppRouter = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rent/:id" element={<Rent />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
  );
};

export default AppRouter;
