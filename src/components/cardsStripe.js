import '../App.css';
import { HomePageInfoStripe } from '../components/homePageInfoStripe'
import React, { useState } from 'react';
import sectionsData from '../staticData/homePageSections.json'
import { Link } from "react-router-dom";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import Card from './card'

export default function CardStripe({ title, movies }) {

    return (
        <div className="stripe">
            <p>{title}</p>
            <Splide options={{
                perPage: 5,
                perMove: 1,
                pagination: false,
                type: 'loop',
            }}>
                {
                    movies.map(movie => <SplideSlide><Card movie={movie}/></SplideSlide>)
                }
            </Splide>
        </div>
    )
}