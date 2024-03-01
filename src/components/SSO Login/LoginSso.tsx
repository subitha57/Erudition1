import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Oauth from '../login/Oauth';
import './LoginSso.css'

const LoginSso: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState<any | null>(null);
    const [error, setError] = useState<string>('');
    const navigate = useNavigate();
    const [loginSuccess, setLoginSuccess] = useState(false);
    const handleLoginGoogle =() => {
  
      window.location.href = 'https://ssologin.onrender.com/auth/google';
          
      };
     const handleLoginGithub = ()=>{

        window.location.href = ' https://ssologin.onrender.com/auth/github ';

     } 
  
    return (
      <div className='container'>
      <div className='Oauth'>
      <h1>Login</h1><br/>
      <button onClick={handleLoginGoogle}>Login with Google</button><br/><br/>
      <button onClick={handleLoginGithub}>Login with GitHub</button>
          </div>
          
  </div>
      
    );
  };
  
  export default LoginSso;
