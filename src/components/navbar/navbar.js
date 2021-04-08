import React from 'react';
import { connect } from 'react-redux';
import { createNewProfile, currentProfile } from '../../actions';
import DropDown from '../dropdown';
import ProfileDropDownItem from '../profileDropDownItem';
import SearchField from '../searchField/index';
import { StyledLogo, StyledNavbar, StyledNavLink, StyledNavRight } from './style';

function Navbar(props) {
    const onOptionClicked = (index) => {
        props.currentProfile(props.user.profiles[index]);
    }


    return (
        <StyledNavbar>
            <StyledLogo to={props.user ? '/browse' : '/'} src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' />
            <StyledNavRight>
                {!props.user &&
                    <>
                        <StyledNavLink to='/signup'>Sign Up</StyledNavLink>
                        <StyledNavLink to='/login'>Login</StyledNavLink>
                    </>}

                {props.user &&
                    <>
                        {
                            props.profile &&
                            <>
                                <DropDown onOptionClicked={onOptionClicked} selectedIndex={props.user.profiles.findIndex(p => { return p.id === props.profile.id })}>
                                    {
                                        props.user.profiles
                                            .map((profile) => <ProfileDropDownItem profile={profile} />)
                                    }

                                </DropDown>
                                <StyledNavLink to='/myList'>My List</StyledNavLink>
                                {/* <StyledNavLink to='/browseMovies'>Movies</StyledNavLink> */}
                                {/* <StyledNavLink to='/browseTvShows'>TV Shows</StyledNavLink> */}
                                <SearchField onSearchChange={props.onSearchChange} />
                            </>
                        }
                        <StyledNavLink onClick={props.handleSignout} to='/'>Sign Out</StyledNavLink>

                    </>}

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

export default connect(mapStateToProps, { currentProfile,createNewProfile })(Navbar);
