import { NavLink, Outlet, useLocation, } from "react-router-dom"
import { IconCardBuy, IconConfig, IconEstadistica, IconProduct, IconUsers, IconUsersInactive, IconCardBuyInactive, IconEstadisticaInactivo, IconProductInactivo, IconConfigInactivo } from "../components/Icons";

const Admin = () => {
  const location = useLocation()

  const { pathname } = location;

  const currentPath = pathname.split('/');
  console.log(currentPath);
  const rutas = ['nuevo-credito', 'search', 'nuevo-abono'];

  var filterRutes = rutas.filter((tag) => (currentPath.includes(tag) && tag));


  return (
    <>
      <div className="bg-color_green_1 h-full flex  items-center flex-col relative  ">
        {
          filterRutes.length !== 1 &&
          <div className="w-full absolute p-2 bg-color_green_1  bottom-0  flex justify-center">
            <div className=" py-3 w-11/12 left-0 text-color_green_3 flex justify-around font-semibold font-poppins   ">
              <NavLink
                to='/comprador/clientes' className={`transition ease-in duration-300 ${currentPath[1] === 'comprador' ? ' text-color_green_9' : 'text-color_green_5'}`}

              >
                {currentPath[1] === 'comprador' ? <IconUsers /> : <IconUsersInactive />
                }

              </NavLink>
              <NavLink to='/ventas/pedidos' className={`transition ease-in duration-300 ${currentPath[1] === 'ventas' ? ' text-color_green_9' : 'text-color_green_5'}`} >
                {currentPath[1] === 'ventas' ? <IconCardBuy /> : <IconCardBuyInactive />}

              </NavLink>
              <NavLink to='/reportes' className={`transition ease-in duration-300 ${currentPath[1] === 'reportes' ? ' text-color_green_9' : 'text-color_green_5'}`} >

                {
                  currentPath[1] === 'reportes' ? <IconEstadistica /> : <IconEstadisticaInactivo />}
              </NavLink>
              <NavLink to='/productos' className={({ isActive }) => (`transition ease-in duration-300 ${isActive ? ' text-color_green_9' : 'text-color_green_5'}`)} >
                {({ isActive }) => (
                  isActive ? <IconProduct /> : <IconProductInactivo />
                )}
              </NavLink>
              <NavLink to='/configuracion' className={`transition ease-in duration-300 ${currentPath[1] === 'configuracion' ? ' text-color_green_9' : 'text-color_green_5'}`} >
                {currentPath[1] === 'configuracion' ? <IconConfig /> : <IconConfigInactivo />
                }
              </NavLink>
            </div>
          </div>
        }

        <Outlet />


      </div>

    </>
  );
}

export default Admin;



