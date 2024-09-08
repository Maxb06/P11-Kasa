import styles from "./Banner.module.scss";
const Banner = ({img, text}) => {
  return ( 
      <div className={styles.banner}>
        <img src={img} alt="Bannière du site" />
        <p>{text}</p>
      </div>
  );
};

export default Banner;