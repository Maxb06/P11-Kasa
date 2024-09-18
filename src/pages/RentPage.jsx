import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchData } from '../api/api';
import CardPage from '../components/CardPage/CardPage';

/**
 * This component renders a rent page, given an ID from the URL.
 * It fetches the data from the API, and displays a loading message if the data is not available.
 * If the data is available, it renders the corresponding CardPage component.
 *
 * @returns {JSX.Element} - A JSX element representing the Rent page.
 */
const Rent = () => {
  const { id } = useParams(); 
  const [house, setHouse] = useState(null);

  useEffect(() => {
    /**
     * Fetches the data from the API, and sets the state with the selected house
     * given the id from the URL.
     * @returns {Promise<void>}
     */
    const fetchHouseData = async () => {
      const data = await fetchData();
      const selectedHouse = data.find((house) => house.id === id);
      setHouse(selectedHouse);
    };

    fetchHouseData();
  }, [id]);

  if (!house) {
    // test - affichage de 'chargement...' ou d'1 message d'erreur
    return <div>Chargement...</div>;
  }

  return <CardPage house={house} />;
};

export default Rent;
