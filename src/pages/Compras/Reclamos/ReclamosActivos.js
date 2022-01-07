import { Link } from "react-router-dom";
import { IconLink } from "../../../components/Icons";

const ReclamosActivos = () => {
  return (
    <div>

      <div className="pedidos-activos overflow-y-auto flex flex-col gap-y-5">
        {listas.map(l => (
          <Link key={l.id} to={`/ventas/pedidos/${l.id}/detalles`}>
            <p className="flex justify-between text-color_green_6">{l.nombre}<div className="flex items-center gap-x-3"><span># 0{l.codigo}</span><span className="text-color_green_5"><IconLink /></span></div></p>
          </Link>
        ))}

      </div>
    </div>
  );
}

export default ReclamosActivos;

const listas = [
  { id: '1', nombre: 'Productos malogrados en mal estado', codigo: 10 },
  { id: '2', nombre: 'Productos malogrados en mal estado', codigo: 10 },
  { id: '3', nombre: 'Productos malogrados en mal estado', codigo: 10 },
  { id: '4', nombre: 'Productos malogrados en mal estado', codigo: 10 },
  { id: '5', nombre: 'Productos malogrados en mal estado', codigo: 10 },
  { id: '6', nombre: 'Productos malogrados en mal estado', codigo: 10 },
  { id: '7', nombre: 'Productos malogrados en mal estado', codigo: 10 },
  { id: '8', nombre: 'Productos malogrados en mal estado', codigo: 10 },
  { id: '9', nombre: 'Productos malogrados en mal estado', codigo: 10 },
  { id: '10', nombre: 'Productos malogrados en mal estado', codigo: 10 },
  { id: '11', nombre: 'Productos malogrados en mal estado', codigo: 10 },
  { id: '12', nombre: 'Productos malogrados en mal estado', codigo: 10 },
  { id: '13', nombre: 'Productos malogrados en mal estado', codigo: 10 },
  { id: '14', nombre: 'Productos malogrados en mal estado', codigo: 10 },
  { id: '15', nombre: 'Productos malogrados en mal estado', codigo: 10 },
  { id: '16', nombre: 'Productos malogrados en mal estado', codigo: 10 },
  { id: '17', nombre: 'Productos malogrados en mal estado', codigo: 10 },
  { id: '18', nombre: 'Productos malogrados en mal estado', codigo: 10 },
]