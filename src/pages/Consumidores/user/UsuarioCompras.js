import { Link, useParams } from "react-router-dom";
import { IconLink } from "../../../components/Icons";

const UsuarioCompras = () => {

  const params = useParams();
  const { userID } = params;

  return (
    <div>
      <h2 className="text-color_green_7 text-center text-xl mb-5">Compras</h2>

      <div className="flex flex-col gap-y-5">
        {
          users.map(user => (
            <Link to={`/comprador/usuarios/${userID}/compras/${user.id}/detalle`} className="flex justify-between text-color_green_6">Lunes 25 de noviembre 2022 <div className="flex items-center gap-x-3"><span>#005</span><span className="text-color_green_5"><IconLink /></span></div></Link>
          ))
        }
      </div>
    </div>
  );
}

export default UsuarioCompras;


const users = [
  {
    id: 1,
    name: "Lunes 25 de noviembre 2022",
  },
  {
    id: 2,
    name: "Lunes 25 de noviembre 2022",
  },
  {
    id: 3,
    name: "Lunes 25 de noviembre 2022",
  },
  {
    id: 4,
    name: "Lunes 25 de noviembre 2022",
  },
  {
    id: 5,
    name: "Lunes 25 de noviembre 2022",
  },
  {
    id: 6,
    name: "Lunes 25 de noviembre 2022",
  },
]