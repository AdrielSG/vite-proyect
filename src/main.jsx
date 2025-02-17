import React from 'react'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './components/Login.jsx'
import Api from './components/Api.jsx'
import Perfil from './components/Perfil.jsx'
import { UserProvider } from './components/useUsernameContext.jsx';


createRoot(document.getElementById('root')).render(
  //<StrictMode>
  //  <App />
  //</StrictMode>,
   <React.StrictMode>
    <UserProvider>
      <BrowserRouter> 
        <Routes> 
          <Route path="/" element={<App />}>
            <Route path="Api" element={<Api />} /> {/* Página Api */}
            <Route path="Login" element={<Login />} /> {/* Página Login */}
            <Route path="Perfil" element={<Perfil />} /> {/* Página Perfil */}
          </Route> 
        </Routes> 
      </BrowserRouter>
    </UserProvider>
 </React.StrictMode> 
)
