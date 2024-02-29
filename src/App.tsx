import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SsoLogin from './components/login/SsoLogin';
import Home from './components/login/Home';
import Login from './components/login/Login';
import LoginNew from './LoginNew';


const App: React.FC = () => {
  return (
    <Routes>
    <Route path='/' element= {<Login/>}/>
    <Route path='/Home' element= {<Home/>}/>
    </Routes>
    );
};

export default App;

