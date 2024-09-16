import Card from '../Card/Card';
import styles from './Gallery.module.scss';

/**
 * This component renders a list of rent cards, it is used
 * in the HomePage component. It takes a list of rent objects
 * as a prop and renders a Card component for each one.
 *
 * @param {Array} data - An array of rent objects
 * @returns {JSX} A JSX element representing a list of rent cards
 */
const Gallery = ({data}) => {
  return (
    <main>
      <section className={styles.gallery}>
        {data.map((rent, index) => {
          return <Card key={`${index}-${rent.id}`} card={rent} />;
        })}
      </section>  
    </main>
  );
};

export default Gallery;
