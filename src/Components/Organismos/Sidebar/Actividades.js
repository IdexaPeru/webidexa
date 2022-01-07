import { NavLink, useLocation } from "react-router-dom";
import { IconCardBuy, IconCardBuyInactive, IconConfig, IconConfigInactivo, IconEstadistica, IconEstadisticaInactivo, IconProduct, IconProductInactivo, IconUsers, IconUsersInactive } from "../../Icons";
import { PERFIL, PERFIL2, PERFIL3, PERFIL4, PERFIL5 } from "../../Images";

const Actividades = () => {

  const location = useLocation()

  const { pathname } = location;

  const currentPath = pathname.split('/');

  return (
    <div className=" pb-2 pt-3 font-poppins  flex flex-col text-color_gray_1   ">
      <p className="text-color_green_5  text-sm">Colegas</p>

      <div className="flex flex-col gap-y-4 py-4 text-sm">
        <p>Pedido #200 pediente</p>
        <p>Activar nuevo trabajador</p>
        <p>Arqueo de caja</p>
        <p>Pedido #200 pediente</p>


      </div>
      <p className=" text-sm text-color_green_7 font-semibold cursor-pointer">ver mas</p>
    </div>
  );
}

export default Actividades;