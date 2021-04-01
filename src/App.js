import './App.css';
import axios from 'axios';
import React, { useState } from 'react';
import HomePage from './pages/home' 
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

function App() {
  // const [data, setData] = useState([]);
  // const func = async () => {
  //   const response = await axios.get('https://api.themoviedb.org/3/tv/222?api_key=2fccd7c26288d8a6ba121a000c6df8ec&language=en-US');
  //   console.log(response);
  // }

  // func();
  return (
    <BrowserRouter>
      <Route path="/" exact component={HomePage} />
    </BrowserRouter>
  );
}

export default App;
