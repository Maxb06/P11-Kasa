import Error from '../components/ErrorPage/Error';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
const ErrorPage = () => {
  return (
    <div className="erreurPage ">
      <Header />
      <Error />
      <Footer />
    </div>
  );
};

export default ErrorPage;
