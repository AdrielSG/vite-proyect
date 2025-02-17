import React, { useState } from 'react';
import './App.css'; // Estilos globales
import NavBar from './components/NavBar.jsx'
import { Outlet } from 'react-router-dom';

function App() { 
 
  return ( 
    <> 
        <NavBar /> 
        <Outlet /> 
        
    </> 
  ) 
} 
 
export default App