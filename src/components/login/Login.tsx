import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { Button, TextField } from '@mui/material';
import { Google } from '@mui/icons-material';


const OAuthLogin: React.FC = () => {
  const [data, setData]=useState<string>('')
  const handleLogin = async () => {
    try {
      // Make a GET request to your OAuth provider's authorization URL
      const response = await axios.get('https://er-oauth.onrender.com/auth/google');
      setData(response.data);
     // window.location.href = response.data.authorizationUrl;
    } catch (error) {
      console.error('OAuth login failed:', error);
    }
  };

  return (
    <div className='container'>
      <div className='google'>
      <h5 >Continue with Google</h5><br/>
      <div className='button'>
      <Button variant="outlined"  onClick={handleLogin} > <br/>
      <Google style={{ color: 'blue' }}  />
       Google</Button>
       <div>
          <div dangerouslySetInnerHTML={{ __html:data }} />
</div>

       </div>
       </div>
    </div>
  );
};

export default OAuthLogin;