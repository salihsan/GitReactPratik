import React, { useState } from 'react';
// import {authEmail,authPassword} from './localStorage';
import { validEmail, validPassword } from './RegeEx';


 function LoginPage () 
 {   
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");
    const [emailErr, setEmailErr] = useState(false);
    const [pwdError, setPwdError] = useState(false);
  
  const validate = () => {
     if (!validEmail.test(email)) {
        setEmailErr(true);
     }
     if (!validPassword.test(password)) {
        setPwdError(true);
     }
  };

    return (
        <div className="container bg-dark text-light">
        <div className="content-box  text-align-center py-5">
        <h1 className="my-3 text-center">Movie Search Application</h1>
        <h2 className="my-3 text-center">Login Page </h2>
  
        
  
        <div className="container w-50 my-5">
  
        <span className="form-control m-3 bg-secondary fw-bold ">E-mail: 
        <input 
        className="form-control my-3"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        autoFocus
        required
        />
        </span>
        <span className="form-control m-3 bg-secondary fw-bold" >Password: 
        <input
        className="form-control my-3"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
  
        required
        maxLength={6}
        />
        </span>
  
        <button 
        className="btn btn-info form-control m-3 fw-bold"
        onClick={validate}
        
        >Login</button>
        
        {emailErr && <p>Your email is invalid</p>}
        {pwdError && <p>Your password is invalid</p>}
        </div>    
  
        </div>
      </div>
    )
  
}


export default LoginPage;