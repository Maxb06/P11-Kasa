import banner from "../assets/aboutBanner.png";
import Banner from "../components/Banner/Banner";
import aboutList from "../data/aboutList";
import AboutSection from "../components/AboutSection/AboutSection";

/**
 * Returns a JSX element representing the about page.
 * It renders a banner component with the given image and an AboutSection
 * component with the given settling data.
 * The AboutSection component is defined in the AboutSection module.
 * @returns {React.ReactElement} - A JSX element representing the about page.
 */
const About = () => {
    return (
        <div>
            <Banner img={banner} />
            <AboutSection settling={aboutList} />
        </div>
    );
};

export default About;