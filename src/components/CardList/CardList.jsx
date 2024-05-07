import './CardList.css';
import Preloader from '../Preloader/Preloader';

const CardList = ({catImages, loading}) => {

  return (
    <section>
    <div className="cat-grid">
      {loading ? <Preloader/> :
      catImages.map(cat => (
        <div className="cat-card" key={cat.id}>
          <img  src={cat.url} alt="Cat"/>
        </div>
      ))}
    </div>
    </section>
  );
}

export default CardList;