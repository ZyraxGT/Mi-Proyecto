import React, { useState } from 'react';

const LoginForm = ({ onLoginSuccess }) => {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');

  const login = async () => {
    const res = await fetch('http://localhost:3001/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ usuario, contrasena })
    });
    if (res.ok) {
      alert('Login exitoso');
      onLoginSuccess();
    } else {
      alert('Credenciales inválidas');
    }
  };

  const registrar = async () => {
    const res = await fetch('http://localhost:3001/api/registro', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ usuario, contrasena })
    });
    const msg = await res.text();
    alert(msg);
  };

  return (
    <div>
      <h1>Login y Registro</h1>
      <input placeholder="Usuario" value={usuario} onChange={e => setUsuario(e.target.value)} />
      <input type="password" placeholder="Contraseña" value={contrasena} onChange={e => setContrasena(e.target.value)} />
      <br /><br />
      <button onClick={registrar}>Registrar</button>
      <button onClick={login}>Iniciar sesión</button>
    </div>
  );
};

export default LoginForm;