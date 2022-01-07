import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom'
import { IconBox, IconCard, IconUser } from '../../../components/Icons';

const Cliente = () => {

  const params = useParams();
  const { clienteID } = params;

  const location = useLocation()

  const { pathname } = location;

  const currentPath = pathname.split('/');




  const navstiles = (isActive) => (`flex items-center gap-x-1 p-3 rounded-lg ${isActive ? 'bg-color_green_3' : ''} `);

  return (
    <div className='w-full overflow-auto'>
      <h2 className=' text-center bg-color_green_3 text-sm text-color_green_7 tracking-widest py-4 rounded-lg'>{`SOY EL CLIENTE ${clienteID}`}</h2>
      {
        currentPath[4] === 'nuevo-credito' &&
        <p className='text-center text-color_green_5 mt-2'>NUEVO CREDITO</p>
      }
      {
        currentPath[4] !== 'nuevo-credito' &&
        <div className='text-color_green_7 flex justify-between my-5 '>
          <NavLink to={`/comprador/clientes/${clienteID}/compras`} className={({ isActive }) => (navstiles(isActive))}>
            <IconBox />
            Compras
          </NavLink>
          <NavLink to={`/comprador/clientes/${clienteID}/creditos`} className={({ isActive }) => (navstiles(isActive))}>
            <IconCard />
            Creditos
          </NavLink>
          <NavLink to={`/comprador/clientes/${clienteID}/info`} className={({ isActive }) => (navstiles(isActive))}>
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