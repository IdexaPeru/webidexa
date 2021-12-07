import logo from '../assets/logo.png';
import { IconMenu } from './Icons';
const Header = () => {
  return (
    <header className='w-full py-5 flex items-center justify-between px-10 text-lg'>
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
          <li className='text-purple_normal hover:text-purple_primary cursor-pointer transition ease-in duration-300'><a>Inicio</a></li>
          <li className='text-purple_normal hover:text-purple_primary cursor-pointer transition ease-in duration-300'><a>Servicios</a></li>
          <li className='text-purple_normal hover:text-purple_primary cursor-pointer transition ease-in duration-300'><a>Nosotros</a></li>
        </ul>

      </nav>

    </header>
  );
}

export default Header;