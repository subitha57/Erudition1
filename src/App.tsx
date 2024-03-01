import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/login/Home';
import LoginNew from './LoginNew';
import Oauth from './components/login/Oauth';
import Logout from './components/logout/Logout';
import OauthLoginComponent from './components/login/OauthLoginComponent';
import LoginSso from './components/SSO Login/LoginSso';

const App: React.FC = () => {
  return (
    <Routes>
    <Route path='/' element= {<Oauth/>}/>
    <Route path='/dashboard' element= {<Logout/>}/>
    </Routes>
    );
};

export default App;

