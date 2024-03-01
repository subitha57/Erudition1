// OAuthLoginComponent.tsx
import React, { useState } from 'react';
import axios from 'axios';

const OAuthLoginComponent: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState<any>(null);
  const [error, setError] = useState<string>('');

  const handleOAuthLogin = async () => {
    try {
         const response = await axios.get('https://o-auth.onrender.com/auth/google');
      setUserData(response.data);
      setIsLoggedIn(true);
    } catch (error) {
      console.error('OAuth login failed:', error);
      setError('Failed to log in');
    }
  };

  return (
    <div>
      {!isLoggedIn ? (
        <div>
          <h1>OAuth Login</h1>
          <button onClick={handleOAuthLogin}>Login with OAuth</button>
          {error && <p>{error}</p>}
        </div>
      ) : (
        <div>
          <h1>OAuth Login Success</h1>
          <h2>JSON Data</h2>
          <pre>{JSON.stringify(userData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default OAuthLoginComponent;
