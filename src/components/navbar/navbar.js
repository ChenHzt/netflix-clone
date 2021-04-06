import { StyledLogo, StyledNavbar, StyledNavLink, StyledNavRight } from './style';
import { connect } from 'react-redux';
import React from 'react';
import SearchField from '../searchField/index'
import DropDown from '../dropdown';
import ProfileDropDownItem from '../profileDropDownItem';
import { currentProfile } from '../../actions';

function Navbar(props) {

    const onOptionClicked = (index) =>{
        props.currentProfile(props.user.profiles[index]);
    }
    return(
        <StyledNavbar>
        <StyledLogo to={props.user?'/browse':'/'} src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' />
        <StyledNavRight>
            {!props.user &&
            <>
                <StyledNavLink to='/signup'>Sign Up</StyledNavLink>
                <StyledNavLink to='/login'>Login</StyledNavLink>
            </> }
            
            {props.user &&
            <>
                {
                    props.profile &&
                    <DropDown onOptionClicked={onOptionClicked} selectedIndex={props.user.profiles.findIndex(p => {return p.id === props.profile.id})}>
                    {
                        props.user.profiles
                        .map((profile) =><ProfileDropDownItem profile={profile}/>)
                    }
                </DropDown>
                }
                <StyledNavLink to='/myList'>My List</StyledNavLink>
                <StyledNavLink to='/browseMovies'>Movies</StyledNavLink>
                <StyledNavLink to='/browseTvShows'>TV Shows</StyledNavLink>
                <StyledNavLink onClick={props.handleSignout} to='/'>Sign Out</StyledNavLink>
                <SearchField onSearchChange={props.onSearchChange}/>
            </> }

        </StyledNavRight>
    </StyledNavbar>
    )

}

const mapStateToProps = state => {
    console.log(state.currentUser);
    return {
        user: state.currentUser,
        profile: state.currentProfile
    };
};

export default connect(mapStateToProps,{currentProfile})(Navbar);
