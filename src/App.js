import './App.css';
import axios from 'axios';
import React, { useEffect } from 'react';
import HomePage from './pages/home'
import Signup from './pages/signup'
import Login from './pages/login'
import ProfilesPage from './pages/profiles'
import PasswordReset from './pages/passwordReset'
import MainPage from './pages/mainPage'
import { BrowserRouter, Route } from "react-router-dom";
// import  { } from 'react';
import { auth, getCurrentUserData } from "./firebase";
import { connect } from 'react-redux';
import { currentUser } from './actions';


class App extends React.Component {

  componentDidMount() {
    auth.onAuthStateChanged(async (userAuth) => {
      const currentUserData = await getCurrentUserData();
      console.log(currentUserData);
      this.props.currentUser(currentUserData);
    });
  }

  render() {
    console.log(this.props);
    return (
      <BrowserRouter>
        {this.props.user
          ? <Route path="/" exact component={MainPage} />
          : <Route path="/" exact component={HomePage} />}

        <Route path="/signup" exact component={Signup} />
        <Route path="/login" exact component={Login} />
        <Route path="/passwordReset" exact component={PasswordReset} />
        <Route path="/profiles" exact component={ProfilesPage} />
      </BrowserRouter>
    )
  }
}

const mapStateToProps = state => {
  return { user: state.currentUser };
};

export default connect(
  mapStateToProps,
  { currentUser }
)(App);


// export default ;
