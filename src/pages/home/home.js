import React from 'react';
import { HomePageInfoStripe } from '../../components/homePageInfoStripe/homePageInfoStripe';
import Jumbotron from '../../components/jumbotron/jumbotron';
import sectionsData from '../../staticData/homePageSections.json';
import { HorizontalRule, Logo, Navbar, NavLink, NavRight } from '../../style';
import { StyledDescription, StyledFlexContainer, StyledTitle } from './style';

export default function HomePage() {

    return (
        <div className="homePage">
            <Navbar>
                <Logo to='/' src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'/>
                <NavRight>
                    <NavLink to='/signup'>Sign Up</NavLink>
                    <NavLink to='/login'>Login</NavLink>
                </NavRight>
            </Navbar>
            <Jumbotron backgroundImg={'https://assets.nflxext.com/ffe/siteui/vlv3/92bb3a0b-7e91-40a0-b27b-f2c3ac9ef6e4/ab38bb40-7ffb-44a0-b628-90803ccd534b/IL-en-20210322-popsignuptwoweeks-perspective_alpha_website_small.jpg'}>
                <StyledTitle fontSize={'3.5rem'}>Unlimited movies, TV shows, and more.</StyledTitle>
                <StyledTitle fontSize={'2.5rem'}>Watch anywhere. Cancel anytime.</StyledTitle>
                <StyledDescription>Ready to watch? Enter your email to create or restart your membership.</StyledDescription>
            </Jumbotron>
            <StyledFlexContainer>
                {
                    sectionsData.map((section) =>
                        <div key={'section'+section.id}>
                                <HomePageInfoStripe
                                    headline={section.headline}
                                    info={section.info}
                                    videoUrl={section.videoUrl}
                                    direction={section.direction}
                                />
                            <HorizontalRule/>
                        </div>
                    )
                }

            </StyledFlexContainer>

        </div>
    )
}