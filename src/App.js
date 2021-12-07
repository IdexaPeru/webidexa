import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
// ! sdf firebase
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import BtnWhatsapp from './Components/Utilidades/BtnWhatsapp';
import './Functions/enlaces';
import { useEffect, useState } from 'react';

const firebaseConfig = {
  apiKey: "AIzaSyDEyT7z-7OEC6KI0LOHtGLT2guy_i6wB2c",
  authDomain: "web-idexa.firebaseapp.com",
  projectId: "web-idexa",
  storageBucket: "web-idexa.appspot.com",
  messagingSenderId: "517427483198",
  appId: "1:517427483198:web:004aa5ad2c0e030e43f76f",
  measurementId: "G-LYPV8P7BNB"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
logEvent(analytics, 'notification_received');

function App() {
  const [position, setPosition] = useState(0);
  useEffect(() => {
    console.log(position);
  }, [position])
  return (
    <div className={`w-full `} id="section-01">
      <div className='w-full'>
        {/* {
          position >= 50 && <div className='h-36'></div>
        } */}
        <Header getPosition={setPosition} />
        <Main />
      </div>
      <Footer />
      <BtnWhatsapp />
    </div>
  );
}

export default App;
