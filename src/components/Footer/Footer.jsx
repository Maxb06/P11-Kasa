import FooterLogo from '../../assets/FooterLogo.png';
import styles from './Footer.module.scss';

/**
 * Footer component
 * 
 * This component renders the footer of the page, 
 * with the logo and the copyright
 * 
 * @returns {JSX.Element} The footer element
 */
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <img src={FooterLogo} alt="Footer Kasa" />
      </div>
      <div>
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;