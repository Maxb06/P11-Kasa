import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import styles from "./Banner.module.scss";

/**
 * React component to display a banner with an image and a dynamic background.
 * The banner displays an image and optional text. The background opacity
 * changes based on the current page.
 * 
 * @param {{img: string, text: string}} props - The props for the component.
 * @returns {React.ReactElement} - The React element for the component.
 */
const Banner = ({ img, text }) => {
  const location = useLocation();

  const backgroundStyle = {
    background: location.pathname === '/' ? 'rgba(0, 0, 0, 0.6)' : 'rgba(0, 0, 0, 0.3)',
  };

  return ( 
      <div className={styles.banner} style={backgroundStyle}>
        <img className={styles.img} src={img} alt="Bannière du site" />
        {text && <h1 className={styles.text}>{text}</h1>}
      </div>
  );
};

Banner.propTypes = {
  img: PropTypes.string.isRequired,
  text: PropTypes.string,
};

export default Banner;
