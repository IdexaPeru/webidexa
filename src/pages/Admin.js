import { NavLink, Outlet, } from "react-router-dom"

const Admin = () => {
  return (
    <>
      <div className="bg-color_green_1 h-full flex pt-20 items-center flex-col">
        {/* <Routes >
          <Route path='/comprador/*' element={<Comprador />} />
          <Route path='/productos' element={<p>PRODUCTOS</p>} />
          <Route path='/pedidos' element={<div>
            <p className="mb-10">PEDIDOS</p>
            <Link to='/login'>Cerrar Sesión</Link>
          </div>} />
        </Routes> */}
        <Outlet />
        <div className="absolute bottom-0 p-5 bg-color_green_9 w-full left-0 text-color_green_3 flex justify-between font-semibold font-poppins">
          <NavLink to='/comprador' className={({ isActive }) => (`transition ease-in duration-200 ${isActive ? ' text-color_green_3' : 'text-color_green_2'}`)} >
            comprador
          </NavLink>
          <NavLink to='/productos' className={({ isActive }) => (`transition ease-in duration-200 ${isActive ? ' text-color_green_3' : 'text-color_green_2'}`)} >
            productos
          </NavLink>
          <NavLink to='/pedidos' className={({ isActive }) => (`transition ease-in duration-200 ${isActive ? ' text-color_green_3' : 'text-color_green_2'}`)} >
            pedidos
          </NavLink>
        </div>
      </div>

    </>
  );
}

export default Admin;



