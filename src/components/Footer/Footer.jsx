import FooterLogo from '../../assets/FooterLogo.png';
const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundColor: 'black', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }} >
      <div className="logo">
        <img src={FooterLogo} alt="Footer Kasa" />
      </div>
      <div>
        <p style={{ color: 'white' }}>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;