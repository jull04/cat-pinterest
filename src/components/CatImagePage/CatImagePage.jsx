import { useParams } from 'react-router-dom';
import "./CatImagePage.css";


function CatImagePage ({ catImages }) {
  // Извлекаем параметр 'id' из URL
  const { id } = useParams();

  // Находим карточку по идентификатору
  const cat = catImages.find(cat => cat.id === id);

  return (
    <section className="cat-page">
        <div className="cat-card">
          <img src={cat.url} alt="Cat" />
        </div>
        <p className="cat-info-page">Name: {cat.breeds[0].alt_names}</p>
        <p className="cat-info-page">Breed: {cat.breeds[0].name}</p>
        <p className="cat-info-page">Temperament: {cat.breeds[0].temperament}</p>
        <p className="cat-info-page">Description: {cat.breeds[0].description}</p>
        <p className="cat-info-page">Info link: <a className="cat-link" target="_blank" href={cat.breeds[0].vcahospitals_url}>{cat.breeds[0].vcahospitals_url}</a></p>
    </section>
  );
};

export default CatImagePage;