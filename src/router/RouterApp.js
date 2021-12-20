import React from 'react';
import { Navigate } from 'react-router-dom';
import Admin from '../pages/Admin';
import Auth from '../pages/Auth';
import DatosBasicos from '../pages/auth/authpages/DatosBasicos';
import DatosContacto from '../pages/auth/authpages/DatosContacto';
import DatosPersonales from '../pages/auth/authpages/DatosPersonales';
import MensajeRestore from '../pages/auth/authpages/MensajeRestore';
import MensajeRegistro from '../pages/auth/authpages/MesajeRegistro';
import RestoreInit from '../pages/auth/authpages/RestoreInit';
import Login from '../pages/auth/Login';
import Registro from '../pages/auth/Registro';
import Restore from '../pages/auth/Restore';
import Comprador from '../pages/Consumidores/Comprador';
import Creditos from '../pages/creditos/Creditos';
import Productos from '../pages/productos/Productos';


const RouterApp = () => {
  let routes = [
    {
      path: '/auth',
      component: <Auth />,
      children: [
        { path: '/login', component: <Login /> },
        { path: '/registro', component: <Navigate to='/auth/registro/datos-basicos' /> },
        {
          path: '/registro', component: <Registro />, children: [
            { path: '/datos-basicos', component: <DatosBasicos /> },
            { path: '/datos-personales', component: <DatosPersonales /> },
            { path: '/datos-contacto', component: <DatosContacto /> },
            { path: '/finalizado', component: <MensajeRegistro /> },
          ]
        },
        { path: '/restore', component: <Navigate to='/auth/restore/credenciales' /> },
        {
          path: '/restore', component: <Restore />, children: [
            { path: '/credenciales', component: <RestoreInit /> },
            { path: '/finalizado', component: <MensajeRestore /> },
          ]
        },
      ]
    },
    { path: '/', component: <Navigate to='/comprador' /> },
    {
      path: '/', element: <Admin />, children: [
        { path: '/comprador', component: <Comprador /> },
        { path: '/productos', component: <Productos /> },
        { path: '/creditos', component: <Creditos /> },
      ]
    },
    {
      path: '*',
      element: <div>404</div>,
    }
  ]
}

export default RouterApp;