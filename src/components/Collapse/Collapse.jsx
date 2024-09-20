import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './Collapse.module.scss';
import arrow from '../../assets/arrow_down.png'; // Chemin vers l'image du chevron

/**
 * Component Collapse, qui permet de gérer l'ouverture et la fermeture 
 * d'un élément de liste, en fonction de l'état d'un state.
 * 
 * @param {{title: string, content: string|Array<string>}} object - Un objet 
 * qui contient le titre et le contenu de l'élément de liste.
 * @returns {JSX.Element} Un élément JSX qui représente le Collapse.
 */
const Collapse = ({ object }) => {
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
        {object.title}
        <img
          src={arrow}
          alt="Toggle collapse"
          className={`${styles.chevron} ${isOpen ? styles['rotate-0'] : styles['rotate-90']} ${!isOpen ? styles['rotate-180'] : ''}`} 
        />
      </h3>
      <div style={styleContent}>
        {typeof object.content === 'string' ? (
          <p className={styles.container__content}>{object.content}</p>
        ) : (
          <ul className={styles.contentUl}>
            {object.content.map((item, index) => (
              <li className={styles.contentUl__contentLi} key={`${index}-${item}`}>
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
};

Collapse.propTypes = {
  object: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]).isRequired,
  }).isRequired,
};

export default Collapse;
