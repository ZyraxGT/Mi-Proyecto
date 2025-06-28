import React, { useState } from 'react';

const RegisterForm = ({ onVolver, onBack }) => {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');

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
      <h2>Registro</h2>
      <input placeholder="Usuario" value={usuario} onChange={e => setUsuario(e.target.value)} />
      <input type="password" placeholder="Contraseña" value={contrasena} onChange={e => setContrasena(e.target.value)} />
      <br /><br />
      <button onClick={registrar}>Registrar</button>
      <button onClick={onVolver}>Inicio</button>
      <button onClick={onBack}>Volver</button>
    </div>
  );
};

export default RegisterForm;