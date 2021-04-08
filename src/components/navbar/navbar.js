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

    const UserNotAuthenticatedLinks = (props) => {
        if (!props.user)
            return (
                <>
                    <StyledNavLink to='/signup'>Sign Up</StyledNavLink>
                    <StyledNavLink to='/login'>Login</StyledNavLink>
                </>
            )
        return <></>;
    }

    const UserAuthenticatedWithoutProfileLinks = (props) => {
        if (props.user)
            return (
                <>
                    <StyledNavLink onClick={props.handleSignout} to='/'>Sign Out</StyledNavLink>

                </>
            )
        return <></>;
    }
    const UserAuthenticatedLinks = (props) => {
        console.log(props);

        if (props.user && props.profile)
            return (
                <>
                    <DropDown onOptionClicked={onOptionClicked} selectedIndex={props.user.profiles.findIndex(p => { return p.id === props.profile.id })}>
                        {
                            props.user.profiles
                                .map((profile) => <ProfileDropDownItem profile={profile} />)
                        }

                    </DropDown>
                    <StyledNavLink to='/myList'>My List</StyledNavLink>
           
                    <SearchField onSearchChange={props.onSearchChange} />
                    <UserAuthenticatedWithoutProfileLinks {...props} />
                </>
            )
        return <></>;
    }

    console.log(props);
    return (
        <StyledNavbar>
            <StyledLogo to={props.user ? '/browse' : '/'} src='/static/images/logo.png' />
            <StyledNavRight>
                <UserNotAuthenticatedLinks {...props} />
                <UserAuthenticatedLinks {...props} />
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

export default connect(mapStateToProps, { currentProfile, createNewProfile })(Navbar);
