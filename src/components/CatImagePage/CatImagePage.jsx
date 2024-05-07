import { useParams } from 'react-router-dom';

function CatImagePage ({ catImages }) {
  // Извлекаем параметр 'id' из URL
  const { id } = useParams();

  // Находим карточку по идентификатору
  const cat = catImages.find(cat => cat.id === id);

  return (
    <div>
      <h2>Cat Image</h2>
      {cat ? (
        <div className="cat-card">
          <img src={cat.url} alt="Cat" />
        </div>
      ) : (
        <p>Карточка не найдена</p>
      )}
    </div>
  );
};

export default CatImagePage;