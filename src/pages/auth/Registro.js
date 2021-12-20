
import * as Yup from 'yup'
import './estilos.css'
import { Outlet, Route, Routes } from 'react-router-dom'
import DatosBasicos from './authpages/DatosBasicos';
import PuntosNext from '../../components/utilidades/PuntosNext';
import DatosPersonales from './authpages/DatosPersonales';
import MensajeRegistro from './authpages/MesajeRegistro';
import DatosContacto from './authpages/DatosContacto';

const Registro = () => {


  const validar = Yup.object().shape({
    email: Yup.string()
      .email('formato invalido')
      .required('es requerido'),
    password: Yup.string().required('es requerido'),
  });

  return (
    <div className="bg-color_green_1 h-full flex justify-center items-center flex-col">
      <Outlet />
    </div>
  );
}

export default Registro;