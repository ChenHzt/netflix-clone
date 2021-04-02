import '../App.css';
import { HomePageInfoStripe } from '../components/homePageInfoStripe'
import React, { useState } from 'react';
import sectionsData from '../staticData/homePageSections.json'
import {Link} from "react-router-dom";


export default function Card({movie}) {
    console.log(movie);
    const imageUrl = 'https://image.tmdb.org/t/p/original/uQtqiAu2bBlokqjlURVLEha6zoi.jpg'
    const style= {
        background:`url(https://image.tmdb.org/t/p/original${movie.backdrop_path}) no-repeat center center/cover`,
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