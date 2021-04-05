import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { currentProfile } from '../actions';
import '../App.css';

class ProfilesPage extends React.Component {
    constructor(props){
        super(props);
        console.log(props);
        this.chooseProfile1 = this.chooseProfile.bind(this);
    }

    chooseProfile = (profile) =>{
        console.log(profile);
        this.props.currentProfile(profile);
        sessionStorage.setItem('currentProfile',JSON.stringify(profile));
    }

    renderProfile = (p,id) =>{
        return (
            <Link to='/browse' key={id} onClick={() => this.chooseProfile1(p) } className="profileCard">
                <img src={p.imageUrl} alt="profile"/>
                <p>{p.name}</p>
            </Link>
        )
    }

    renderProfilesList = () => {
        console.log(this.props.user);
        return (
            <div className="profilesContainer">
                {this.props.user && this.props.user.profiles.map(this.renderProfile)}
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
  