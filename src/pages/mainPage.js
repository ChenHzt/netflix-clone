import '../App.css';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
// import { auth, firestore, getCurrentUserData } from "../firebase";
import { connect } from 'react-redux';
import { auth,signInWithGoogle} from "../firebase";
import ProfilePage from './profiles'
function MainPage({user,profile}) {

    console.log(user);

    return (
        <div className="mainPage">
            {!profile && <ProfilePage/>}
            <button onClick = {() => {auth.signOut()}}>SignOut</button>

        </div>
    )
}

const mapStateToProps = state => {
    return { user: state.currentUser };
  };
  
export default connect(mapStateToProps)(MainPage);
  