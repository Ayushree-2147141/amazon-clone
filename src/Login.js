import React, {useState } from 'react'
import "./Login.css"
import {Link, useNavigate} from "react-router-dom";
import {auth} from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = e => {
        e.preventDefault();

        //firebase login thing 
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            //successful login of user
            navigate('/')
        })
        .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        //firebase register thing
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                //successful creation of user with email and password
                console.log(userCredential);
                if(userCredential){
                    navigate('/');
                }
                
            })
            .catch(error => alert(error.message))
    }

  return (
    <div className="login">
        <Link to="/">
            <img 
                className="login__logo"
                src='http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG'
                alt='' 
            />
        </Link>
        <div className="login__container">
            <h1>Sign in</h1>
            <form>
                <h5>E-mail</h5>
                <input 
                    type="text" 
                    value={email} 
                    onChange = {e => setEmail(e.target.value)}
                />

                <h5>Password</h5>
                <input 
                    type="password" 
                    value = {password} 
                    onChange = {e => setPassword(e.target.value)}
                />

                <button 
                    type = 'submit'
                    onClick ={signIn}
                    className="login__signInButton">Sign in</button>
            </form>

            <p>
                By signing in you agree to Amazon's Consitions of Use & Sale. 
                Please see our Privacy Notice, our Cookies Notice and put Internet Based-Ads Notice.
            </p>

            <button 
                onClick = {register}
                className="login__registerButton">Create your amazon account</button>
        </div>
    </div>
  )
}

export default Login