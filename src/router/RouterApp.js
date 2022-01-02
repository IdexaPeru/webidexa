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
import Cliente from '../pages/Consumidores/client/Cliente';
import ClienteCompras from '../pages/Consumidores/client/ClienteCompras';
import ClienteCreditos from '../pages/Consumidores/client/ClienteCreditos';
import Clientes from '../pages/Consumidores/client/Clientes';
import Comprador from '../pages/Consumidores/Comprador';
import ClienteInfo from '../pages/Consumidores/client/ClienteInfo';
import ClienteSearch from '../pages/Consumidores/client/ClienteSearch';
import Compra from '../pages/Consumidores/client/compras/Compra';
import DatosCompra from '../pages/Consumidores/client/compras/DatosCompra';
import Fotos from '../pages/Consumidores/client/compras/Fotos';
import HistorialAbonos from '../pages/Consumidores/client/compras/HistorialAbonos';
import Credito from '../pages/Consumidores/client/creditos/Credito';
import DatosCredito from '../pages/Consumidores/client/creditos/DatosCredito';
import NuevoAbono from '../pages/Consumidores/client/creditos/NuevoAbono';
import NuevoCredito from '../pages/Consumidores/client/NuevoCredito';
import Usuarios from '../pages/Consumidores/user/Usuarios';
import Usuario from '../pages/Consumidores/user/Usuario';
import UsuarioComponents from '../pages/Consumidores/user/UsuarioComponents';
import UsuarioInfo from '../pages/Consumidores/user/UsuarioInfo';
import UsuarioCompras from '../pages/Consumidores/user/UsuarioCompras';
import UsuarioListas from '../pages/Consumidores/user/UsuarioListas';
import UsuarioDirecciones from '../pages/Consumidores/user/UserDirecciones';
import UsuarioReclamos from '../pages/Consumidores/user/UsuarioReclamos';
import CompraDetalle from '../pages/Consumidores/user/Compras/CompraDetalle';
import CompraUsuario from '../pages/Consumidores/user/Compras/Compra';
import CompraProductos from '../pages/Consumidores/user/Compras/CompraProductos';
import CompraReclamos from '../pages/Consumidores/user/Compras/CompraReclamos';
import ListaUsuario from '../pages/Consumidores/user/Listas/ListaUsuario';
import DireccionUsuario from '../pages/Consumidores/user/Direcciones/DireccionUsuario';
import ReclamoUsuario from '../pages/Consumidores/user/Reclamos/ReclamoUsuario';
import ComprasAdmin from '../pages/Compras/ComprasAdmin';


const RouterApp = () => {
  const rregistro = '/auth/registro/'
  const rrestore = '/auth/restore/'
  const rcliente = '/comprador/clientes/'
  const rusuario = '/comprador/usuarios/'

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
          path: '/configuracion', element: <Config />,
        },
        {
          path: '/productos', element: <p>PRODUCTOS</p>,
        },
        {
          path: '/ventas', element: <ComprasAdmin />, children: [
            { path: '/ventas/pedidos', element: <p>SOY LOS PEDIDOS</p> },
            { path: '/ventas/reclamos', element: <p>SOY LOS RECLAMOS</p> },
          ],
        },
        {
          path: '/reportes', element: <p>REPORTES</p>,
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

            {
              path: '/comprador/usuarios', element: <Usuarios />,
            },
            {
              path: '/comprador/usuarios/:userID', element: <Usuario />, children: [
                { path: `${rusuario}:userID/elementos`, element: <UsuarioComponents /> },
                { path: `${rusuario}:userID/datos`, element: <UsuarioInfo /> },
                { path: `${rusuario}:userID/compras`, element: <UsuarioCompras /> },
                {
                  path: `${rusuario}:userID/compras/:compraID`, element: <CompraUsuario />, children: [
                    { path: `${rusuario}:userID/compras/:compraID/detalle`, element: <CompraDetalle /> },
                    { path: `${rusuario}:userID/compras/:compraID/productos`, element: <CompraProductos /> },
                    { path: `${rusuario}:userID/compras/:compraID/reclamos`, element: <CompraReclamos /> },
                  ]
                },

                { path: `${rusuario}:userID/listas`, element: <UsuarioListas /> },
                { path: `${rusuario}:userID/listas/:listaID`, element: <ListaUsuario /> },
                { path: `${rusuario}:userID/direcciones`, element: <UsuarioDirecciones /> },
                { path: `${rusuario}:userID/direcciones/:direccionID`, element: <DireccionUsuario /> },
                { path: `${rusuario}:userID/reclamos`, element: <UsuarioReclamos /> },
                { path: `${rusuario}:userID/reclamos/:reclamoID`, element: <ReclamoUsuario /> },
              ]
            },
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