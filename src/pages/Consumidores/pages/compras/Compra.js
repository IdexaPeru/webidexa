import { NavLink, Outlet, useParams } from "react-router-dom";
import { IconBox, IconCard, IconUser } from "../../../../components/Icons";

const Compra = () => {

  const params = useParams()
  const { clienteID, compraID } = params

  const navstiles = (isActive) => (`flex items-center gap-x-1 p-3 rounded-lg ${isActive ? 'bg-color_green_3' : ''} `);

  return (
    <div className="flex gap-y-8 flex-col">
      <p className="text-center text-color_green_6 ">Lunes 18 de noviembre 2021</p>
      <p className="tracking-widest text-center  "><span className="bg-color_green_2 border border-color_green_7 py-4 px-8 text-color_green_7 font-bold font-poppins text-lg rounded-lg"># HTAAW250</span></p>
      <p className="text-center text-2xl text-color_green_6">S/. 159.00</p>
      <p className="text-center text-color_green_7 font-poppins text-lg font-semibold">cancelado</p>

      <div className='text-color_green_7 flex justify-center gap-x-10 '>
        <NavLink to={`/comprador/clientes/${clienteID}/compras/${compraID}/abonos`} className={({ isActive }) => (navstiles(isActive))}>
          <IconBox />
          Abonos
        </NavLink>
        <NavLink to={`/comprador/clientes/${clienteID}/compras/${compraID}/fotos`} className={({ isActive }) => (navstiles(isActive))}>
          <IconCard />
          Fotos
        </NavLink>
      </div>
      <div>
        <Outlet />
      </div>
    </div >
  );
}

export default Compra;