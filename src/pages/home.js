import '../App.css';
import { HomePageInfoStripe } from '../components/homePageInfoStripe'
import React, { useState } from 'react';
import sectionsData from '../staticData/homePageSections.json'
import {Link} from "react-router-dom";

export default function HomePage() {
    return (
        <div className="homePage">
            <div className="navbar">
                <div className="logo">
                   <img src="../images/logo.png" alt=""/>
                </div>
                <div className="navbar__right">
                    <Link to='/signup'>Sign Up</Link>
                    <Link to='/login'>Login</Link>
                </div>
            </div>
            <div className="jumbotron">
                <div className="jumbotronImg"></div>
                <div className="jumbotronContent">

                    <div className="jumbotron__header">
                        <h1 className="jumbotron__title">Unlimited movies, TV shows, and more.</h1>
                        <h3 className="jumbotron__subtitle">Watch anywhere. Cancel anytime.</h3>
                        <p className="jumbotron__info">Ready to watch? Enter your email to create or restart your membership.</p>
                    </div>

                </div>
            </div>
            <div className="flex-container">
                <div className="homePageInfoSectionsContainer">
                    {
                        sectionsData.map((section) =>
                            <div key={section.id}>
                                <div >
                                    <HomePageInfoStripe
                                        headline={section.headline}
                                        info={section.info}
                                        videoUrl={section.videoUrl}
                                        direction={section.direction}
                                    />
                                </div>
                                <hr className='horizontal-divider' />
                            </div>
                        )
                    }
                </div>
            </div>

        </div>
    )
}