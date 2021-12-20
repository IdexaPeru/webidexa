import { IconLink } from "../../../components/Icons";

const ClienteCompras = () => {


  document.addEventListener('DOMContentLoaded', (e) => {
    const divider = document.getElementById('divider').getBoundingClientRect();
    console.log(divider.top);
  });


  return (
    <div className="h-full ">
      <div className="flex  text-color_green_5 justify-center gap-x-10">

        <div className="flex flex-col items-center">
          <span>Inversión </span>
          <span className="text-color_green_7">S/. 4500</span>
        </div>
        <div className="flex flex-col items-center">
          <span>Deuda </span>
          <span className="text-color_green_7">S/. 200</span>
        </div>
        <div className="flex flex-col items-center">
          <span>Compras</span>
          <span className="text-color_green_7">100</span>
        </div>
      </div>
      <div className="border border-color_green_4 w-full my-5"></div>

      <div id='divider' className="cliente_item_compras text-color_green_6 flex flex-col gap-y-5 overflow-y-auto ">
        {compras.map(() => (
          <div className="flex justify-between w-full ">
            <div className="w-3/12">159 soles</div>
            <div className="w-5/12 text-center"> 12/05/2021</div>
            <div className="w-3/12 text-right flex gap-x-3 items-center"><span>credito</span> <span><IconLink /></span></div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default ClienteCompras;

const compras = [
  {}, {}, {},
  {}, {}, {},
  {}, {}, {}, {}, {}, {},
  {}, {}, {}, {}, {}, {},
  {}, {}, {}, {}, {}, {},
]