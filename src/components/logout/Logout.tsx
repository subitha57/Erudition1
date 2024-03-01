import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from './apiService';

const Logout: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const logoutSuccess = await logout();
    if (logoutSuccess) {
      // Redirect to login page or any other page after successful logout
      navigate('/Oauth');
    } else {
      // Handle logout failure
      console.error('Logout failed');
    }
  };

  return (
    <div>
      <h1>Logout Page</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;