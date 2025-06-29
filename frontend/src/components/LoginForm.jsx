import React, { useState } from 'react';

const LoginForm = ({ onLoginSuccess, onVolver, onBack }) => {
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

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow space-y-4">
      <h2 className="text-xl font-semibold text-center text-blue-700">Iniciar sesión</h2>
      <input
        className="w-full border rounded px-3 py-2"
        placeholder="Usuario"
        value={usuario}
        onChange={e => setUsuario(e.target.value)}
      />
      <input
        type="password"
        className="w-full border rounded px-3 py-2"
        placeholder="Contraseña"
        value={contrasena}
        onChange={e => setContrasena(e.target.value)}
      />
      <div className="flex justify-between">
        <button onClick={login} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Entrar</button>
      </div>
    </div>
  );
};

export default LoginForm;