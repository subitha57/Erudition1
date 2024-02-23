import React from 'react';
import { LoginPage } from './components/login/LoginPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SsoLogin from './components/login/SsoLogin';
import Home from './components/login/Home';
import Login from './components/login/Login';

const App: React.FC = () => {
  return (
    <Routes>
    <Route path='/Login' element= {<Login/>}/>
    <Route path='/' element= {<Home/>}/>
    </Routes>
    );
};

export default App;

