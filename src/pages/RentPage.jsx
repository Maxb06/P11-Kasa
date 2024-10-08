import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchData } from '../api/api';
import Carrousel from '../components/Carrousel/Carrousel';
import Collapse from '../components/Collapse/Collapse';
import Owner from '../components/Owner/Owner';
import HouseTitle from '../components/HouseTitle/HouseTitle';
import styles from './styles/RentPage.module.scss'; 

/**
 * The housing page.
 * @return {JSX.Element} A JSX element that represents a house page.
 */
const Rent = () => {
  const { id } = useParams();
  const [house, setHouse] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHouseData = async () => {
      const data = await fetchData();
      const selectedHouse = data.find((house) => house.id === id);

      if (!selectedHouse) {
        // étape 9 Redirection vers la page d'erreur si l'ID est incorrect
        navigate('/404'); 
      } else {
        setHouse(selectedHouse);
      }
    };

    fetchHouseData();
  }, [id, navigate]);

  if (!house) {
    return <div className={styles.loading}>Chargement...</div>;
  }

  const { description, equipments, host, location, pictures, rating, tags, title } = house;

  return (
    <main className={styles.main}> 
      <Carrousel pictures={pictures} title={title} />
      <section className={styles.containerInfo}> 
        <HouseTitle title={title} location={location} tags={tags} />
        <Owner host={host} rating={rating} />
      </section>
      <ul className={styles.main__dropdown}>
        <Collapse title="Description">
          <p>{description}</p>
        </Collapse>
        <Collapse title="Équipements">
          <ul className={styles.list}>
            {equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </ul>
    </main>
  );
};

export default Rent;
