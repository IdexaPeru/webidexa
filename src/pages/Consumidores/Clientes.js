import { Link } from "react-router-dom";
import { IconLink } from "../../components/Icons";


const Clientes = () => {
  const clientes = [
    { id: '1', nombre: 'Sideral carreon ' },
    { id: '2', nombre: 'Smash garcia ' },
    { id: '3', nombre: 'Simon volivar ' },
    { id: '4', nombre: 'Ase lo hace' },
    { id: '5', nombre: 'Roberto coñazos' },
    { id: '6', nombre: 'Juan alverto' },
  ]
  return (
    <div>
      <div className="font-poppins flex justify-between text-sm mb-3">
        <div className="w-6/12 text-color_green_8 font-medium inline "><div className="bg-color_green_3  inline">Nombres</div></div>

        <div className="w-2/12 bg-color_green_3 text-color_green_8 font-medium inline text-center">Compra</div>

        <div className=" w-3/12   text-color_green_8 font-medium inline text-center ml-3"><span className="bg-color_green_3">Inversión</span> </div>

        <div className="w-1/12"></div>
      </div>
      {clientes.map(cliente => (
        <Link
          key={cliente.id}
          to={`/comprador/clientes/${cliente.id}/compras`}
          className="flex items-center justify-between   text-color_green_6 font-normal  w-full py-3 "
        >
          <span className="w-6/12 overflow-hidden">{` ${cliente.nombre}`}</span>
          <span className="w-2/12 text-center ">{` ${270}`}</span>
          <span className="w-3/12 text-center ">{`s/ ${400}`}</span>
          <span className="w-1/12 text-center "><IconLink /></span>

        </Link>
      ))}
    </div>
  );
}

export default Clientes;