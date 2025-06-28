import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import EmployeePanel from './components/EmployeePanel';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [view, setView] = useState('home');
  const [previousView, setPreviousView] = useState('home');

  const changeView = (newView) => {
    setPreviousView(view);
    setView(newView);
  };

  const volverAtras = () => {
    setView(previousView);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      {view === 'home' && (
        <div>
          <h1>Bienvenido a la plataforma</h1>
          <button onClick={() => changeView('login')}>Iniciar sesión</button>
          <button onClick={() => changeView('register')}>Registrarse</button>
        </div>
      )}

      {!loggedIn && view === 'login' && (
        <LoginForm onLoginSuccess={() => setLoggedIn(true)} onVolver={() => setView('home')} onBack={volverAtras} />
      )}

      {!loggedIn && view === 'register' && (
        <RegisterForm onVolver={() => setView('home')} onBack={volverAtras} />
      )}

      {loggedIn && <EmployeePanel onLogout={() => { setLoggedIn(false); setView('home'); }} />}
    </div>
  );
};

export default App;