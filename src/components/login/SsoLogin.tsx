import { CredentialResponse, GoogleLogin } from '@react-oauth/google'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import './ssoLogin.css'

const SsoLogin = () => {
    const navigate = useNavigate();
    const cookies = new Cookies();
    useEffect(()=>{
        const token:string = cookies.get("token") as string;
        if(token){
            navigate("/");
        }
    },[])


    const handleResponse = (res:CredentialResponse)=>{
        cookies.set("token",JSON.stringify(res.credential),{
            maxAge:3600,
        })
        navigate("/")
    }
  return (
    <div className='container'>
        <div className='shadow'>
        <h1>Login</h1><br/>
        <div className='GoogleLogin'>
        <GoogleLogin onSuccess={handleResponse}/><br/>
        {/*<button><div>
      <GoogleIcon />
  </div>Google</button>*/}
        </div>
        </div>
    </div>
  )
}

export default SsoLogin