import banner from "../assets/aboutBanner.png";
import Banner from "../components/Banner/Banner";
import aboutList from "../data/aboutList";
import Collapse from '../components/Collapse/Collapse';
import styles from './styles/AboutPage.module.scss'; 

/**
 * Returns a JSX element representing the about page.
 * It renders a banner component with the given image and a list of collapse elements.
 * 
 * @returns {React.ReactElement} - A JSX element representing the about page.
 */
const About = () => {
    return (
        <div>
            <Banner img={banner} />
            <main className={styles.container}>
                <ul className={styles.container__content}>
                    {aboutList.map((rule, index) => (
                        <Collapse key={`${index}-${rule.title}`} object={rule} />
                    ))}
                </ul>
            </main>
        </div>
    );
};

export default About;
