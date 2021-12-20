import { NavLink, Outlet, useLocation, } from "react-router-dom"
import { IconConfig, IconUsers } from "../components/Icons";

const Admin = () => {
  const location = useLocation()

  const { pathname } = location;

  const currentPath = pathname.split('/')[2];
  console.log(currentPath);

  return (
    <>
      <div className="bg-color_green_1 h-full flex pt-10 items-center flex-col">

        <Outlet />
        {
          currentPath !== 'search' &&
          <div className="w-full fixed p-2 bottom-0  flex justify-center">
            <div className="p-5 bg-color_green_9 w-11/12 left-0 text-color_green_3 flex justify-around font-semibold font-poppins rounded-full   shadow-sm">
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



