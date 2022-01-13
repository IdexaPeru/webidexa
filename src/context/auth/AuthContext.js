import { createContext, useState, useCallback } from 'react';
import { fetchConToken, fetchSinToken } from '../../helpers/fetch';

export const AuthContext = createContext(null);

const initialState = {
  uid: null,
  checking: true,
  logged: false,
  name: null,
  email: null,
}

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(initialState);

  const login = async (email, password) => {
    console.log('login');
    const resp = await fetchSinToken('login', { email, password }, 'POST');
    console.log(resp);

    if (resp.ok) {
      localStorage.setItem('token', resp.token);
      const { usuario } = resp;

      setAuth({
        uid: usuario.uid,
        checking: false,
        logged: true,
        name: usuario.nombre,
        email: usuario.email,
      })
    }

    return resp
  }

  const register = (nombre, email, password) => {

  }

  const verificarToken = useCallback(async () => {
    console.log('verificar');
    const token = localStorage.getItem('token') || '';

    // si token no existe
    if (!token) {
      setAuth({
        uid: null,
        checking: false,
        logged: false,
        name: null,
        email: null,
      })

      return false
    }

    const resp = await fetchConToken('login/renew');
    if (resp.ok) {
      localStorage.setItem('token', resp.token);
      const { usuario } = resp;
      console.log('soy resp');
      console.log(usuario);
      console.log('soy resp');

      setAuth({
        uid: usuario.uid,
        checking: false,
        logged: true,
        name: usuario.nombre,
        email: usuario.email
      });
      console.log('autenticado ');
      return true
    } else {
      console.log('cancelar estados');
      setAuth({
        uid: null,
        checking: false,
        logged: false,
        name: null,
        email: null,
      })
      return false
    }

  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    setAuth({
      uid: null,
      checking: false,
      logged: false,
      name: null,
      email: null,
    })
  }

  return (
    <AuthContext.Provider value={{
      auth,
      login,
      register,
      verificarToken,
      logout,
    }}>
      {children}
    </AuthContext.Provider>
  )

}