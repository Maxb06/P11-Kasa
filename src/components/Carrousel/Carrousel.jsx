import { useState } from 'react';
import styles from './Carrousel.module.scss';
import previous from '../../assets/previous.png';
import next from '../../assets/next.png';

/**
 * A carousel component that renders a set of images, with navigation
 * buttons to go to the previous or next image. The component will wrap
 * around to the beginning of the array when the user reaches the end.
 *
 * @param {{pictures: string[], title: string}} props - The props for the component
 * @returns {JSX.Element} - The React element for the component
 */
const Carrousel = ({ pictures, title }) => {
  const [indexImage, setIndexImage] = useState(0);

  /**
   * Increase the index of the current image, and update the state by
   * setting the new index modulo the length of the pictures array.
   * This way, when the user reaches the end of the array, the index
   * will wrap around to the beginning of the array.
   */
  const increaseIndex = () => {
    setIndexImage((index) => (index + 1) % pictures.length);
  };

  const decreaseIndex = () => {
    setIndexImage((index) => (index - 1 + pictures.length) % pictures.length);
  };

  return (
    <div className={styles.containerImg}>
      <img src={pictures[indexImage]} alt={title} className={styles.containerImg__img} />
      {pictures.length > 1 && (
        <>
        <span className={styles.containerImg__span}>{indexImage + 1}/{pictures.length}</span>
          <button onClick={decreaseIndex} className={styles.previousButton}>
            <img src={previous} alt="Previous" />
          </button>
          <button onClick={increaseIndex} className={styles.nextButton}>
            <img src={next} alt="Next" />
          </button>
        </>
      )}
    </div>
  );
};

export default Carrousel;
