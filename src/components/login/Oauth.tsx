
import { useState } from 'react';
import React from 'react';
import './Oauth.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Alert from '@mui/material/Alert';


const Login: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState<any | null>(null);
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();
  const [loginSuccess, setLoginSuccess] = useState(false);

  const apiUrl = 'https://er-oauth.onrender.com/auth/login/Success';


  const handleLogin =async () => {

    window.location.href = 'https://o-auth.onrender.com/auth/google';

     };
  const fetchData = async () => {
    try {
         const response = await axios.get(apiUrl);

        console.log(response.data);
        

    } catch (error) {
     
        console.error('Error fetching data:', error);
    }
};

fetchData();

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
{/* <div>
  {!isLoggedIn ? (
    <div>
      <h1>OAuth Login</h1>
      <button onClick={handleLogin}>Login with OAuth</button>
      {error && <p>{error}</p>}
    </div>
  ) : (
    <div>
      <h1>Welcome, {userData.displayName}</h1>
      <h2>User Information</h2>
      <pre>{JSON.stringify(userData, null, 2)}</pre>
    </div>
  )}
</div>*/}
 