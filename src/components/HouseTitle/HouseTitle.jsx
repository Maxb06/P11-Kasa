import Tags from '../Tags/Tags';
import styles from './HouseTitle.module.scss';

/**
 * Component to display the title of a rent, along with its location and tags.
 * @param {{title: string, location: string, tags: string[]}} props - Props for the component.
 * @returns {React.ReactElement} - The React element for the component.
 */
const RentTitle = ({title, location, tags}) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.container__title}>{title}</h2>
      <span className={styles.container__span}>{location}</span>
      <ul>
        {tags.map((tag, index) => {
          return <Tags key={`${index}-${tag}`} tag={tag} />;
        })}
      </ul>
    </div>
  );
};

export default RentTitle;