import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import darkmodeOff from '/src/imagenes/darkmodeOff.png';
import darkmodeOn from '/src/imagenes/darkmodeOn.png'; // Imagen del modo oscuro activado

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false); // Estado para el modo oscuro

  // Función para alternar el modo oscuro
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode); // Cambiar el estado
    document.body.classList.toggle('dark-mode'); // Agregar o quitar la clase 'dark-mode' al <body>
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Alpha Vantage App</div>
      <ul className="navbar-links">
        <li>
          <NavLink to="./Api" className="nav-link">
            Api
          </NavLink>
        </li>
        <li>
          <NavLink to="./Login" className="nav-link">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="./Perfil" className="nav-link">
            Perfil
          </NavLink>
        </li>
        <li>
          <button onClick={toggleDarkMode} className="dark-mode-button">
            <img
              src={isDarkMode ? darkmodeOn : darkmodeOff}
              alt={isDarkMode ? 'Modo Oscuro Activado' : 'Modo Oscuro Desactivado'}
              className="navbar-icon"
            />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
