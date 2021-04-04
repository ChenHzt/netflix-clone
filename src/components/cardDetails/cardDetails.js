// import '../App.css';
import { HomePageInfoStripe } from '../homePageInfoStripe'
import React, { useState } from 'react';
import sectionsData from '../../staticData/homePageSections.json'
import {Link} from "react-router-dom";
import {RoundBtn} from '../../style'
import {CardImg,ButtonsContainer,Title} from './style'
// import React,{useState} from 'react';

export default function CardDetails({movie}) {
    const [isHovered,setIsHovered] = useState(false);

    return (
        <div onMouseEnter={()=>setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="cardDetails">
            <CardImg src={movie.backdrop_path}/>
            {isHovered && <Title>{movie.title}</Title>}
            {isHovered &&
                <ButtonsContainer>
                    <RoundBtn><i class="fas fa-play"></i></RoundBtn>
                    <RoundBtn><i class="fas fa-plus"></i></RoundBtn>
                    <RoundBtn><i class="far fa-thumbs-up"></i></RoundBtn>
                    <RoundBtn><i class="far fa-thumbs-down"></i></RoundBtn>
                </ButtonsContainer>
            }
        </div>
    )
}