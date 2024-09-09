import styles from './Card.module.scss';

const Card = ({ title, cover }) => {
  return (
    <article className={styles.card}>
      <img src={cover} alt={title} className={styles.cardImage} />
      <h3 className={styles.cardTitle}>{title}</h3>
    </article>
  );
};

export default Card;
