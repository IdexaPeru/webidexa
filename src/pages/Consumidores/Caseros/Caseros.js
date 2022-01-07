import { Link } from "react-router-dom";
import { IconLink } from "../../../components/Icons";

const Clientes = () => {


  const clientes = [
    { compra: 100, inversion: 5200, deuda: 200, id: '1', nombre: 'Sideral Carreon Sanches Sandoval ' },
    { compra: 100, inversion: 5200, deuda: 200, id: '2', nombre: 'Smash garcia Sanches Sandoval' },
    { compra: 100, inversion: 5200, deuda: 200, id: '3', nombre: 'Simon volivar Sanches Sandoval' },
    { compra: 100, inversion: 5200, deuda: 200, id: '4', nombre: 'Ase lo hace Sanches Sandoval' },
    { compra: 100, inversion: 5200, deuda: 200, id: '5', nombre: 'Roberto coñazos Sanches Sandoval' },
    { compra: 100, inversion: 5200, deuda: 200, id: '6', nombre: 'Juan alverto Sanches Sandoval' },
    { compra: 100, inversion: 5200, deuda: 200, id: '7', nombre: 'Juan alverto Sanches Sandoval' },
    { compra: 100, inversion: 5200, deuda: 200, id: '8', nombre: 'Juan alverto Sanches Sandoval' },
    { compra: 100, inversion: 5200, deuda: 200, id: '9', nombre: 'Juan alverto Sanches Sandoval' },
    { compra: 100, inversion: 5200, deuda: 200, id: '10', nombre: 'Juan alverto Sanches Sandoval' },
    { compra: 100, inversion: 5200, deuda: 200, id: '11', nombre: 'Juan alverto Sanches Sandoval' },
    { compra: 100, inversion: 5200, deuda: 200, id: '12', nombre: 'Juan alverto Sanches Sandoval' },
    { compra: 100, inversion: 5200, deuda: 200, id: '13', nombre: 'Juan alverto Sanches Sandoval' },
    { compra: 100, inversion: 5200, deuda: 200, id: '14', nombre: 'Juan alverto Sanches Sandoval' },
    { compra: 100, inversion: 5200, deuda: 200, id: '15', nombre: 'Juan alverto Sanches Sandoval' },
    { compra: 100, inversion: 5200, deuda: 200, id: '16', nombre: 'Juan alverto Sanches Sandoval' },
    { compra: 100, inversion: 5200, deuda: 200, id: '17', nombre: 'Juan alverto Sanches Sandoval' },
  ]
  return (
    <div className="">
      <div className=" flex justify-between text-sm sm:text-lg mb-3 font-poppins">
        <div className="w-6/12 text-color_gray_1 font-bold inline"><div className="  inline">Nombres</div></div>

        <div className="font-bold inline text-center text-color_gray_1">Total</div>

        <div className="font-bold inline text-right pr-4 text-color_gray_1"><span className="">Gastó</span> </div>
        <div className="font-bold  text-right pr-4 text-color_gray_1 hidden md:inline"><span className="">Deuda</span> </div>
        <div className=""></div>
      </div>
      <div className="items_clientes overflow-y-auto ">
        {clientes.map(cliente => (
          <Link
            key={cliente.id}
            to={`/comprador/clientes/${cliente.id}/compras`}
            className="flex items-center justify-between   text-color_green_6  w-full py-5  font-poppins text-sm sm:text-base font-light md:font-normal"
          >
            <span className="w-6/12">{` ${cliente.nombre}`}</span>
            <span className=" text-center ">{` ${270}`}</span>
            <span className=" text-center ">{`s/ ${400}`}</span>
            <span className=" flex sm:mr-5">
              <span className="mr-5 md:inline hidden">{`s/ ${200}`}</span>
              <span className="text-color_green_7"><IconLink /></span>
            </span>

          </Link>
        ))}
      </div>

    </div>
  );
}

export default Clientes;