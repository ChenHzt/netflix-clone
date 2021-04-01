import '../App.css';
import { auth, generateUserDocument,signInWithGoogle } from "../firebase";
import React, { useState } from 'react';

export default function SignupPage() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [error, setError] = useState(null);

    const createUserWithEmailAndPasswordHandler = async (event) => {
        console.log('fefefe');
        event.preventDefault();

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password1);
            console.log(generateUserDocument(user, { fullName }));
        }
        catch (error) {
            setError('Error Signing up with email and password');
        }

        setEmail("");
        setPassword1("");
        setFullName("");
    };

    const onChangeInput = (event) => {
        const { name, value } = event.currentTarget;
        switch (name) {
            case 'fullName':
                setFullName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'password1':
                setPassword1(value);
                break;
            case 'password2':
                setPassword2(value);
                break;
            default:
                break;
        }

    }

    return (
        <div className="signUpPage">
            <div className="signupBox">
                {error !== null && (
                    <div className="errorMsg">
                        {error}
                    </div>
                )}
                <div className="form__item">
                    <label htmlFor="fullName">Full Name:</label>
                    <input name='fullName' value={fullName} onChange={onChangeInput} type="text" />
                </div>
                <div className="form__item">
                    <label htmlFor="email">Email:</label>
                    <input name='email' value={email} onChange={onChangeInput} type="email" />
                </div>
                <div className="form__item">
                    <label htmlFor="password1">Password:</label>
                    <input name='password1' value={password1} onChange={onChangeInput} type="password" />
                </div>
                <div className="form__item">
                    <label htmlFor="password2">Password:</label>
                    <input name='password2' value={password2} onChange={onChangeInput} type="password" />
                </div>
                <button onClick={createUserWithEmailAndPasswordHandler}>Sign Up</button>
                <button onClick={signInWithGoogle}>Sign Up With Google</button>
            </div>

        </div>
    )
}