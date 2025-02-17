import React, { useState } from 'react';
import './Login.css'; // Asegúrate de que el archivo de estilos sea correcto

const Login = () => {
  // Estado para los campos del formulario
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí agregarías la lógica para manejar el login, por ejemplo, llamando a una API
    console.log('Email:', email);
    console.log('User Name', userName)
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);

    navigate('/perfil', { state: { userName } });
  };

  return (
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Correo electronico</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Actualiza el estado del email
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputUserName1" className="form-label">Nombre del usuario</label>
          <input
            type="userName"
            className="form-control"
            id="exampleInputUserName1"
            aria-describedby="userNameHelp"
            value={userName}
            onChange={(e) => setUserName(e.target.value)} // Actualiza el estado del nombre de usuario
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Actualiza el estado de la contraseña
          />
        </div>

        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)} // Actualiza el estado del checkbox
          />
          <label className="form-check-label" htmlFor="exampleCheck1">Recordarme</label>
        </div>

        <button type="submit" className="btn btn-primary">Iniciar</button>
      </form>
  );
};

export default Login;
