import '../App.css';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { auth, firestore, getCurrentUserData } from "../firebase";
import { connect } from 'react-redux';
import {currentProfile} from '../actions'

class ProfilesPage extends React.Component {

    renderProfile = (p) =>{
        const setProfile = this.props.currentProfile;
        return (
            <Link to='' key={p.name} onClick={() => setProfile(p) } className="profileCard">
                <img src={p.imageUrl} alt="profile"/>
                <p>{p.name}</p>
            </Link>
        )
    }

    renderProfilesList = () => {
        return (
            <div className="profilesContainer">
                {this.props.user.profiles.map(this.renderProfile)}
            </div>
        )
    }
    
    render(){
        return (
        
            <div className="profilesPage">
                {this.renderProfilesList()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { user: state.currentUser,profile: state.currentProfile };
  };
  
export default connect(mapStateToProps,{currentProfile})(ProfilesPage);
  