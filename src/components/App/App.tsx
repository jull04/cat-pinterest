import Header from "../Header/Header";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import CardList from "../CardList/CardList";

import { useEffect } from "react";
import Swiperr from "../Swiper/Swiper";
import CatImagePage from "../CatImagePage/CatImagePage";
import { useFetchCatImagesQuery } from "../../utils/api";
import { CatImage } from "../../utils/types";

function App() {

  const { data: catImages = [], error, isLoading } = useFetchCatImagesQuery(undefined);

  useEffect(() => {
    if (!isLoading && !error && (catImages as CatImage[]).length > 0) {
      // Проверяем, есть ли уже данные в локальном хранилище
      const storedCatImages = JSON.parse(localStorage.getItem('catImages') || 'null');
      if (!storedCatImages) {
        // Если данных в локальном хранилище нет, сохраняем полученные данные
        localStorage.setItem('catImages', JSON.stringify(catImages));
      }
    }
  }, [isLoading, error, catImages]);

  const filteredCats: CatImage[] = (catImages as CatImage[]).filter(
    (cat: CatImage) => cat.breeds && cat.breeds.length > 0 
  );

  return (
    <div className="page">
      <Header />
      <Routes>
        <Route
          path="/cat-pinterest/"
          element={<Swiperr filteredCats={filteredCats} isLoading={isLoading} />}
        />
        <Route
          path="/all-cats"
          element={<CardList filteredCats={filteredCats} isLoading={isLoading} />}
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
