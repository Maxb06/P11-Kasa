import banner from '../../assets/banner.png';
const Banner = () => {
  return ( 
      <div className="logo">
        <img src={banner} alt="Bannière du site" />
        <p>Chez vous, partout et ailleurs</p>
      </div>
  );
};

export default Banner;