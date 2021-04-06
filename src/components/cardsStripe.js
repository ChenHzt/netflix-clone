import '../App.css';
import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import CardDetails from './cardDetails/cardDetails'

export default function CardStripe({ title, movies,caruselType='slide' }) {

    return (
        <div className="stripe" style={{height:'220px', margin:'20px'}}>
            <p>{title}</p>
            <Splide style={{display:'flex', flexDirection:'column',alignItems:'center',overflow:'visible'}} options={{
                perMove: 1,
                autoWidth: true,
                pagination: false,
                type: caruselType,
            }}>
                {
                    movies
                    .sort( () => 0.5 - Math.random())
                    .map(movie => <SplideSlide><CardDetails  movie={movie}/></SplideSlide>)
                }
            </Splide>
        </div>
    )
}