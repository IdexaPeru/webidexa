import { NavLink, useLocation } from "react-router-dom";
import { IconCardBuy, IconCardBuyInactive, IconConfig, IconConfigInactivo, IconEstadistica, IconEstadisticaInactivo, IconProduct, IconProductInactivo, IconUsers, IconUsersInactive } from "../../Icons";
import { PERFIL, PERFIL2, PERFIL3, PERFIL4, PERFIL5 } from "../../Images";

const Colegas = () => {

  const location = useLocation()

  const { pathname } = location;

  const currentPath = pathname.split('/');

  return (
    <div className=" pb-2 pt-3 font-poppins  flex flex-col border-b border-color_green_4 ">
      <p className="text-color_green_5  text-sm">Colegas</p>

      <div className="flex flex-col gap-y-4 py-4 text-sm">

        <div className="flex justify-between items-center">
          <div className="flex gap-x-3 items-center ">
            <img src={PERFIL2} className="w-10 rounded-full h-10 object-cover " />
            <div>
              <p className="text-color_gray_1 font-semibold">Habel Torrez</p>
              <p className="text-xs text-color_green_5 font-light">Administrador</p>
            </div>
          </div>
          <span className="bg-green-400 w-2 h-2 rounded-full block"></span>
        </div>


        <div className="flex justify-between items-center">
          <div className="flex gap-x-3 items-center ">
            <img src={PERFIL3} className="w-10 rounded-full h-10 object-cover " />
            <div>
              <p className="text-color_gray_1 font-semibold">Habel Torrez</p>
              <p className="text-xs text-color_green_5 font-light">Administrador</p>
            </div>
          </div>
          <span className="bg-green-400 w-2 h-2 rounded-full block"></span>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex gap-x-3 items-center ">
            <img src={PERFIL4} className="w-10 rounded-full h-10 object-cover " />
            <div>
              <p className="text-color_gray_1 font-semibold">Habel Torrez</p>
              <p className="text-xs text-color_green_5 font-light">Administrador</p>
            </div>
          </div>
          <span className="bg-green-400 w-2 h-2 rounded-full block"></span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-x-3 items-center ">
            <img src={PERFIL5} className="w-10 rounded-full h-10 object-cover " />
            <div>
              <p className="text-color_gray_1 font-semibold">Juan Torrez</p>
              <p className="text-xs text-color_green_5 font-light">Administrador</p>
            </div>
          </div>
          <span className="bg-green-400 w-2 h-2 rounded-full block"></span>
        </div>

        <p className=" text-sm text-color_green_7 font-semibold cursor-pointer">ver mas</p>

      </div>
    </div>
  );
}

export default Colegas;