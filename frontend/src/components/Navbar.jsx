import React from 'react';

const Navbar = ({ loggedIn, onNavigate, onLogout, view }) => {
  return (
    <div className="w-full">
      {/* Título principal */}
      <div className="bg-white py-4 text-center shadow">
        <h1 className="text-2xl font-bold text-blue-700">Base de Empleados</h1>
      </div>

      {/* Barra de navegación */}
      <nav className="bg-white px-6 py-3 flex justify-between items-center shadow">
        {/* Botón Volver si no estamos en la página principal */}
        {view !== 'inicio' && (
          <button
            onClick={() => onNavigate('inicio')}
            className="text-gray-600 hover:underline"
          >
            ⬅ Volver
          </button>
        )}

        <div className="space-x-3">
          {loggedIn && (
            <button
              onClick={onLogout}
              className="text-red-600 hover:underline"
            >
              Cerrar sesión
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

