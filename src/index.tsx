import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId='341341703000-7jv5mq0kd9jo6jbjher29f2juuqsddm4.apps.googleusercontent.com'>
     <BrowserRouter>
    
    
    <App />
    </BrowserRouter> 
    </GoogleOAuthProvider>
  </React.StrictMode>
);
