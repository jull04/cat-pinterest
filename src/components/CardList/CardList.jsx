import './CardList.css';
import Preloader from '../Preloader/Preloader';
import { Link } from 'react-router-dom';

const CardList = ({catImages, loading}) => {

  return (
    <section>
    <div className="cat-grid">
      {loading ? <Preloader/> :
      catImages.map(cat => (
        <Link className="cat-info" to={`/cat/${cat.id}`} key={cat.id}> 
        <div className="cat-card" key={cat.id}>
          <img  src={cat.url} alt="Cat"/>
        </div>
        <p className="cat-info">Информация о котике</p>
        </Link>
      ))}
    </div>
    </section>
  );
}

export default CardList;