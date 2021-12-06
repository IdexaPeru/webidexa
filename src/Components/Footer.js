import { ReactComponent as IconFB } from '../assets/redes/fb.svg';

const Footer = () => {
  return (
    <footer className='flex justify-between mt-10 font-poppins bg-blue_cero border-t border-blue_light py-10 px-10'>
      <div className='w-56 flex flex-col gap-3'>
        <span className='text-purple_normal font-medium'>SOBRE IDEXAPERU</span>
        <p className='text-blue_primary leading-5'>
          Somos una empresa totalmente digital, nos dedicamos a dar solución a tus problemas informáticos
        </p>
      </div>
      <div >
        <span className='text-purple_normal font-medium'>REDES SOCIALES</span>
        <ul className='flex flex-col gap-3 pt-4'>
          <li className='flex items-center gap-2 text-blue_primary'>
            <span ><IconFB /></span>
            <a href='facebook.com'>facebook</a>
          </li>
          <li className='flex items-center gap-2 text-blue_primary'>
            <span ><IconFB /></span>
            <a href='facebook.com'>instagram</a>
          </li>
          <li className='flex items-center gap-2 text-blue_primary'>
            <span ><IconFB /></span>
            <a href='facebook.com'>youtube</a>
          </li>
        </ul>
      </div>
      <div >
        <span className='text-purple_normal font-medium'>REDES SOCIALES</span>
        <ul className='flex flex-col gap-3 pt-4'>
          <li className='flex items-center gap-2 text-blue_primary'>
            <span ><IconFB /></span>
            <a href='facebook.com'>facebook</a>
          </li>
          <li className='flex items-center gap-2 text-blue_primary'>
            <span ><IconFB /></span>
            <a href='facebook.com'>instagram</a>
          </li>
          <li className='flex items-center gap-2 text-blue_primary'>
            <span ><IconFB /></span>
            <a href='facebook.com'>youtube</a>
          </li>
        </ul>
      </div>
    </footer >
  );
}

export default Footer;