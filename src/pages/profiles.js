import '../App.css';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { auth, firestore, getCurrentUserData } from "../firebase";
import { connect } from 'react-redux';
import {currentProfile} from '../actions'

function ProfilesPage({user,profile}) {

    const renderProfile = (p) =>{
        return (
            <div key={p.name} onClick={() => currentProfile(p)} className="profileCard">
                <img src={p.imageUrl} alt="profile"/>
                <p>{p.name}</p>
            </div>
        )
    }

    const renderProfilesList = () => {
        return (
            <div className="profilesContainer">
                {user.profiles.map(renderProfile)}
            </div>
        )
    }
    console.log(user);
    return (
        
        <div className="profilesPage">
            {renderProfilesList()}
        </div>
    )
}

const mapStateToProps = state => {
    return { user: state.currentUser,profile: state.currentProfile };
  };
  
export default connect(mapStateToProps,{currentProfile})(ProfilesPage);
  