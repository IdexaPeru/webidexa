import { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import { IconMenu } from './Icons';
const Header = ({ getPosition }) => {
  const [position, setPosition] = useState(0)
  window.onscroll = function () {
    var y = window.scrollY;
    setPosition(y)
  };
  useEffect(() => {
    getPosition(position)
  }, [position])


  return (
    <header className={`w-full  flex items-center justify-between px-10 text-lg transition-all  ease-in-out duration-500 ${position >= 50 ? 'fixed shadow-lg z-50 py-2 top-0' : 'relative py-4'}`}>

      <div className='flex items-center text-3xl font-poppins  gap-5'>
        <img src={logo} className='w-14' />
        <h1>
          <span className='text-purple_primary'>IDE</span>
          <span className='text-blue_primary'>XA</span>
        </h1>
      </div>
      <nav className='flex menu flex-col  sm:flex-row-reverse transition-all ease-in duration-300  items-center gap-5 relative p-2'>
        <span className=' text-purple_primary cursor-pointer '><IconMenu /></span>
        <ul className='justify-between hidden gap-5 absolute  mt-5 mr-10 sm:relative sm:flex sm:mt-0 sm:mr-0 transition ease-in duration-300'>
          <li className='text-purple_normal hover:text-purple_primary cursor-pointer transition ease-in duration-300'>
            <a
              href='#section-01'
              className='enlace'
              onClick={() => { setPosition(0) }}
            >Inicio</a></li>
          <li className='text-purple_normal hover:text-purple_primary cursor-pointer transition ease-in duration-300'>
            <a
              href='#section-02'
              className='enlace'
            >Servicios</a></li>
          <li className='text-purple_normal hover:text-purple_primary cursor-pointer transition ease-in duration-300'>
            <a
              href='#section-03'
              className='enlace'
            >Nosotros</a></li>
        </ul>

      </nav>

    </header>
  );
}

export default Header;