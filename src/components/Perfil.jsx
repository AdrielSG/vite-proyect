import React from 'react';
import { useLocation } from 'react-router-dom';

const Perfil = ({  }) => {
    const location = useLocation(); // Hook para acceder al estado de la navegación
    const { userName } = location.state || {}; // Obtenemos el correo desde el estado

    if (!userName) {
        return <p>No se ha proporcionado un correo. Por favor, inicia sesión primero.</p>;
    }
    return (
        <div className="perfil">
        <h1>Bienvenid@</h1>
        <p><strong>{userName}</strong></p>
        </div>
    );
};

export default Perfil;
