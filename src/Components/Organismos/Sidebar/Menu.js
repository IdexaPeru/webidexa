import { NavLink, useLocation } from "react-router-dom";
import { IconCardBuy, IconCardBuyInactive, IconConfig, IconConfigInactivo, IconEstadistica, IconEstadisticaInactivo, IconProduct, IconProductInactivo, IconUsers, IconUsersInactive } from "../../Icons";

const Menu = () => {

  const location = useLocation()

  const { pathname } = location;

  const currentPath = pathname.split('/');

  return (
    <div className="  py-5  font-poppins font-semibold flex flex-col border-b border-color_green_4 gap-y-5">
      <NavLink to='/ventas/pedidos' className={`transition ease-in duration-300  flex items-center gap-x-2 ${currentPath[1] === 'ventas' ? ' text-color_green_7' : 'text-color_gray_1'}`} >
        <IconCardBuyInactive />
        <span>Ventas</span>
      </NavLink>



      <NavLink to='/productos' className={({ isActive }) => (`transition ease-in duration-300  flex items-center gap-x-2 ${isActive ? ' text-color_green_7' : 'text-color_gray_1'}`)} >
        <IconProductInactivo />
        <span>Productos</span>
      </NavLink>

      <NavLink
        to='/comprador/clientes' className={`transition ease-in duration-300 flex items-center gap-x-2 ${currentPath[1] === 'comprador' ? ' text-color_green_7' : 'text-color_gray_1'}`}
      >
        <IconUsersInactive />
        <span>Usuarios</span>

      </NavLink>

      <NavLink to='/configuracion' className={`transition ease-in duration-300  flex items-center gap-x-2 ${currentPath[1] === 'configuracion' ? ' text-color_green_7' : 'text-color_gray_1'}`} >
        <IconConfigInactivo />
        <span>Trabajadores</span>
      </NavLink>
    </div>
  );
}

export default Menu;