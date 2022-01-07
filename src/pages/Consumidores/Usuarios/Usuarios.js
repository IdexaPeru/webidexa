import { Link } from "react-router-dom";
import { IconLink } from "../../../components/Icons";
import { PERFIL10, PERFIL11, PERFIL12, PERFIL7, PERFIL8, PERFIL9 } from "../../../components/Images";
import './usuarios.css';
const Usuarios = () => {


  const clientes = [
    { compra: 100, inversion: 5200, deuda: 200, id: '1', img: PERFIL7, nombre: 'Sideral Carreon Sanches Sandoval ' },
    { compra: 100, inversion: 5200, deuda: 200, id: '2', img: PERFIL8, nombre: 'Smash garcia Sanches Sandoval' },
    { compra: 100, inversion: 5200, deuda: 200, id: '3', img: PERFIL9, nombre: 'Simon volivar Sanches Sandoval' },
    { compra: 100, inversion: 5200, deuda: 200, id: '4', img: PERFIL10, nombre: 'Ase lo hace Sanches Sandoval' },
    { compra: 100, inversion: 5200, deuda: 200, id: '5', img: PERFIL11, nombre: 'Roberto coñazos Sanches Sandoval' },
    { compra: 100, inversion: 5200, deuda: 200, id: '6', img: PERFIL12, nombre: 'Juan alverto Sanches Sandoval' },
    { compra: 100, inversion: 5200, deuda: 200, id: '7', img: PERFIL7, nombre: 'Juan alverto Sanches Sandoval' },
    { compra: 100, inversion: 5200, deuda: 200, id: '8', img: PERFIL8, nombre: 'Juan alverto Sanches Sandoval' },
    { compra: 100, inversion: 5200, deuda: 200, id: '9', img: PERFIL11, nombre: 'Juan alverto Sanches Sandoval' },
    { compra: 100, inversion: 5200, deuda: 200, id: '10', img: PERFIL8, nombre: 'Juan alverto Sanches Sandoval' },
    { compra: 100, inversion: 5200, deuda: 200, id: '11', img: PERFIL10, nombre: 'Juan alverto Sanches Sandoval' },
    { compra: 100, inversion: 5200, deuda: 200, id: '12', img: PERFIL9, nombre: 'Juan alverto Sanches Sandoval' },
    { compra: 100, inversion: 5200, deuda: 200, id: '13', img: PERFIL7, nombre: 'Juan alverto Sanches Sandoval' },
    { compra: 100, inversion: 5200, deuda: 200, id: '14', img: PERFIL9, nombre: 'Juan alverto Sanches Sandoval' },
    { compra: 100, inversion: 5200, deuda: 200, id: '15', img: PERFIL9, nombre: 'Juan alverto Sanches Sandoval' },
    { compra: 100, inversion: 5200, deuda: 200, id: '16', img: PERFIL7, nombre: 'Juan alverto Sanches Sandoval' },
    { compra: 100, inversion: 5200, deuda: 200, id: '17', img: PERFIL11, nombre: 'Juan alverto Sanches Sandoval' },
  ]

  return (
    <div className="">
      <div className=" flex justify-between text-sm sm:text-lg mb-3 font-poppins px-5">
        <div className="w-6/12 text-color_gray_1 font-bold inline"><div className="  inline">Nombres</div></div>

        <div className="flex w-6/12">
          <div className="font-bold inline text-center text-color_gray_1 w-full ">Total</div>

          <div className="font-bold w-full  text-center   text-color_gray_1 hidden md:inline truncate ">Reclamos</div>

          <div className=" w-full font-bold  text-center  text-color_gray_1 ">Gastó </div>
        </div>

      </div>
      <div className="items_clientes overflow-y-auto px-5">
        {clientes.map(cliente => (
          <div className=" flex items-center relative">
            <Link
              key={cliente.id}
              to={`/comprador/usuarios/${cliente.id}/datos`}
              className="flex items-center justify-between   text-color_green_6  w-full py-5  font-poppins text-sm sm:text-base font-light md:font-normal select-none  "
            >

              <div className="w-6/12 flex items-center gap-x-3 ">
                <img className="  rounded-full object-cover h-11 w-11" src={cliente.img} />
                <p className='truncate'>{` ${cliente.nombre}`}</p>
              </div>
              <div className="w-6/12 flex ">
                <span className=" text-center   w-full ">{` ${200}`}</span>
                <span className=" md:inline hidden text-center w-full">{`${5}`}</span>
                <span className=" flex justify-center   w-full">
                  <span className=" text-center ">{`s/ ${400}`}</span>
                </span >

              </div >
              <div className=" absolute -right-5 text-color_green_7"><IconLink /></div>
            </Link>

          </div>

        ))}
      </div>

    </div>
  );
}

export default Usuarios;



