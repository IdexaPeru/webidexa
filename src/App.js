import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import { initializeApp } from "firebase/app";
import RouterApp from './router/RouterApp';

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
      <Router>
        <RouterApp />
      </Router>

    </div>
  );
}

export default App;


