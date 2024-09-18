import { Link } from 'react-router-dom';
import styles from './Card.module.scss';

/**
 * A Card component that renders a clickable card with the given image and title.
 *
 * @param {{cover: string, title: string}} card - An object with the image source and title of the card.
 * @returns {JSX.Element} - A JSX element representing the card.
 */
const Card = ({ card }) => {
  return (
    <article>
      <Link to={`/rent/${card.id}`}>
        <div className={styles.card}>
          <img src={card.cover} alt='' className={styles.cardImage} />
          <p className={styles.cardTitle}>{card.title}</p>
        </div>
      </Link>
    </article>
  );
};

export default Card;
