import { NavLink, Outlet, } from "react-router-dom";
import { IconSearch } from "../../components/Icons";

const Comprador = () => {
  return (

    <div className="max-w-6xl ">
      <Outlet />
      <div className="w-full  absolute top-5 left-0 flex justify-around text-lg font-medium font-poppins ">
        <span />
        <div className="flex items-center">
          <NavLink to='/admin/comprador/clientes' className={({ isActive }) => (`transition ease-in duration-200 ${isActive ? ' text-color_green_7' : 'text-color_green_4'}`)} >
            clientes
          </NavLink>
          <span className="mx-2 block w-1 h-4 bg-color_green_4" />
          <NavLink to='/admin/comprador/usuarios' className={({ isActive }) => (`transition ease-in duration-200 ${isActive ? ' text-color_green_7' : 'text-color_green_4'}`)} >
            usuarios
          </NavLink>
        </div>
        <span className="text-color_green_4"><IconSearch /></span>
      </div>
    </div>

  );
}

export default Comprador;


