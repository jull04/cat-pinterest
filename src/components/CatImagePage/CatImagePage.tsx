import { useParams } from "react-router-dom";
import "./CatImagePage.css";
import { CatImage } from "../../utils/types";

type CatImagePageProps = {
  catImages: CatImage[];
};

function CatImagePage({ catImages }: CatImagePageProps) {
  // Извлекаем параметр 'id' из URL
  const { id } = useParams<{ id: string }>();

  const goBack = () => {
    window.history.back();
  };

  // Находим карточку по идентификатору
  const cat = catImages.find((cat) => cat.id === id);

  if (!cat) {
    return <div>Cat not found</div>;
  }

  return (
    <section className="cat-page">
      <div className="cat-card">
        <img src={cat.url} alt="Cat" />
      </div>
      <p className="cat-info-page">Breed: {cat.breeds[0].name}</p>
      <p className="cat-info-page">Temperament: {cat.breeds[0].temperament}</p>
      <p className="cat-info-page">Description: {cat.breeds[0].description}</p>
      {cat.breeds[0].vcahospitals_url && (
        <p className="cat-info-page">
          Info link:{" "}
          <a
            className="cat-link"
            target="_blank"
            rel="noreferrer"
            href={cat.breeds[0].vcahospitals_url}
          >
            {cat.breeds[0].vcahospitals_url}
          </a>
        </p>
      )}
      <button className="button" onClick={goBack}>
        Go back
      </button>
    </section>
  );
}

export default CatImagePage;
