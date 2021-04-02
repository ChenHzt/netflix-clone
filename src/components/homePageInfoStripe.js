import '../App.css';
import axios from 'axios';
import React, { useState } from 'react';

export function HomePageInfoStripe({ headline, info, videoUrl, direction }) {
    return (
            <div style={{flexDirection:direction}} className={`homePageInfoSection`}>
                <div className="homePageInfoSection__text">
                    <h2>{headline}</h2>
                    <p>{info}</p>
                </div>
                
                <video className="homePageInfoSection__image" src={videoUrl} autoPlay muted></video>
                
            </div>

    )
}