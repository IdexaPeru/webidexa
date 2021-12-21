import { NavLink, Outlet, useParams } from "react-router-dom";
import { IconBox, IconCard, IconMoney } from "../../../../components/Icons";

const Credito = () => {

  const params = useParams()
  const { clienteID, creditoID } = params

  const navstiles = (isActive) => (`flex items-center gap-x-1 p-3 rounded-lg ${isActive ? 'bg-color_green_2 text-color_green_7' : 'text-color_green_5'} `);

  return (
    <div>
      <div className="bg-color_green_4  block w-full border border-color_green_4" />
      <div className=' flex justify-between my-7'>
        <NavLink to={`/comprador/clientes/${clienteID}/creditos/${creditoID}/detalles`} className={({ isActive }) => (navstiles(isActive))}>
          <IconBox />
          Detalles
        </NavLink>
        <NavLink to={`/comprador/clientes/${clienteID}/creditos/${creditoID}/abonos`} className={({ isActive }) => (navstiles(isActive))}>
          <IconBox />
          Abonos
        </NavLink>
        <NavLink to={`/comprador/clientes/${clienteID}/creditos/${creditoID}/fotos`} className={({ isActive }) => (navstiles(isActive))}>
          <IconCard />
          Fotos
        </NavLink>
      </div>
      <div className="">
        <Outlet />
      </div>
      <div>
        <NavLink to={`/comprador/clientes/${clienteID}/creditos/${creditoID}/nuevo-abono`} className=" fixed bottom-24 right-10 bg-color_green_9 p-3 shadow-lg rounded-full text-color_green_3">
          <IconMoney />
        </NavLink>
      </div>
    </div>
  );
}

export default Credito;