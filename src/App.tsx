import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SsoLogin from './components/login/SsoLogin';
import Home from './components/login/Home';
import LoginNew from './LoginNew';
import Oauth from './components/login/Oauth';



const App: React.FC = () => {
  return (
    <Routes>
    <Route path='/' element= {<Oauth/>}/>
    <Route path='/Home' element= {<Home/>}/>
    </Routes>
    );
};

export default App;

