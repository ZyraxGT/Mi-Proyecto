import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import EmployeePanel from './components/EmployeePanel';
import Navbar from './components/Navbar';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [view, setView] = useState('inicio');
  const [previousView, setPreviousView] = useState('inicio');

  const changeView = (newView) => {
    setPreviousView(view);
    setView(newView);
  };

  const volverAtras = () => {
    setView(previousView);
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans pt-24 px-4">
      <Navbar
        loggedIn={loggedIn}
        view={view}
        onNavigate={(newView) => setView(newView)}
        onLogout={() => {
          setLoggedIn(false);
          setView('inicio');
        }}
      />

      <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow">
        {view === 'inicio' && (
          <div className="text-center space-y-6">
            <h1 className="text-4xl font-bold text-blue-700">Bienvenido a Mi Plataforma</h1>
            <p className="text-gray-700 text-lg">Aquí puedes gestionar empleados, registrar usuarios y más.</p>

            <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">
              <div className="bg-gray-100 p-4 rounded shadow w-full md:w-1/2">
                <h3 className="text-xl font-semibold text-indigo-600 mb-2">Gestión de empleados</h3>
                <p className="text-sm text-gray-600">Administra tus trabajadores fácilmente desde un panel intuitivo.</p>
              </div>
              <div className="bg-gray-100 p-4 rounded shadow w-full md:w-1/2">
                <h3 className="text-xl font-semibold text-green-600 mb-2">Usuarios registrados</h3>
                <p className="text-sm text-gray-600">Consulta, registra y gestiona usuarios desde cualquier lugar.</p>
              </div>
            </div>

            <button
              onClick={() => setView('home')}
              className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Ir a Registro / Login
            </button>
          </div>
        )}

        {view === 'home' && (
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold text-blue-600">Bienvenido a la plataforma</h1>
            <div className="space-x-4">
              <button
                onClick={() => changeView('login')}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Iniciar sesión
              </button>
              <button
                onClick={() => changeView('register')}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Registrarse
              </button>
            </div>
          </div>
        )}

        {!loggedIn && view === 'login' && (
          <LoginForm
            onLoginSuccess={() => {
              setLoggedIn(true);
              setView('panel');
            }}
            onVolver={() => setView('home')}
            onBack={volverAtras}
          />
        )}

        {!loggedIn && view === 'register' && (
          <RegisterForm
            onVolver={() => setView('home')}
            onBack={volverAtras}
          />
        )}

        {loggedIn && view === 'panel' && (
          <div className="mt-6">
            <EmployeePanel onVolver={volverAtras} />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
