import { Link, useParams } from "react-router-dom";
import { IconCard, IconLink } from "../../../components/Icons";

const ClienteCreditos = () => {
  const params = useParams()
  console.log(params);
  const { id } = params
  return (
    <div>
      <div className="flex justify-between text-color_green_5">
        <div className="flex  gap-x-7 w-full justify-center">
          <span>Deuda</span>
          <span className="text-color_green_6 font-medium">575.50</span>
          <span> Soles</span>
        </div>

      </div>
      <div className="border border-color_green_4 w-full my-5"></div>

      <div className="cliente_item_creditos text-color_green_6 flex flex-col gap-y-5 overflow-y-auto ">
        {creditos.map(e => (
          <div className="flex justify-between w-full ">
            <div className="w-8/12">Lunes 18 de noviembre 2021</div>
            <div className="w-4/12 flex items-center gap-x-3 justify-end ">
              <span>125 soles</span>
              <span ><IconLink /></span>
            </div>

          </div>
        ))}

      </div>
      <Link to={`/comprador/clientes/${id}/nuevo-credito`} className=" fixed bottom-24 right-10 bg-color_green_9 p-3 shadow-lg rounded-full text-color_green_3">
        <IconCard stile='w-6 h-6' />
      </Link>


    </div>
  );
}

export default ClienteCreditos;


const creditos = [
  {}, {}, {},
  {}, {}, {},
  {}, {}, {}, {}, {}, {},
  {}, {}, {}, {}, {}, {},
  {}, {}, {}, {}, {}, {},
]