import React from 'react'
import './Dashboard.css';

export const Dashboard = () => {
const handleLogout=()=>{
    localStorage.removeItem('accessToken'); 
    window.location.href = '/Oauth';
}

  return (
      <div className='container'>
        <h1>Dashboard</h1>
        <button onClick={handleLogout}>Logout</button>
    </div>
   )
}

