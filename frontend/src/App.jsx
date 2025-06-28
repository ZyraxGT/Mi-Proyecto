import React, { useState, useEffect } from 'react';
import LoginForm from './components/LoginForm';
import EmployeePanel from './components/EmployeePanel';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      {!loggedIn ? (
        <LoginForm onLoginSuccess={() => setLoggedIn(true)} />
      ) : (
        <EmployeePanel />
      )}
    </div>
  );
};

export default App;