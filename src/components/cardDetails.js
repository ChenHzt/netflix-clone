import '../App.css';
import { HomePageInfoStripe } from '../components/homePageInfoStripe'
import React, { useState } from 'react';
import sectionsData from '../staticData/homePageSections.json'
import {Link} from "react-router-dom";

export default function CardDetails() {
    const imageUrl = 'https://image.tmdb.org/t/p/original/uQtqiAu2bBlokqjlURVLEha6zoi.jpg'
    const style= {
        background:`url(${imageUrl}) no-repeat center center/cover`,
        height:'130px',
        width:'230px',
        borderRadius:'3px',
        margin:'4px'
    }
    return (
        <div style={style} className="card">
            
        </div>
    )
}