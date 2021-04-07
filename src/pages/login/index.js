/* eslint-disable no-unused-expressions */
import { auth, signInWithGoogle } from "../../firebase";
import React, { useState } from 'react';
import { PageBackground, Box, Overlay, Headline, FormItem, Input, PrimaryBtn, SecondaryBtn,Text } from './style';
import { Link, Redirect } from "react-router-dom";
import {Logo,Navbar} from '../../style'
import styled from "styled-components";

export default function SignupPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('ok');
    const [redirect, setRedirect] = useState(null);

    const signInWithEmailAndPasswordHandler = async (event) => {
        let userCredential=null;
        try{
            userCredential = await auth.signInWithEmailAndPassword(email, password);
            setError(null);
        }
        catch(err){
            setError("Error signing in with password and email!");
            console.error("Error signing in with password and email", error);
        }
        return !!userCredential;
     
        
    };
    const loginWithEmailAndPassword = async () =>{
        const status = await signInWithEmailAndPasswordHandler();
        if(status) setRedirect('/browse');
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
        <PageBackground src='https://assets.nflxext.com/ffe/siteui/vlv3/92bb3a0b-7e91-40a0-b27b-f2c3ac9ef6e4/ab38bb40-7ffb-44a0-b628-90803ccd534b/IL-en-20210322-popsignuptwoweeks-perspective_alpha_website_small.jpg'>
            {console.log(redirect)}
            {redirect ? <Redirect to={redirect}/> : null}
            <Overlay>
                <Box>
                    <Headline>
                        Log in
                    </Headline>
                    {error !== null && (
                        <div className="errorMsg">
                            {error}
                        </div>
                    )}

                    <FormItem>
                        <Input name='email' label='Email' value={email} onChange={onChangeInput} inputType="email" />
                    </FormItem>
                    <FormItem>
                        <Input name='password' value={password} label='Password' onChange={onChangeInput} inputType="password" />
                    </FormItem>

                    <PrimaryBtn onClick={loginWithEmailAndPassword}>Login</PrimaryBtn>
                    <SecondaryBtn onClick={loginWithGoogle} >
                    <img height='20px' width='20px' src="https://img.icons8.com/color/452/google-logo.png" alt=""/>
                        Login With Google
                    </SecondaryBtn>

                    <Text>
                        Don't have an account?
                        <Link to="signup" className="">
                            Sign up here
                        </Link>
                        <br />
                        <Link to="passwordReset" className="text-blue-500 hover:text-blue-600">
                            Forgot Password?
                        </Link>
                    </Text>
                </Box>
            </Overlay>
        </PageBackground>
    )
}