import './App.css';

import React from 'react';
import HomePage from './pages/home/home'
import Signup from './pages/signup/index'
import Login from './pages/login/index'
import SearchResultsPage from './pages/search/index'

import PasswordReset from './pages/passwordReset'
import MainPage from './pages/mainPage'
import { BrowserRouter, Route,Redirect } from "react-router-dom";

import { auth, getCurrentUserData,generateUserDocument } from "./firebase";
import { connect } from 'react-redux';
import { currentUser } from './actions';
import Navbar from './components/navbar/navbar';
import watchList from './pages/watchList';


class App extends React.Component {
    constructor(props){
      super(props);
      this.state={hide:true};
    }

  componentDidMount() {
    auth.onAuthStateChanged(async (userAuth) => {
      userAuth && await generateUserDocument(userAuth, { fullName:userAuth.displayName })
      const currentUserData = await getCurrentUserData();
      this.props.currentUser(currentUserData);
      this.setState({hide:false});
    });
  }


  handleSignout(){
    auth.signOut();
    sessionStorage.removeItem('currentProfile');
  }

  render() {
    return (
      <BrowserRouter>
      <Navbar handleSignout={this.handleSignout} onSearchChange={this.onSearchChange}/>
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
        {
          this.props.searchTerm && <Redirect to='/search'/>
        }

        <Route path="/myList" exact component={watchList} />
        <Route path="/search" exact component={SearchResultsPage} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/login" exact component={Login} />
        <Route path="/passwordReset" exact component={PasswordReset} />
      </BrowserRouter>
    )
  }
}

const mapStateToProps = state => {
  return { user: state.currentUser, searchTerm: state.searchTerm};
};

export default connect(
  mapStateToProps,
  { currentUser }
)(App);


