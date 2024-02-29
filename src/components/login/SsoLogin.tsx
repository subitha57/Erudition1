import React, { useState } from 'react';
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import './ssoLogin.css'

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  

  const handleLogin = async () => {
    try {
      const response = await axios.post('your-sso-api-url', {
        username,
        password,
      });
      console.log('Login successful:', response.data);
      // Redirect user to the desired page upon successful login
    } catch (error) {
      console.error('Login failed:', error);
      // Handle login failure (e.g., display error message)
    }
    if (loggedIn) {
        return <Navigate to="/Home" />;
      }
    
  };

  return (
    <div>
    <div className='login'>
      <h2>Login</h2><br/>
      <div>
        <TextField label="Username" variant="outlined" 
          type="text"
          value={username}
          onChange={(e:any) => setUsername(e.target.value)}
        />
      </div><br/>
      <div>
       
        <TextField label="Password" variant="outlined" 
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div><br/>
      <div className='button'>
      <button onClick={handleLogin}>Login</button><br/>
      </div>
        <div>
      <Link to="/forgot-password">Forgot Password?</Link> 
      </div><br/>
      </div>
    </div>
  );

};

export default Login;