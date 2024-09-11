import banner from "../assets/aboutBanner.png";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";

const About = () => {
    return (
        <div className="homepage">
            <Header />
            <main>
                <Banner img={banner} />
            </main>
            <Footer />
        </div>
    );
};

export default About;