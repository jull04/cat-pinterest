import './Header.css';
import { Link, useLocation } from 'react-router-dom';

function Header() {

  const { pathname } = useLocation();

  return (
    <header className="header">
      <div className='header__container'>
          <Link 
            to={'/'} 
            className={pathname === '/' ? 'header__cats header__active' : 'header__cats'}>Главная страница
          </Link>
          <Link 
            to={'/all-cats'} 
            className={pathname === '/all-cats' ? 'header__cats header__active' : 'header__cats'}>Все котики
          </Link>
        </div>  
    </header>
  );
}

export default Header;
