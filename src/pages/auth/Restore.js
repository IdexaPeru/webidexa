
import './estilos.css'
import { Outlet, } from 'react-router-dom'


const Restore = () => {

  return (
    <div className="bg-color_green_1 h-full flex justify-center items-center flex-col">
      {Outlet}
    </div>
  );
}

export default Restore;