import banner from "../assets/banner.png";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Gallery from '../components/Gallery/Gallery';
import React, { useEffect, useState } from 'react';
import { fetchData } from '../api/api'; 

/**
 * React component to display the home page.
 * It fetches data from the API on mount, and displays a Header, a Banner, a Gallery and a Footer.
 * The Gallery component is given the data fetched from the API.
 * @returns {React.ReactElement} - The React element for the component.
 */
const Home = () => {

const [data, setData] = useState([]);

  useEffect(() => {
    fetchData().then((data) => setData(data));
  }, []);

    return (
        <div>
            <Header />
            <Banner img={banner} text="Chez vous, partout et ailleurs" />
            <Gallery data={data} />
            <Footer />
        </div>
    );
};

export default Home;