import { useContext } from "react";
import { NavLink, Outlet, useParams, } from "react-router-dom"
import { useEffect } from "react/cjs/react.development";
import { IconCall, IconInfo, IconMessaje } from "../../components/Icons";
import { PERFIL12 } from "../../components/Images";
import { AuthContext } from "../../context/auth/AuthContext";
import { useOpenChat } from "../../hooks/useOpenChat";
import './Trabajador.css';

const Trabajador = () => {

  const { auth } = useContext(AuthContext);
  // falta abrir chat si reacarga la pagina
  const [chatState, abrirChat] = useOpenChat();

  const { userSelected } = chatState;
  const params = useParams();

  useEffect(() => {
    abrirChat(params.trabajadorID);
  }, [])

  return (
    <>
      <div className="mt-5 max-w-lg mx-auto px-5 ">
        <div className="border-b pb-2 sm:pb-7 border-color_green_4">
          <div className="flex items-center justify-between">
            <div className="flex gap-x-5 sm:gap-x-10">
              <img className="img_perfil_trabajador w-12 h-12 sm:w-16 sm:h-16 object-cover hidden sm:flex " src={userSelected?.img} />
              <img className="rounded-full w-14 h-14 sm:w-16 sm:h-16 object-cover  sm:hidden  " src={userSelected?.img} />
              <div className="flex flex-col justify-center ">
                <p className="text-2xl  font-poppins font-bold text-color_gray_1 truncate uppercase">{userSelected?.apodo} </p>
                <p className="hidden sm:flex text-gray-600 truncate capitalize">{userSelected?.nombres} {userSelected?.apellidos}</p>
              </div>
            </div>

            <div className="flex gap-x-3 md:gap-x-7 bg-color_green_1 py-4">

              <NavLink
                to={`/trabajadores/${params.trabajadorID}/call`}
                className={({ isActive }) => (`cursor-pointer ${isActive ? 'text-color_green_7' : 'text-color_gray_1'}`)}
              ><IconCall /></NavLink>

              <NavLink
                onClick={() => abrirChat(params.trabajadorID)}
                to={`/trabajadores/${params.trabajadorID}/chat`}
                className={({ isActive }) => (`cursor-pointer ${isActive ? 'text-color_green_7' : 'text-color_gray_1'}`)}
              ><IconMessaje /></NavLink>

              <NavLink
                to={`/trabajadores/${params.trabajadorID}/info`}
                className={({ isActive }) => (`cursor-pointer ${isActive ? 'text-color_green_7' : 'text-color_gray_1'}`)}
              ><IconInfo /></NavLink>

            </div>
          </div>

        </div>
        <Outlet />
      </div>


    </>
  );
}

export default Trabajador;