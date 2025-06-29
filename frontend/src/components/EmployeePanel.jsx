import React, { useEffect, useState } from 'react';

const EmployeePanel = () => {
  const [empleados, setEmpleados] = useState([]);
  const [nombre, setNombre] = useState('');
  const [cargo, setCargo] = useState('');
  const [notas, setNotas] = useState('');

  // Obtener empleados del backend
  const obtenerEmpleados = async () => {
    const res = await fetch('http://localhost:3001/api/empleados');
    const data = await res.json();
    console.log('🟢 Empleados cargados:', data);
    setEmpleados(data);
  };

  // Agregar un nuevo empleado
  const agregarEmpleado = async () => {
    if (!nombre || !cargo) {
      alert("Completa nombre y cargo");
      return;
    }

    console.log('🔄 Enviando:', { nombre, cargo, notas });

    await fetch('http://localhost:3001/api/empleados', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nombre, cargo, notas })
    });

    // Limpiar campos
    setNombre('');
    setCargo('');
    setNotas('');
    obtenerEmpleados();
  };

  // Eliminar un empleado por ID
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
   <div className="mw-full mx-auto bg-white p-6 rounded shadow space-y-4">

      <div className="flex flex-col gap-2">
        <input
          placeholder="Nombre"
          value={nombre}
          onChange={e => setNombre(e.target.value)}
          className="border px-3 py-2 rounded w-full text-black"
        />
        <input
          placeholder="Cargo"
          value={cargo}
          onChange={e => setCargo(e.target.value)}
          className="border px-3 py-2 rounded w-full text-black"
        />
        <textarea
          placeholder="Notas (opcional)"
          value={notas}
          onChange={e => setNotas(e.target.value)}
          className="border px-3 py-2 rounded w-full text-black resize-none"
          rows={2}
        />
        <button
          onClick={agregarEmpleado}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full sm:w-auto"
        >
          Agregar empleado
        </button>
      </div>

      <ul className="divide-y divide-gray-200 mt-4">
        {empleados.map(e => (
          <li key={e._id} className="flex justify-between items-start py-3">
            <div className="flex-1">
              <p className="font-semibold">{e.nombre} - {e.cargo}</p>
              {e.notas && (
                <p className="text-sm text-gray-600 italic">📝 {e.notas}</p>
              )}
              {e.creadoEn && (
                <p className="text-xs text-gray-500">
                  📅 {new Date(e.creadoEn).toLocaleString()}
                </p>
              )}
            </div>
            <button
              onClick={() => eliminarEmpleado(e._id)}
              className="text-red-600 hover:underline ml-4"
              
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeePanel;
