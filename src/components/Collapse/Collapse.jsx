import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './Collapse.module.scss';
import arrow from '../../assets/arrow_down.png';

/**
 * Component Collapse, qui permet de gérer l'ouverture et la fermeture 
 * d'un élément, avec un contenu enfant dynamique.
 * 
 * @param {{title: string, children: React.ReactNode}} props - Les props du composant Collapse.
 * @returns {JSX.Element} Un élément JSX qui représente le Collapse.
 */
const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  const styleContent = {
    maxHeight: isOpen ? '500px' : '0', 
    opacity: isOpen ? '1' : '0',
    transition: 'all 0.3s ease',
    overflow: 'hidden', 
  };

  return (
    <li className={styles.container}>
      <h3 className={styles.container__title} onClick={toggleCollapse}>
        {title}
        <img
          src={arrow}
          alt="Toggle collapse"
          className={`${styles.chevron} ${isOpen ? styles['rotate-0'] : styles['rotate-90']} ${!isOpen ? styles['rotate-180'] : ''}`} 
        />
      </h3>
      <div style={styleContent}>
        <div className={styles.container__content}>
          {children}
        </div>
      </div>
    </li>
  );
};

Collapse.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Collapse;
