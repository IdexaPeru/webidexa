import { NavLink, Outlet, useLocation, } from "react-router-dom"
import { IconConfig, IconUsers } from "../components/Icons";

const Admin = () => {
  const location = useLocation()

  const { pathname } = location;

  const currentPath = pathname.split('/');
  const rutas = ['nuevo-credito', 'search'];

  var filterRutes = rutas.filter((tag) => (currentPath.includes(tag) && tag));






  return (
    <>
      <div className="bg-color_green_1 h-full flex pt-10 items-center flex-col">

        <Outlet />
        {
          filterRutes.length !== 1 &&
          <div className="w-full absolute p-2 bg-color_green_9  bottom-0  flex justify-center">
            <div className=" py-3 w-11/12 left-0 text-color_green_3 flex justify-around font-semibold font-poppins   shadow-sm">
              <NavLink to='/comprador/clientes' className={({ isActive }) => (`transition ease-in duration-200 ${isActive ? ' text-color_green_3' : 'text-color_green_2'}`)} >
                <IconUsers />
              </NavLink>
              {/* <NavLink to='/productos' className={({ isActive }) => (`transition ease-in duration-200 ${isActive ? ' text-color_green_3' : 'text-color_green_2'}`)} >
            productos
          </NavLink> */}
              <NavLink to='/config' className={({ isActive }) => (`transition ease-in duration-200 ${isActive ? ' text-color_green_3' : 'text-color_green_2'}`)} >
                <IconConfig />
              </NavLink>
            </div>
          </div>
        }

      </div>

    </>
  );
}

export default Admin;



