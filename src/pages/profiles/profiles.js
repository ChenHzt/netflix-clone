import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { currentProfile } from '../../actions';
import {StyledBtn,StyledProfileCard,StyledProfileImg,StyledProfileName,StyledProfilesContainer,StyledProfilePage,StyleHeadline} from './style'

// import '../App.css';

class ProfilesPage extends React.Component {
    constructor(props){
        super(props);
        this.chooseProfile1 = this.chooseProfile.bind(this);
    }

    chooseProfile = (profile) =>{
        this.props.currentProfile(profile);
        sessionStorage.setItem('currentProfile',JSON.stringify(profile));
    }

    

    renderProfile = (p) =>{
        return (
            <StyledProfileCard to='/browse' key={p.id} onClick={() => this.chooseProfile1(p) } className="profileCard">
                
                    <StyledProfileImg  src={p.imageUrl} alt="profile"/>
                    <StyledProfileName>{p.name}</StyledProfileName>
                
            </StyledProfileCard>
        )
    }

    renderProfilesList = () => {
        return (
            <StyledProfilesContainer>
                {this.props.user && this.props.user.profiles.map(this.renderProfile)}
            </StyledProfilesContainer>
        )
    }
    

    render(){
        return (
        
            <StyledProfilePage>
                <StyleHeadline>
                    Who's watching?
                </StyleHeadline>
                {this.renderProfilesList()}
                <StyledBtn>Manage Profiles</StyledBtn>
            </StyledProfilePage>
        )
    }
}

const mapStateToProps = state => {
    return { user: state.currentUser,profile: state.currentProfile };
  };
  
export default connect(mapStateToProps,{currentProfile})(ProfilesPage);
  