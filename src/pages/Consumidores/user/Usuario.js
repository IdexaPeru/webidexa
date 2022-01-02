import { Link, Outlet, useParams } from "react-router-dom";
import { IconArrow } from "../../../components/Icons";


const Usuario = () => {
  const params = useParams();
  const { userID } = params;
  return (
    <div>
      <p className="p-4 mb-7 bg-color_green_3 text-center text-color_green_7 rounded-lg">JUAN ALVERTO COÑAZOS</p>

      <Link to={`/comprador/usuarios/${userID}/elementos`} className="absolute top-8 text-color_green_5">
        <IconArrow stile='h-5 w-5' />
      </Link>

      <Outlet />
    </div>
  );
}

export default Usuario;