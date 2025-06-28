import React, { useEffect, useState } from 'react';

const EmployeePanel = () => {
  const [empleados, setEmpleados] = useState([]);
  const [nombre, setNombre] = useState('');
  const [cargo, setCargo] = useState('');

  const obtenerEmpleados = async () => {
    const res = await fetch('http://localhost:3001/api/empleados');
    const data = await res.json();
    setEmpleados(data);
  };

  const agregarEmpleado = async () => {
    await fetch('http://localhost:3001/api/empleados', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nombre, cargo })
    });
    obtenerEmpleados();
  };

  const eliminarEmpleado = async (id) => {
    await fetch(`http://localhost:3001/api/empleados/${id}`, {
      method: 'DELETE'
    });
    obtenerEmpleados();
  };

  useEffect(() => {
    obtenerEmpleados();
  }, []);

  return (
    <div>
      <h2>Panel de empleados</h2>
      <input placeholder="Nombre" value={nombre} onChange={e => setNombre(e.target.value)} />
      <input placeholder="Cargo" value={cargo} onChange={e => setCargo(e.target.value)} />
      <button onClick={agregarEmpleado}>Agregar</button>

      <ul>
        {empleados.map(e => (
          <li key={e._id}>{e.nombre} - {e.cargo} <button onClick={() => eliminarEmpleado(e._id)}>Eliminar</button></li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeePanel;
