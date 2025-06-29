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
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow space-y-4">
      <h2 className="text-xl font-semibold text-center text-green-700">Registro</h2>
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
        <button onClick={registrar} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Registrar</button>
      </div>
    </div>
  );
};

export default RegisterForm;