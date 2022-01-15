import { useContext } from "react";
import { NavLink, Outlet, useLocation, useParams, } from "react-router-dom"
import { useEffect } from "react/cjs/react.development";
import { IconCall, IconInfo, IconMessaje } from "../../components/Icons";
import { PERFIL12 } from "../../components/Images";
import { AuthContext } from "../../context/auth/AuthContext";
import { ChatContext } from "../../context/chat/ChatContext";
import { useOpenChat } from "../../hooks/useOpenChat";
import { chatTypes } from "../../types/chatTypes";
import './Trabajador.css';

const Trabajador = () => {

  // const { chatState, dispatch } = useContext(ChatContext);
  const [chatState, abrirChat] = useOpenChat();
  const { auth } = useContext(AuthContext);

  const params = useParams();

  // falta abrir chat si reacarga la pagina


  return (
    <>
      <div className="mt-5 max-w-lg mx-auto px-5 ">
        <div className="border-b pb-2 sm:pb-7 border-color_green_4">
          <div className="flex items-center justify-between">
            <div className="flex gap-x-5 sm:gap-x-10">
              <img className="img_perfil_trabajador w-12 h-12 sm:w-16 sm:h-16 object-cover hidden sm:flex " src={PERFIL12} />
              <img className="rounded-full w-14 h-14 sm:w-16 sm:h-16 object-cover  sm:hidden  " src={PERFIL12} />
              <div className="flex flex-col justify-center ">
                <p className="text-2xl  font-poppins font-bold text-color_gray_1 truncate">USER </p>
                <p className="hidden sm:flex text-gray-600 truncate">{auth.name}</p>
              </div>
            </div>

            <div className="flex gap-x-3 md:gap-x-7 bg-color_green_1 py-4">

              <NavLink
                to='/trabajadores/15/call'
                className={({ isActive }) => (`cursor-pointer ${isActive ? 'text-color_green_7' : 'text-color_gray_1'}`)}
              ><IconCall /></NavLink>

              <NavLink
                to='/trabajadores/15/chat'
                className={({ isActive }) => (`cursor-pointer ${isActive ? 'text-color_green_7' : 'text-color_gray_1'}`)}
              ><IconMessaje /></NavLink>

              <NavLink
                to='/trabajadores/15/info'
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