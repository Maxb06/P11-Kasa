import Carrousel from '../Carrousel/Carrousel';
import Collapse from '../Collapse/Collapse';
import Owner from '../Owner/Owner';
import HouseTitle from '../HouseTitle/HouseTitle';
import styles from './CardPage.module.scss';

/**
 * Component to display a rent card page, with a carrousel of the rent pictures,
 * a section with the rent title, location, tags, host and rating, and a section
 * with the rent description and equipments.
 *
 * @param {{description: string, pictures: string[], host: Object, equipments: string[], location: string, title: string, rating: number, tags: string[]}} house - The rent object
 * @returns {JSX.Element} - A JSX element representing the rent card page
 */
const CardPage = ({ house }) => {

  const { description, pictures, host, equipments, location, title, rating, tags } = house;

  return (
    <main className={styles.main}>
      <Carrousel pictures={pictures} title={title} />
      <section className={styles.containerInfo}>
        <HouseTitle title={title} location={location} tags={tags} />
        <Owner host={host} rating={rating} />
      </section>
      <ul className={styles.main__dropdown}>
        <Collapse object={{ title: 'Description', content: description }} />
        <Collapse object={{ title: 'Équipements', content: equipments }} />
      </ul>
    </main>
  );
};

export default CardPage;