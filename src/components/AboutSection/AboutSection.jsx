import Collapse from '../Collapse/Collapse';
import styles from './styles.module.scss';

/**
 * Component to display the about section, with a list of collapse elements.
 * @param {{settling: {title: string, content: string}[]}} props - Props for the component.
 * @returns {React.ReactElement} - The React element for the component.
 */
const AboutSection = ({ settling }) => {
  return (
    <main className={styles.container}>
      <ul className={styles.container__content}>
        {settling.map((rule, index) => {
          return <Collapse key={`${index}-${rule.title}`} object={rule} />;
        })}
      </ul>
    </main>
  );
};

export default AboutSection;