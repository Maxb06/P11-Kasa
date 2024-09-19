import PropTypes from 'prop-types';
import styles from "./Banner.module.scss";

/**
 * React component to display a banner with an image and a text.
 * The banner is a div with a class of "banner" containing an img and a h1.
 * The img is given the class "img" and the src and alt attributes are set to the given img.
 * The h1 is given the class "text" and its content is set to the given text.
 * @param {{img: string, text: string}} props - The props for the component.
 * @returns {React.ReactElement} - The React element for the component.
 */
const Banner = ({img, text}) => {
  return ( 
      <div className={styles.banner}>
        <img className={styles.img} src={img} alt="Bannière du site" />
        <h1 className={styles.text}>{text}</h1>
      </div>
  );
};

Banner.propTypes = {
  img: PropTypes.string.isRequired,
  text: PropTypes.string,
}

export default Banner;