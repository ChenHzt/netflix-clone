// import '../../App.css';
import { HomePageInfoStripe } from '../../components/homePageInfoStripe/homePageInfoStripe'
import React, { useState } from 'react';
import sectionsData from '../../staticData/homePageSections.json'   
import Jumbotron from '../../components/jumbotron/jumbotron';
import { Title, Description, FlexContainer } from './style'
import {HorizontalRule,Logo,Navbar,NavRight,NavLink} from '../../style'

export default function HomePage() {
    return (
        <div className="homePage">
            <Navbar>
                <Logo src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'/>
                <NavRight>
                    <NavLink to='/signup'>Sign Up</NavLink>
                    <NavLink to='/login'>Login</NavLink>
                </NavRight>
            </Navbar>
            <Jumbotron backgroundImg={'https://assets.nflxext.com/ffe/siteui/vlv3/92bb3a0b-7e91-40a0-b27b-f2c3ac9ef6e4/ab38bb40-7ffb-44a0-b628-90803ccd534b/IL-en-20210322-popsignuptwoweeks-perspective_alpha_website_small.jpg'}>
                <Title fontSize={'3.5rem'}>Unlimited movies, TV shows, and more.</Title>
                <Title fontSize={'2.5rem'}>Watch anywhere. Cancel anytime.</Title>
                <Description>Ready to watch? Enter your email to create or restart your membership.</Description>
            </Jumbotron>
            <FlexContainer>
                {
                    sectionsData.map((section) =>
                        <div key={section.id}>
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

            </FlexContainer>

        </div>
    )
}