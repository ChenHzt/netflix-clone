/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import { auth, generateUserDocument, signInWithGoogle } from "../../firebase";
import { Logo, Navbar } from '../../style';
import { Box, FormItem, Headline, Input, Overlay, PageBackground, PrimaryBtn, SecondaryBtn } from './style';
import { Link, Redirect } from "react-router-dom";

export default function SignupPage() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [error, setError] = useState(null);
    const [redirect, setRedirect] = useState(null);

    const createUserWithEmailAndPasswordHandler = async (event) => {
        event.preventDefault();
        let userCredential=null;
        

        try {
            userCredential = await auth.createUserWithEmailAndPassword(email, password1);
            setError(null);
        }
        catch (error) {
            setError('Error Signing up with email and password');
            console.error("rror Signing up with email and password", error);

        }

        return !!userCredential;
        
    };

    const signupWithEmailAndPassword = async (event) =>{
        if(password1 !== password2) {
            setError('both passwords need to be the same');
            return;
        }
        const status = await createUserWithEmailAndPasswordHandler(event);
        if(status) setRedirect('/browse');
    }

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
    const loginWithGoogle = async () =>{
        let userCredential=null;
        try{
            userCredential = await signInWithGoogle();
            setError(null);
        }
        catch(err){
            setError("Error signing in with google");
            console.error("Error signing in with google", error);
        }

        finally{
            userCredential? setRedirect('/browse'):null;
        }
    }

    return (
        <PageBackground src='https://assets.nflxext.com/ffe/siteui/vlv3/92bb3a0b-7e91-40a0-b27b-f2c3ac9ef6e4/ab38bb40-7ffb-44a0-b628-90803ccd534b/IL-en-20210322-popsignuptwoweeks-perspective_alpha_website_small.jpg'>
            {redirect ? <Redirect to={redirect}/> : null}
            <Overlay>
                <Box>
                    <Headline>
                        Sign Up
                    </Headline>
                    {error !== null && (
                        <div className="errorMsg">
                            {error}
                        </div>
                    )}
                    <FormItem>
                        <Input name='fullName' label='Full Name' value={fullName} onChange={onChangeInput} inputType="text" />
                    </FormItem>
                    <FormItem>
                        <Input name='email' label='Email' value={email} onChange={onChangeInput} inputType="email" />
                    </FormItem>
                    <FormItem>
                        <Input name='password1' label='Password' value={password1} onChange={onChangeInput} inputType="password" />
                    </FormItem>
                    <FormItem>
                        <Input  name='password2' label='Validate Password' value={password2} onChange={onChangeInput} inputType="password" />
                    </FormItem>
                    <PrimaryBtn to='/browse' onClick={signupWithEmailAndPassword}>Sign Up</PrimaryBtn>
                    <SecondaryBtn to='/browse' onClick={loginWithGoogle}>
                        <img height='20px' width='20px' src="https://img.icons8.com/color/452/google-logo.png" alt=""/>
                        Sign Up With Google
                    </SecondaryBtn>
                </Box>
            </Overlay>
        </PageBackground>
    )
}