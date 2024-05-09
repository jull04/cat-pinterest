import Header from "../Header/Header";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import CardList from "../CardList/CardList";

import { useEffect } from "react";
import Swiperr from "../Swiper/Swiper";
import CatImagePage from "../CatImagePage/CatImagePage";
import { useFetchCatImagesQuery } from "../../utils/api";

function App() {

  const { data: catImages = [], error, isLoading } = useFetchCatImagesQuery();

  useEffect(() => {
    if (!isLoading && !error && catImages.length > 0) {
      // Проверяем, есть ли уже данные в локальном хранилище
      const storedCatImages = JSON.parse(localStorage.getItem('catImages'));
      if (!storedCatImages) {
        // Если данных в локальном хранилище нет, сохраняем полученные данные
        localStorage.setItem('catImages', JSON.stringify(catImages));
      }
    }
  }, [isLoading, error, catImages]);


  return (
    <div className="page">
      <Header />
      <Routes>
        <Route
          path="/guild-test/"
          element={<Swiperr catImages={catImages} isLoading={isLoading} />}
        />
        "
        <Route
          path="/all-cats"
          element={<CardList catImages={catImages} isLoading={isLoading} />}
        />
        <Route
          path="/cat/:id"
          element={<CatImagePage catImages={catImages} />}
        />
      </Routes>
    </div>
  );
}

export default App;
