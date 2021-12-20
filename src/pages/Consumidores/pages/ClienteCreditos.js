import { Link, useParams } from "react-router-dom";
import { IconCard } from "../../../components/Icons";

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
      <div className="border border-color_green_4 w-full my-3"></div>

      <div className="  text-color_green_6 flex flex-col gap-y-5">
        <div className="flex justify-between w-full">
          <div className="w-3/4">Lunes 18 de noviembre 2021</div>
          <div className="w-1/4"> 125 soles</div>
        </div>
        <div className="flex justify-between w-full">
          <div className="w-3/4">Lunes 18 de noviembre 2021</div>
          <div className="w-1/4"> 125 soles</div>
        </div>
        <div className="flex justify-between w-full">
          <div className="w-3/4">Lunes 18 de noviembre 2021</div>
          <div className="w-1/4"> 125 soles</div>
        </div>
        <div className="flex justify-between w-full">
          <div className="w-3/4">Lunes 18 de noviembre 2021</div>
          <div className="w-1/4"> 125 soles</div>
        </div>
        <div className="flex justify-between w-full">
          <div className="w-3/4">Lunes 18 de noviembre 2021</div>
          <div className="w-1/4"> 125 soles</div>
        </div>
        <div className="flex justify-between w-full">
          <div className="w-3/4">Lunes 18 de noviembre 2021</div>
          <div className="w-1/4"> 125 soles</div>
        </div>


      </div>
      <Link to={`/comprador/clientes/${id}/nuevo-credito`} className=" fixed bottom-24 right-10 bg-color_green_9 p-3 shadow-lg rounded-full text-color_green_3">
        <IconCard stile='w-6 h-6' />
      </Link>
    </div>
  );
}

export default ClienteCreditos;