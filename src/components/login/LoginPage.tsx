import { Button, TextField, TextareaAutosize } from '@mui/material'
import React from 'react';
import './LoginPage.css';
import { FacebookLoginButton, GoogleLoginButton } from "react-social-login-buttons";
import { LoginSocialFacebook, LoginSocialGoogle } from "reactjs-social-login";


export const LoginPage = () => {
  return (
    <div className='container '>
        <div className="shadow p-3 mb-5 mt-5 bg-white rounded">
    <h2>Login</h2><br/>

    <div>
            <TextField id="email" label="Email" size='small' variant="outlined" />
        </div><br/>
       

    <Button variant='contained' color='primary'>Continue</Button><br/><br/>
   

   <div>
      <LoginSocialGoogle
        client_id={"341341703000-7jv5mq0kd9jo6jbjher29f2juuqsddm4.apps.googleusercontent.com"}
        scope="openid profile email"
        discoveryDocs="claims_supported"
        access_type="offline"
        onResolve={({ provider, data }) => {
          console.log(provider, data);
        }}
        onReject={(err) => {
          console.log(err);
        }}
      >
        <GoogleLoginButton />
      </LoginSocialGoogle>
    </div>

    <div>
      <LoginSocialFacebook
      appId='220411397761890'
      onResolve={(response)=>{
        console.log(response);
      }}
      onReject={(error)=>{
        console.log(error);
      }}
      >
        <FacebookLoginButton/>
      </LoginSocialFacebook>
    </div>
   {/*<Button variant='text' >MicroSoft</Button><br/>
   <Button variant='text' >Apple</Button><br/>
      <Button variant='text' >FaceBook</Button>*/}
   </div>
    </div>

  )
}
