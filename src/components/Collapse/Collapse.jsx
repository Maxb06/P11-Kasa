import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './Collapse.module.scss';
import arrow from '../../assets/arrow_down.png';

/**
 * Component Collapse, to manage the opening and closing 
 * of an element, with dynamic child content.
 * 
 * @param {{title: string, children: React.ReactNode}} props - Collapse component props.
 * @returns {JSX.Element} A JSX element representing Collapse.
 */
const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  /**
   * Toggle the isOpen state to open or close the Collapse component.
   */ 
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
