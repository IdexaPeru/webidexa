import { Link } from "react-router-dom";
import { IconLink } from "../../../components/Icons";

const Clientes = () => {


  const clientes = [
    { id: '1', nombre: 'Sideral carreon ' },
    { id: '2', nombre: 'Smash garcia ' },
    { id: '3', nombre: 'Simon volivar ' },
    { id: '4', nombre: 'Ase lo hace' },
    { id: '5', nombre: 'Roberto coñazos' },
    { id: '6', nombre: 'Juan alverto' },
    { id: '7', nombre: 'Juan alverto' },
    { id: '8', nombre: 'Juan alverto' },
    { id: '9', nombre: 'Juan alverto' },
    { id: '10', nombre: 'Juan alverto' },
    { id: '11', nombre: 'Juan alverto' },
    { id: '12', nombre: 'Juan alverto' },
    { id: '13', nombre: 'Juan alverto' },
    { id: '14', nombre: 'Juan alverto' },
    { id: '15', nombre: 'Juan alverto' },
    { id: '16', nombre: 'Juan alverto' },
    { id: '17', nombre: 'Juan alverto' },
  ]
  return (
    <div>
      <div className=" flex justify-between text-sm mb-3">
        <div className="w-6/12 text-color_green_8 font-semibold inline"><div className="  inline">Nombres</div></div>

        <div className="w-2/12  text-color_green_8 font-semibold inline text-center">Compra</div>

        <div className=" w-3/12 text-color_green_8 font-semibold inline text-right pr-4 "><span className="">Inversión</span> </div>

        <div className="w-1/12"></div>
      </div>
      <div id='clientesss' className="items_clientes overflow-y-auto ">
        {clientes.map(cliente => (
          <Link
            key={cliente.id}
            to={`/comprador/clientes/${cliente.id}/compras`}
            className="flex items-center justify-between   text-color_green_6 font-normal  w-full py-3 "
          >
            <span className="w-6/12 overflow-hidden">{` ${cliente.nombre}`}</span>
            <span className="w-2/12 text-center ">{` ${270}`}</span>
            <span className="w-3/12 text-right pr-4   ">{`s/ ${400}`}</span>
            <span className="w-1/12 text-left  "><IconLink /></span>

          </Link>
        ))}
      </div>

    </div>
  );
}

export default Clientes;