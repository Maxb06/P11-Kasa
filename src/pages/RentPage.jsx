import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchData } from '../api/api';
import CardPage from '../components/CardPage/CardPage';

const Rent = () => {
  const { id } = useParams(); 
  const [house, setHouse] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHouseData = async () => {
      const data = await fetchData();
      const selectedHouse = data.find((house) => house.id === id);

      if (!selectedHouse) {
        // Redirection vers la page erreur si l'id est incorrect
        navigate('/404'); 
      } else {
        setHouse(selectedHouse);
      }
    };

    fetchHouseData();
  }, [id, navigate]);

  // Affiche un chargement pendant la récup des données
  if (!house) {
    return <div>Chargement...</div>;
  }

  return <CardPage house={house} />;
};

export default Rent;
