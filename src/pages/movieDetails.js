import '../App.css';
import React from 'react';
import { connect } from 'react-redux';
import { RoundBtn, RectengleBtn } from '../style'
import styled from 'styled-components';

const ShowCase = styled.div`
    background:url(https://image.tmdb.org/t/p/original${props => props.src}) no-repeat center center/cover;
    width:100%;
    
    min-height:300px;
`

function MovieDetails(props) {
    console.log(props);
    return (
        <div style={{maxHeight:'80vh',overflowY:'auto'}} className="movieDetails">
            <ShowCase src={props.currentDisplayed.backdrop_path}>
                <div className="">
                    <RectengleBtn>
                        <i class="fas fa-play"></i>
                        <span>Play</span>
                    </RectengleBtn>
                    <RoundBtn><i class="fas fa-plus"></i></RoundBtn>
                    <RoundBtn><i class="far fa-thumbs-up"></i></RoundBtn>
                    <RoundBtn><i class="far fa-thumbs-down"></i></RoundBtn>
                </div>
            </ShowCase>
            <div className="">
                <span>{props.currentDisplayed.release_date.slice(0,4)}, </span>
                <span>{props.currentDisplayed.runtime} minutes</span>
                <p>{props.currentDisplayed.overview}</p>
                
                <div className="">
                    <p>Cast: {props.currentDisplayed.credits.cast.slice(0,4).map(actor => <span>{actor.name}, </span>)}</p>
                    <p>Genres: {props.currentDisplayed.genres.map(genre => <span>{genre.name}, </span>)}</p>
                </div>

                <div className="">
                    
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = state => {
    console.log(state);
    return { currentDisplayed:state.currentDisplayed };
};

export default connect(mapStateToProps)(MovieDetails);

