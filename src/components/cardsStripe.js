import '../App.css';
import React, { useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import Card from './card/card'
import CardDetails from './cardDetails/cardDetails'

export default function CardStripe({ title, movies }) {

    return (
        <div style={{margin:'70px 0'}} className="stripe">
            <p>{title}</p>
            <Splide options={{
                perPage: 5,
                perMove: 1,
                pagination: false,
                type: 'loop',
            }}>
                {
                    movies
                    .sort( () => 0.5 - Math.random())
                    .map(movie => <SplideSlide><CardDetails movie={movie}/></SplideSlide>)
                }
            </Splide>
        </div>
    )
}