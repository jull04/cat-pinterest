import "./Header.css";
import { Link, useLocation } from "react-router-dom";

function Header() {

  const { pathname } = useLocation();

  return (
    <header className="header">
      <div className='header__container'>
          <Link 
            to={"/cat-pinterest/"} 
            className={pathname === "/cat-pinterest/" ? "header__cats header__active" : "header__cats"}>
              Main page
          </Link>
          <Link 
            to={"/all-cats"} 
            className={pathname === "/all-cats" ? "header__cats header__active" : "header__cats"}>
              All cats
          </Link>
        </div>  
    </header>
  );
}

export default Header;
