import Header from '../Header/Header';
import { Routes, Route } from "react-router-dom";
import './App.css';
import CardList from '../CardList/CardList';

import { useEffect, useState } from 'react'
import Swiperr from '../Swiper/Swiper';

function App() {

  const [catImages, setCatImages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Проверяем, есть ли уже данные в состоянии компонента
    if (catImages.length === 0) {
      fetchCatImages();
    }
  }, []);

  const fetchCatImages = async () => {
    try {
      setLoading(true);
      const savedCatImages = JSON.parse(localStorage.getItem('catImages'));
      if (savedCatImages) {
        setCatImages(savedCatImages);
      } else {
        const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=200&api_key=live_8VHZC6qqrZx16wU609ocvPSn0JZTcz3s0MQn1JK6fbeaQw7oy30jNYH6iRlFkmWD");
        const data = await response.json();
        setCatImages(data);
        localStorage.setItem('catImages', JSON.stringify(data));
      }
    } catch (error) {
      console.error('Error fetching cat images:', error);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="page">
      <Header/>
      <Routes>
        <Route path='/' element={
          <Swiperr
            catImages = {catImages}
          />
        }/>
        <Route path='/all-cats' element={
          <CardList
            catImages = {catImages}
            loading = {loading}
          />
        }/>
      </Routes>
    </div>
  );
}

export default App;
