import { IconCameraOutline, IconMicrofono, IconPictureOutline, IconSend } from "../../../components/Icons";

const NavChat = () => {
  return (
    <div className="fixed sm:absolute bottom-0 flex z-50  mx-auto items-center sm:w-full justify-between py-4 border-t left-0 w-full px-10 sm:px-0 bg-color_green_1 ">
      <IconPictureOutline />
      <IconMicrofono />
      <IconCameraOutline />
      <input
        className="bg-color_green_3 py-3 w-52 sm:w-72 placeholder-color_green_7 rounded-full px-5 outline-none text-color_green_7"
        placeholder="Escribe aqui!" />
      <IconSend />
    </div>
  );
}

export default NavChat;