import { googleLogout } from '@react-oauth/google';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import './Home.css'

const Home = () => {
    const cookies = new Cookies();
    const navigate = useNavigate();

    useEffect(()=>{
        const token:string = cookies.get("token") as string;
        if(!token){
            navigate("/SsoLogin");
        }
    },[])

    const logoutUser = ()=>{
        cookies.remove("token");
        googleLogout();
        navigate("/SsoLogin")    
    }
  return (
    <div className='logout'>
        <h1>Home</h1>
        <button onClick={logoutUser}>Logout</button>
    </div>
  )
}

export default Home