import banner from "../assets/banner.png";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Gallery from '../components/Gallery/Gallery';
const Home = () => {
    return (
        <div className="homepage">
            <Header />
            <main>
                <Banner img={banner} text="Chez vous, partout et ailleurs" />
                <Gallery />
            </main>
            <Footer />
        </div>
    );
};

export default Home;