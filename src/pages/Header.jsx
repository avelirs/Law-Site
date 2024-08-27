import { Link , useLocation } from 'react-router-dom';

function Header() {


  return (
    <header className="flex justify-between items-center p-4 bg-white">
      <div className="flex items-center">
        <img src="/api/placeholder/50/50" alt="SMK Law Logo" className="mr-2" />
        <h1 className="text-xl font-bold">SMK Law</h1>
        <p className="ml-4 text-sm">Максим Сибилев адвокат</p>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-lg font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-300">Головна</Link>
          </li>
          <li>
            <Link to="/position" className="text-lg font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-300">Позиція</Link>
          </li>
          <li>
            <Link to="/team" className="text-lg font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-300">Команда</Link>
          </li>
          <li>
            <Link to="/services" className="text-lg font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-300">Послуги</Link>
          </li>
          <li>
            <Link to="/contacts" className="text-lg font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-300">Контакти</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
  
}

export default Header;
