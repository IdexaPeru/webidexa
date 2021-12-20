import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom'
import { IconBox, IconCard, IconUser } from '../../../components/Icons';

const Cliente = () => {

  const params = useParams();
  const { id } = params;

  const location = useLocation()

  const { pathname } = location;

  const currentPath = pathname.split('/');
  console.log(currentPath[4]);



  const navstiles = (isActive) => (`flex items-center gap-x-1 ${isActive ? 'bg-color_green_3' : ''} `);

  return (
    <div className='w-full '>
      <h2 className=' text-center bg-color_green_3 text-sm text-color_green_7 tracking-widest'>{
        currentPath[4] === 'nuevo-credito' ?
          'NUEVO CREDITO'
          : `SOY EL CLIENTE ${id}`
      }</h2>
      {
        currentPath[4] === 'nuevo-credito' &&
        <p className='text-center text-color_green_5 mt-2'>JUAN VASTIDAS</p>
      }
      {
        currentPath[4] !== 'nuevo-credito' &&
        <div className='text-color_green_7 flex justify-between my-5'>
          <NavLink to={`/comprador/clientes/${id}/compras`} className={({ isActive }) => (navstiles(isActive))}>
            <IconBox />
            Compras
          </NavLink>
          <NavLink to={`/comprador/clientes/${id}/creditos`} className={({ isActive }) => (navstiles(isActive))}>
            <IconCard />
            Creditos
          </NavLink>
          <NavLink to={`/comprador/clientes/${id}/info`} className={({ isActive }) => (navstiles(isActive))}>
            <IconUser />
            Datos
          </NavLink>
        </div>
      }

      <Outlet />
    </div>
  );
}

export default Cliente;