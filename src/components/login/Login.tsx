import React, { useState } from 'react';
import './Login.css';

interface LoginResponse {
  success: boolean;
  message?: string;
}

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch('your_api_endpoint/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data: LoginResponse = await response.json();

      if (data.success) {
        // Login successful, perform necessary actions (e.g., redirect)
        console.log('Login successful');
      } else {
        setError(data.message || 'An error occurred during login.');
      }
    } catch (error) {
      setError('An error occurred during login.');
      console.error('Login error:', error);
    }
  };

  return (
    <div className='container'>
      <h2>Login</h2><br/>
      {error && <div>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            className='form-control'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
          className='form-control'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div><br/>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;