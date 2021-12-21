import { NavLink, Outlet, useParams } from "react-router-dom";
import { IconBox, IconCard, IconMoney } from "../../../../components/Icons";

const Credito = () => {

  const params = useParams()
  const { clienteID, creditoID } = params

  const navstiles = (isActive) => (`flex items-center gap-x-1 p-3 rounded-lg ${isActive ? 'bg-color_green_3' : ''} `);

  return (
    <div>
      <div className="flex justify-around text-color_green_7">
        <span>
          numero: 0005
        </span>
        <span>
          codigo: A235KG201
        </span>
      </div>
      <div className="pt-3">
        <p className="text-center flex  justify-center text-color_green_5">
          <span className="w-full ">Credito</span>
          <span className="text-color_green_7 font-medium w-24  ">259.00</span>
          <span className=" w-full">soles</span>
        </p>
        <span className="bg-color_green_4 my-3 block w-full border border-color_green_4" />
        <p className="text-center flex  justify-center text-color_green_5">
          <span className="w-full ">Restan</span>
          <span className="text-color_green_7 font-medium w-24  ">259.00</span>
          <span className=" w-full">soles</span>
        </p>
        <span className="bg-color_green_4 my-3 block w-full border border-color_green_4" />
        <p className="text-center flex  justify-center text-color_green_5">
          <span className="w-full ">Abonado</span>
          <span className="text-color_green_7 font-medium w-24  ">259.00</span>
          <span className=" w-full">soles</span>
        </p>
      </div>
      <div className='text-color_green_7 flex justify-center gap-x-10 my-7'>
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