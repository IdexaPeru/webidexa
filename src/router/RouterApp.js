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
import Config from '../pages/Config/Config';
import Clientes from '../pages/Consumidores/Clientes';
import Comprador from '../pages/Consumidores/Comprador';
import Cliente from '../pages/Consumidores/pages/Cliente';
import ClienteCompras from '../pages/Consumidores/pages/ClienteCompras';
import ClienteCreditos from '../pages/Consumidores/pages/ClienteCreditos';
import ClienteInfo from '../pages/Consumidores/pages/ClienteInfo';
import ClienteSearch from '../pages/Consumidores/pages/ClienteSearch';
import Compra from '../pages/Consumidores/pages/compras/Compra';
import DatosCompra from '../pages/Consumidores/pages/compras/DatosCompra';
import Fotos from '../pages/Consumidores/pages/compras/Fotos';
import HistorialAbonos from '../pages/Consumidores/pages/compras/HistorialAbonos';
import Credito from '../pages/Consumidores/pages/creditos/Credito';
import DatosCredito from '../pages/Consumidores/pages/creditos/DatosCredito';
import NuevoAbono from '../pages/Consumidores/pages/creditos/NuevoAbono';
import NuevoCredito from '../pages/Consumidores/pages/NuevoCredito';
import Usuarios from '../pages/Consumidores/Usuarios';


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
        { path: '/auth/registro', element: <Navigate to={`${rregistro}datos-basicos`} /> },
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
          path: '/comprador/search/:search', element: <ClienteSearch />,
        },
        {
          path: '/config', element: <Config />,
        },
        {
          path: '/comprador', element: <Comprador />, children: [
            {
              path: '/comprador/clientes', element: <Clientes />,
            },

            {
              path: '/comprador/clientes/:clienteID', element: <Cliente />,
              children: [
                { path: `${rcliente}:clienteID/*`, element: <p>404</p> },
                { path: `${rcliente}:clienteID/info`, element: <ClienteInfo /> },
                {
                  path: `${rcliente}:clienteID/compras`, element: <ClienteCompras />, children: [
                    {
                      path: `${rcliente}:clienteID/compras/:compraID`, element: <Compra />, children: [
                        { path: `${rcliente}:clienteID/compras/:compraID/abonos`, element: <HistorialAbonos /> },
                        { path: `${rcliente}:clienteID/compras/:compraID/fotos`, element: <Fotos /> },
                        { path: `${rcliente}:clienteID/compras/:compraID/detalles`, element: <DatosCompra /> },
                      ]
                    },
                  ]
                },
                {
                  path: `${rcliente}:clienteID/creditos`, element: <ClienteCreditos />, children: [
                    {
                      path: `${rcliente}:clienteID/creditos/:creditoID`, element: <Credito />, children: [
                        { path: `${rcliente}:clienteID/creditos/:creditoID/abonos`, element: <HistorialAbonos /> },
                        { path: `${rcliente}:clienteID/creditos/:creditoID/fotos`, element: <Fotos /> },
                        { path: `${rcliente}:clienteID/creditos/:creditoID/detalles`, element: <DatosCredito /> },
                        { path: `${rcliente}:clienteID/creditos/:creditoID/nuevo-abono`, element: <NuevoAbono /> },
                      ]
                    }
                  ]
                },
                { path: `${rcliente}:clienteID/nuevo-credito`, element: <NuevoCredito /> },
              ]
            },

            { path: '/comprador/usuarios', element: <Usuarios /> }
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