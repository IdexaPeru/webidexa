import { ReactComponent as IconFB } from '../assets/redes/fb.svg';

const Footer = () => {
  return (
    <footer className=' font-poppins bg-blue_cero border-t border-blue_light py-10 px-10 '>
      <div className='max-w-7xl px-10 mx-auto grid grid-cols-1 footer '>
        <div className='w-full px-5  '>
          <div className='px-5 pb-5 mx-auto w-48  '>
            <span className='text-purple_normal font-medium'>SOBRE IDEXAPERU</span>
            <p className='text-blue_primary leading-5 w-52'>
              Somos una empresa totalmente digital, nos dedicamos a dar solución a tus problemas informáticos
            </p>
          </div>
        </div>
        <div className='w-full px-5 '>
          <div className='px-5 pb-5 mx-auto w-48  '>
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
        </div>
        <div className='w-full px-5 ' >
          <div className='px-5 pb-5 mx-auto w-48  '>
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
        </div>
      </div>

    </footer >
  );
}

export default Footer;