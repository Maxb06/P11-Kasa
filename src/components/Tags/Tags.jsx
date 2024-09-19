import PropTypes from 'prop-types';
import styles from './Tags.module.scss';

/**
 * A component to display a tag for a house.
 * @param {{ tag: string }} props - Props for the component.
 * @returns {React.ReactElement} - A React element representing the component.
 */
const Tags = ({ tag }) => {
  return (
    <li className={styles.tag}>{tag}</li>
  );
};

Tags.propTypes = {
  tag: PropTypes.string.isRequired,
};

export default Tags