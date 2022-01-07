import Logo from '../../assets/img/logo.png';
import { IconNotificacion, IconSearch } from '../Icons';
import { PERFIL } from '../Images';


const Navbar = () => {
  return (
    <div className=" font-poppins  justify-between border-b items-center pb-2 hidden sm:flex">
      <div className='flex items-center gap-x-3'>
        <div><img src={Logo} className='w-14 h-14' /></div>
        <h1 className='text-lg font-extrabold tracking-tight text-color_green_7 hidden  md:flex'> CARLOS</h1>
      </div>
      <div className='relative flex items-center'>
        <span className='absolute left-4 text-color_green_7 '><IconSearch /></span>
        <input
          className=' px-12 py-2 rounded-full bg-color_green_2  placeholder-color_green_7 outline-none text-color_green_7 '
          placeholder='Buscar Caseros'
        />
      </div>
      <div className='flex items-center text-color_gray_1 gap-x-3'>
        <IconNotificacion />
        <img src={PERFIL} className='w-10 h-10 object-cover rounded-full' />
      </div>
    </div>
  );
}

export default Navbar;