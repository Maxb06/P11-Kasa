import React, { useEffect, useState } from 'react';
import { fetchData } from '../../api/api';
import Card from '../Card/Card';
import styles from './Gallery.module.scss';

const Gallery = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData().then((data) => setData(data));
  }, []);

  return (
    <section className={styles.gallery}>
      {data.map((logement) => (
        <Card key={logement.id} title={logement.title} cover={logement.cover} />
      ))}
    </section>
  );
};

export default Gallery;
