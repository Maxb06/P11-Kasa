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
            <main className={styles.container}>
                <Banner img={banner} className={styles.banner} />
                <ul className={styles.container__content}>
                    {aboutList.map((data, index) => (
                        <Collapse key={`${index}-${data.title}`} title={data.title}>
                            {typeof data.content === 'string' ? (
                                <p>{data.content}</p>
                            ) : (
                                <ul>
                                    {data.content.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            )}
                        </Collapse>
                    ))}
                </ul>
            </main>
        </div>
    );
};

export default About;
