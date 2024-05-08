import { useParams } from 'react-router-dom';
import "./CatImagePage.css";


function CatImagePage ({ catImages }) {
  // Извлекаем параметр 'id' из URL
  const { id } = useParams();

  // Находим карточку по идентификатору
  const cat = catImages.find(cat => cat.id === id);

  return (
    <section className="cat-page">
      <h2>Cat Image</h2>
        <div className="cat-card">
          <img src={cat.url} alt="Cat" />
        </div>
       <p className="cat-info">Полная информация о котике</p>
      
    </section>
  );
};

export default CatImagePage;