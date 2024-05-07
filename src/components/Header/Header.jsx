import './Header.css';
import { Link } from 'react-router-dom';

function Header() {

  return (
    <header className="header">
      <div className='header__container'>
          <Link 
            to={'/'} 
            className='header__cats'>Главная страница
          </Link>
          <Link 
            to={'/all-cats'} 
            className='header__cats'>Все котики
          </Link>
        </div>  
    </header>
  );
}

export default Header;
