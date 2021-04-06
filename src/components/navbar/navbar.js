import { StyledLogo, StyledNavbar, StyledNavLink, StyledNavRight } from './style';
import { connect } from 'react-redux';
import React from 'react';
import SearchField from '../searchField/index'
function Navbar(props) {
    
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
    return {
        user: state.currentUser,
        profile: state.currentProfile
    };
};

export default connect(mapStateToProps)(Navbar);
