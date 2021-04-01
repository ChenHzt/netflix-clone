import '../App.css';
import { auth, generateUserDocument , signInWithGoogle} from "../firebase";
import React, { useState } from 'react';
import PasswordReset from './passwordReset'
import {BrowserRouter,Switch,Route,Link} from "react-router-dom";

export default function SignupPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const signInWithEmailAndPasswordHandler =(event) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password).catch(error => {
          setError("Error signing in with password and email!");
          console.error("Error signing in with password and email", error);
        });
    };

    const onChangeInput = (event) => {
        const { name, value } = event.currentTarget;
        switch (name) {
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            default:
                break;
        }

    }

    return (
        <div className="loginPage">
            <div className="loginBox">
                {error !== null && (
                    <div className="errorMsg">
                        {error}
                    </div>
                )}

                <div className="form__item">
                    <label htmlFor="email">Email:</label>
                    <input name='email' value={email} onChange={onChangeInput} type="email" />
                </div>
                <div className="form__item">
                    <label htmlFor="password1">Password:</label>
                    <input name='password' value={password} onChange={onChangeInput} type="password" />
                </div>

                <button onClick={signInWithEmailAndPasswordHandler}>Login</button>
                <button onClick={signInWithGoogle} >Login With Google</button>

                <p className="text-center my-3">
                    Don't have an account?
                    <Link to="signup" className="">
                        Sign up here
                    </Link>
                    <br />
                    <Link to="passwordReset" className="text-blue-500 hover:text-blue-600">
                        Forgot Password?
                    </Link>
                </p>
            </div>

        </div>
    )
}