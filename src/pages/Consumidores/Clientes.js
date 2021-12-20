import { Link } from "react-router-dom";


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
        <div className=" text-color_green_8 font-medium inline  w-44"><div className="bg-color_green_3  inline">Nombres</div></div>
        <div className="w-16 bg-color_green_3 text-color_green_8 font-medium inline text-center">Compras</div>
        <div className=" w-20 bg-color_green_3 text-color_green_8 font-medium inline text-center ml-3">Inversión</div>
      </div>
      {clientes.map(cliente => (
        <Link
          key={cliente.id}
          to={`/admin/comprador/clientes/${cliente.id}`}
          className="flex items-center justify-between   text-color_green_6 font-normal text-lg  w-full py-3 "
        >
          <span className="w-40 overflow-hidden">{` ${cliente.nombre}`}</span>
          <span className="w-16 text-center ">{` ${270}`}</span>
          <span className="w-20 text-center ">{`s/ ${4000}`}</span>
        </Link>
      ))}

    </div>
  );
}

export default Clientes;