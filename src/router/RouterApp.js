import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
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
import Clientes from '../pages/Consumidores/Clientes';
import Comprador from '../pages/Consumidores/Comprador';
import Creditos from '../pages/creditos/Creditos';
import Productos from '../pages/productos/Productos';


const RouterApp = () => {
  const rregistro = '/auth/registro/'
  const rrestore = '/auth/restore/'
  const rcliente = '/comprador/clientes/'

  let routes = [
    {
      path: '/auth',
      element: <Auth />,
      children: [
        { path: '/auth/login', element: <Login /> },
        { path: '/auth/registro', element: <Navigate to={`${rrestore}datos-basicos`} /> },
        {
          path: '/auth/registro', element: <Registro />, children: [
            { path: `${rregistro}datos-basicos`, element: <DatosBasicos /> },
            { path: `${rregistro}datos-personales`, element: <DatosPersonales /> },
            { path: `${rregistro}datos-contacto`, element: <DatosContacto /> },
            { path: `${rregistro}finalizado`, element: <MensajeRegistro /> },
          ]
        },
        { path: '/auth/restore', element: <Navigate to={`${rrestore}credenciales`} /> },
        {
          path: '/auth/restore', element: <Restore />, children: [
            { path: `${rrestore}credenciales`, element: <RestoreInit /> },
            { path: `${rrestore}finalizado`, element: <MensajeRestore /> },
          ]
        },
      ]
    },
    { path: '/', element: <Navigate to='/comprador/clientes' /> },
    {
      path: '/', element: <Admin />, children: [
        {
          path: '/comprador', element: <Comprador />, children: [
            {
              path: '/comprador/clientes', element: <Clientes />, children: [
                {
                  path: `${rcliente}:id`, element: <div>SOY EL CLIENTE X</div>, children: [
                    { path: `${rcliente}:id/info`, element: <div>INFORMACION DEL CLIENTE X</div> },
                    { path: `${rcliente}:id/pedidos`, element: <div>PEDIDOS DEL CLIENTE X</div> },
                    { path: `${rcliente}:id/creditos`, element: <div>SOY LOS CREDITOS DEL CLIENTE X</div> },
                  ]
                },
              ]
            },
            { path: '/comprador/usuarios', element: <Productos /> }
          ]
        },
      ]
    },

    {
      path: '*',
      element: <div>404</div>,
    }
  ];

  let element = useRoutes(routes)

  return (
    <>
      {element}
    </>
  )
}

export default RouterApp;