import './App.css';
import axios from 'axios';
import React, { useState } from 'react';
import HomePage from './pages/home' 
import Signup from './pages/signup' 
import Login from './pages/login' 
import PasswordReset from './pages/passwordReset' 
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={HomePage} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/login" exact component={Login} />
      <Route path="/passwordReset" exact component={PasswordReset} />
    </BrowserRouter>
  );
}

export default App;
