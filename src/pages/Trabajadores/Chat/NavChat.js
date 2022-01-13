import { useState } from "react";
import { IconArrowRight, IconCameraOutline, IconMicrofono, IconPictureOutline, IconSend } from "../../../components/Icons";

const NavChat = () => {

  const [mensaje, setMensaje] = useState("");

  return (
    <div className="fixed sm:absolute  bottom-0 flex z-50  mx-auto items-center sm:w-full justify-between py-4 border-t left-0 w-full bg-color_green_1 px-5 sm:px-0 gap-x-4 ">

      <div className={` text-color_gray_1 flex justify-between ${mensaje.length >= 1 ? 'w-1/12' : 'w-5/12'}`}>
        <span className={`${mensaje.length >= 1 ? 'hidden' : 'inline'}`}>
          <IconPictureOutline />
        </span>
        <span className={`${mensaje.length >= 1 ? 'hidden' : 'inline'}`}>
          <IconMicrofono />

        </span>
        <span className={`${mensaje.length >= 1 ? 'hidden' : 'inline'}`}>
          <IconCameraOutline />
        </span>
        <span className={`${mensaje.length >= 1 ? 'inline' : 'hidden'}`}>
          <IconArrowRight />
        </span>
      </div>


      <input
        value={mensaje}
        onChange={(e) => setMensaje(e.target.value)}
        className="bg-color_green_3 py-3 w-full placeholder-color_green_7 rounded-full px-5 outline-none text-color_green_7"
        placeholder="Escribe aqui!" />


      <span className={`w-1/12 flex justify-center  ${mensaje.length >= 1 ? 'text-color_green_7' : 'text-color_gray_1'}`}>
        <IconSend />
      </span>
    </div>
  );
}

export default NavChat;