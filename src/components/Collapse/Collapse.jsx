import { useState } from 'react';
import styles from './Collapse.module.scss';
import arrowUp from '../../assets/arrow_up.png';
import arrowDown from '../../assets/arrow_down.png';

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
          src={isOpen ? arrowUp : arrowDown}
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