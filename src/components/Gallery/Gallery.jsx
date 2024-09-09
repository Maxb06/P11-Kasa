import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import styles from './Gallery.module.scss';

const Gallery = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Erreur lors du chargement des données', error));
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
