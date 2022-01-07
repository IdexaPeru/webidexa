import { IconLink, IconSetting } from "../../components/Icons";

const ReporteVentas = () => {
  return (
    <div className="w-11/12 p-5 mt-5 font-poppins font-light">
      <p className=" text-center text-color_green_7 font-semibold text-lg font-poppins">Reporte de ventas</p>
      <div className="flex justify-between w-full text-color_green_6 mt-5">
        <p>Top 10 mejores ventas</p>
        <span ><IconSetting /></span>
      </div>

      <p className="flex w-full text-color_green_7 my-5">
        <span className="w-6/12">Cliente</span>
        <span className="w-3/12">Fecha</span>
        <span className="w-3/12">Monto</span>
      </p>

      {/* ITEMS */}
      <div className="flex flex-col gap-y-5">
        <p className="flex w-full text-color_green_6">
          <span className="w-6/12">Juan vastidas</span>
          <span className="w-3/12">12/05/22</span>
          <span className="w-3/12 flex gap-x-3">S/.200.0 <span className="text-color_green_4"><IconLink /></span></span>
        </p>
        <p className="flex w-full text-color_green_6">
          <span className="w-6/12">Juan vastidas</span>
          <span className="w-3/12">12/05/22</span>
          <span className="w-3/12 flex gap-x-3">S/.200.0 <span className="text-color_green_4"><IconLink /></span></span>
        </p>
        <p className="flex w-full text-color_green_6">
          <span className="w-6/12">Juan vastidas</span>
          <span className="w-3/12">12/05/22</span>
          <span className="w-3/12 flex gap-x-3">S/.200.0 <span className="text-color_green_4"><IconLink /></span></span>
        </p>
        <p className="flex w-full text-color_green_6">
          <span className="w-6/12">Juan vastidas</span>
          <span className="w-3/12">12/05/22</span>
          <span className="w-3/12 flex gap-x-3">S/.200.0 <span className="text-color_green_4"><IconLink /></span></span>
        </p>
        <p className="flex w-full text-color_green_6">
          <span className="w-6/12">Juan vastidas</span>
          <span className="w-3/12">12/05/22</span>
          <span className="w-3/12 flex gap-x-3">S/.200.0 <span className="text-color_green_4"><IconLink /></span></span>
        </p>
        <p className="flex w-full text-color_green_6">
          <span className="w-6/12">Juan vastidas</span>
          <span className="w-3/12">12/05/22</span>
          <span className="w-3/12 flex gap-x-3">S/.200.0 <span className="text-color_green_4"><IconLink /></span></span>
        </p>
        <p className="flex w-full text-color_green_6">
          <span className="w-6/12">Juan vastidas</span>
          <span className="w-3/12">12/05/22</span>
          <span className="w-3/12 flex gap-x-3">S/.200.0 <span className="text-color_green_4"><IconLink /></span></span>
        </p>
      </div>
    </div>
  );
}

export default ReporteVentas;