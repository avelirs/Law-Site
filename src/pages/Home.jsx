import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Home() {
  return (
    <div className='relative h-[70vh] bg-gray-100'>
      <img
        src='./main.jpg'
        alt='City Skyline'
        className='w-full h-full object-cover'
      />
      <div className='absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white text-center p-4'>
        <h2 className='font-roboto text-4xl mb-4 leading-relaxed text-white text-shadow shadow-black'>
          Наші досвід, практика, знання, відповідальність та злагодженість -
          дозволяють нам здійснювати ефективний захист Ваших прав та
          охоронюваних законом інтересів.
        </h2>
        <Link
          to='/contact'
          className='bg-blue-900 bg-opacity-80 text-white border border-blue-300 rounded-lg shadow-lg hover:bg-blue-800 hover:bg-opacity-90 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 px-6 py-3 text-lg font-semibold transition-all duration-300'
        >
          ЗВ'ЯЗАТИСЬ
        </Link>
      </div>
    </div>
  );
}

export default Home;
