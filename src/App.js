import './App.css';
import Login from './pages/auth/Login';
import { BrowserRouter as Router, Navigate, Outlet, Route, Routes, useParams } from 'react-router-dom'
import { useState } from 'react';
import { initializeApp } from "firebase/app";
import Registro from './pages/auth/Registro';
import Restore from './pages/auth/Restore';
import Consumidores from './pages/Consumidores/Comprador';
import Admin from './pages/Admin';
import RouterApp from './router/RouterApp';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const firebaseConfig = {
    apiKey: "AIzaSyB_EXIwYUNuWOll1ZVbQ9El0cnNhLryXjk",
    authDomain: "admin-ncarlos.firebaseapp.com",
    projectId: "admin-ncarlos",
    storageBucket: "admin-ncarlos.appspot.com",
    messagingSenderId: "143729635451",
    appId: "1:143729635451:web:869975cdfdead420b8b2de"
  };

  // Initialize Firebase
  initializeApp(firebaseConfig);
  return (
    <div className=' h-screen'>
      <Router>
        <RouterApp />
        {/* <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/registro/*' element={<Registro />} />
          <Route path='/registro' element={<Navigate to='/registro/datos-basicos' />} />
          <Route path='/restore/*' element={<Restore />} />
          <Route path='/restore' element={<Navigate to='/restore/credenciales' />} />

          <Route path='/' element={<Navigate to='/comprador' />} />
          <Route path='/' element={<Admin />} >
            <Route path='comprador' element={
              <div>
                <p>SOY COMPRADOR</p>
                <Outlet />
              </div>
            } >
              <Route path='usuarios' element={
                <div>
                  <p>SOY LOS USUARIO</p>
                  <Outlet />
                </div>
              } >
                <Route path=':id' element={
                  <div>
                    <p>SOY EL USUARIO X</p>
                    <Outlet />
                  </div>
                }>
                  <Route path='info' element={<p>INFOR DEL USUARIO X</p>} />
                  <Route path='pedidos' element={<p>PEDIDOS DEL USUARIO X</p>} />
                  <Route path='creditos' element={<p>CREDITOS DEL USUARIO X</p>} />
                </Route>
              </Route>
              <Route path='clientes' element={<p>SOY EL CLIENTE</p>} />
            </Route>
            <Route path='productos' element={<p>SOY PRODUCTOS</p>} />
            <Route path='proveedor' element={<p>SOY PROVEEDOR</p>} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes> */}
      </Router>
    </div>
  );
}

export default App;


const PageNotFound = () => {
  const params = useParams();
  return (
    <p>PAGE "{params.pageName}" 404</p>
  );
}
