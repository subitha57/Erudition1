import React from 'react';
import './Oauth.css'

const Login: React.FC = () => {
  const handleLogin = () => {
    
    window.location.href = 'https://o-auth.onrender.com/auth/google';
    
  };

  return (
    <div className='container'>
      <div className='Oauth'>
      <h1>Login</h1><br/>
      <button onClick={handleLogin}>Login with Google</button>
          </div>
          </div>
  );
};

export default Login;