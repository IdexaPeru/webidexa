
import * as Yup from 'yup'
import './estilos.css'
import { Outlet, Route, Routes } from 'react-router-dom'
import MensajeRegistro from './authpages/MesajeRegistro';
import RestoreInit from './authpages/RestoreInit';
import MensajeRestore from './authpages/MensajeRestore';

const Restore = () => {

  return (
    <div className="bg-color_green_1 h-full flex justify-center items-center flex-col">
      {Outlet}
    </div>
  );
}

export default Restore;