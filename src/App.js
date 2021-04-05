import './App.css';

import React from 'react';
import HomePage from './pages/home/home'
import Signup from './pages/signup/index'
import Login from './pages/login/index'

import PasswordReset from './pages/passwordReset'
import MainPage from './pages/mainPage'
import { BrowserRouter, Route,Redirect } from "react-router-dom";

import { auth, getCurrentUserData,generateUserDocument } from "./firebase";
import { connect } from 'react-redux';
import { currentUser } from './actions';


class App extends React.Component {
    constructor(props){
      super(props);
      this.state={hide:true};
    }

  componentDidMount() {
    auth.onAuthStateChanged(async (userAuth) => {
      console.log('hhhhhh');
      userAuth && await generateUserDocument(userAuth, { fullName:userAuth.displayName })
      const currentUserData = await getCurrentUserData();
      console.log(currentUserData);
      this.props.currentUser(currentUserData);
      this.setState({hide:false});
    });
  }

  render() {
    console.log(this.props.user);
    return (
      <BrowserRouter>
      {console.log(this.props.user)}
        {
          
          this.props.user
          ? <Redirect to='/browse'/>
          : <Redirect to='/'/>
        }
        {
          !this.state.hide &&
          <>
            <Route path="/browse" exact component={MainPage}/>
            <Route path="/" exact component={HomePage}/>  
          </>
        }
        <Route path="/signup" exact component={Signup} />
        <Route path="/login" exact component={Login} />
        <Route path="/passwordReset" exact component={PasswordReset} />
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


