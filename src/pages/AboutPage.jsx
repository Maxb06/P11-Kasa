import banner from "../assets/aboutBanner.png";
import Banner from "../components/Banner/Banner";
import aboutList from "../data/aboutList";
import AboutSection from "../components/AboutSection/AboutSection";

const About = () => {
    return (
        <div>
            <Banner img={banner} />
            <AboutSection settling={aboutList} />
        </div>
    );
};

export default About;