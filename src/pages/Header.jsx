import { Link, useLocation } from 'react-router-dom';

function Header() {
  return (
    <header className="flex justify-between items-center p-2 bg-white">
      <div className="flex items-center w-1/4">
        <Link to="/" className="flex items-center">
          <img src="/logo.svg" alt="SMK Law Logo" className="mr-6 w-20 h-20" />
          <h1 className="text-3xl font-bold">MAKS Law</h1>
        </Link>
      </div>
      <nav className="flex-grow">
        <ul className="flex justify-center space-x-6">
          <li>
            <Link to="/" className="text-xl font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-300">Головна</Link>
          </li>
          <li>
            <Link to="/position" className="text-xl font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-300">Позиція</Link>
          </li>
          <li>
            <Link to="/team" className="text-xl font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-300">Команда</Link>
          </li>
          <li>
            <Link to="/services" className="text-xl font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-300">Послуги</Link>
          </li>
          <li>
            <Link to="/contacts" className="text-xl font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-300">Контакти</Link>
          </li>
        </ul>
      </nav>
      <div className="w-1/5 text-right flex flex-col items-start bg-gray-800 text-white p-3">
        <p className="text-m mb-1 flex items-center justify-end">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          38 (050) 586 04 56
        </p>
        <p className="text-m mb-1 flex items-center justify-end">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          welcome@smk-law.com.ua
        </p>
        <p className="text-m flex items-center justify-end">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          м.Київ
        </p>
      </div>
    </header>
  );
}

export default Header;
