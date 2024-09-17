import { useState } from 'react';
import styles from './Collapse.module.scss';
import arrowUp from '../../assets/arrow_up.png';
import arrowDown from '../../assets/arrow_down.png';

const Collapse = ({ object }) => {
  // Utilisation du state pour gérer l'état d'ouverture du collapse
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour basculer l'état du collapse
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  // Gestion du style de contenu en fonction de l'état
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
          src={isOpen ? arrowUp : arrowDown} // Chevrons dynamiques
          alt="Toggle collapse"
          className={styles.chevron}
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

export default Collapse;