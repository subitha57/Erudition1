import React, { useState } from 'react';
import Google from './assets/google.png';
import './LoginNew.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, TextField } from '@mui/material';



const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch('https://o-auth-2-0.onrender.com/auth/google', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
       
      });
      navigate('/')

      if (!response.ok) {
        throw new Error('Login failed');
      }

      // Handle successful login
    } catch (error) {
      setError('Failed to login');
    }
  };
  
  return (
    <div className='login-container'>
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
      <div className='google-logo'>
      <Button ><img src={Google} alt="Google"/>Google</Button>
      </div>
    </div>
  );
};

export default Login;

{/*

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Redirect the user to the OAuth provider's authorization URL
    window.location.href = 'https://o-auth-2-0.onrender.com';
  };

  // Function to handle callback after authentication
  const handleCallback = async () => {
    try {
      // Extract authorization code from URL (assuming the OAuth provider redirects back with code as a query parameter)
      const code = new URLSearchParams(window.location.search).get('code');

      if (code) {
        // Exchange authorization code for access token
        const response = await axios.post('https://o-auth-2-0.onrender.com', {
          code,
          // Include any other required parameters (e.g., client ID, client secret)
        });

        // Store the access token in state or local storage
        const accessToken = response.data.access_token;

        // Redirect user to dashboard or desired page
        navigate('/Home');
      }
    } catch (error) {
      console.error('Error exchanging code for token:', error);
    }
  };

  // Check if this page was redirected from OAuth provider
  React.useEffect(() => {
    handleCallback();
  }, []); // Only run once on component mount

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login with OAuth</button>
    </div>
  );
};

export default Login;*/}

