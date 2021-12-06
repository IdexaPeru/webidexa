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
      <nav className='flex items-center gap-5'>
        <ul className='flex justify-between gap-5'>
          <li className='text-purple_normal hover:text-purple_primary cursor-pointer transition ease-in duration-300'><a>Inicio</a></li>
          <li className='text-purple_normal hover:text-purple_primary cursor-pointer transition ease-in duration-300'><a>Servicios</a></li>
          <li className='text-purple_normal hover:text-purple_primary cursor-pointer transition ease-in duration-300'><a>Nosotros</a></li>
        </ul>
        <span className='text-purple_primary cursor-pointer' ><IconMenu /></span>
      </nav>

    </header>
  );
}

export default Header;