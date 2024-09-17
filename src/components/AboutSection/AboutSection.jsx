import Collapse from '../Collapse/Collapse';
import styles from './styles.module.scss';


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