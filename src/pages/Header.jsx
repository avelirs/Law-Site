import { Link , useLocation } from 'react-router-dom';

function Header() {


  return (
    <header className="flex justify-between items-center p-4 bg-white">
      <div className="flex items-center">
        <img src="/api/placeholder/50/50" alt="SMK Law Logo" className="mr-2" />
        <h1 className="text-xl font-bold">SMK Law</h1>
        <p className="ml-4 text-sm">Артур Сімейко адвокат</p>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li >
            <Link to="/">Головна</Link>
          </li>
          <li>
            <Link to="/position">Позиція</Link  >
          </li>
          <li>
            <Link to="/team">Команда</Link>
          </li>
          <li>
            <Link to="/services">Послуги</Link>
          </li>
       
          <li>
            <Link to="/contacts">Контакти</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
  
}

export default Header;
