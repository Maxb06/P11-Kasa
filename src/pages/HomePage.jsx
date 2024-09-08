import banner from "../assets/banner.png";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
const Home = () => {
    return (
        <div className="homepage">
            <Header />
            <Banner img={banner} text="Chez vous, partout et ailleurs" />
            <Footer />
        </div>
    );  
};  

export default Home;