import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import { initializeApp } from "firebase/app";
import RouterApp from './router/RouterApp';
import { AuthProvider } from './context/auth/AuthContext';
import NotificacionState from './context/Notificaciones/notificacionState';
import Notificaciones from './components/utilidades/Notificaciones/Notificaciones';
import { SocketProvider } from './context/Socket/SocketContext';
import { ChatProvider } from './context/chat/ChatContext';

function App() {

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
      <NotificacionState>
        <AuthProvider>
          <ChatProvider>
            <SocketProvider>
              <Router>
                <RouterApp />
              </Router>
              <Notificaciones />
            </SocketProvider>
          </ChatProvider>
        </AuthProvider>
      </NotificacionState>

    </div>
  );
}

export default App;


