import { Link, NavLink, Outlet, useLocation, } from "react-router-dom";
import { IconSearch } from "../../components/Icons";
import './comprador.css'

const Comprador = () => {

  // get ruta
  const location = useLocation()

  const { pathname } = location;

  const currentPath = pathname.split('/')[2];

  return (

    <div className="max-w-6xl w-full mt-10">
      <div className="w-full px-7">
        <Outlet />
      </div>

      <div className="absolute top-5 left-0 flex justify-between w-11/12 text-lg font-medium font-poppins ">
        <span className="block w-10" />
        <div className="flex items-center">
          <NavLink to='/comprador/clientes' className={({ isActive }) => (`transition ease-in duration-200 ${isActive ? ' text-color_green_7' : 'text-color_green_4'}`)} >
            clientes
          </NavLink>
          <span className="mx-2 block w-1 h-4 bg-color_green_4" />
          <NavLink to='/comprador/usuarios' className={({ isActive }) => (`transition ease-in duration-200 ${isActive ? ' text-color_green_7' : 'text-color_green_4'}`)} >
            usuarios
          </NavLink>
        </div>
        <Link to={`/comprador/search/${currentPath}`} className="text-color_green_4"><IconSearch /></Link>
      </div>
    </div>

  );
}

export default Comprador;


