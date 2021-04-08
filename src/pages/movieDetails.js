import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {fetchActorSearchResults} from '../actions'
import '../App.css';
import { SimilarCard } from '../components/similarCard/similarCard';
import YouTubePlayer from '../components/youTubePlayer';
import { RectengleBtn, RoundBtn } from '../style';

const StyledShowCase = styled.div`
    background:url(https://image.tmdb.org/t/p/original${props => props.src}) no-repeat center center/cover;
    width:100%;
    min-height:300px;
`

const StyledSimilarsContainer = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:space-around;
    

`
const StyledBtnsContainer = styled.div`
    display:flex;
`


function MovieDetails(props) {
    console.log(props);
    const ShowCaseSection = () => {
        if(props.currentDisplayed.videos.results.length > 0 
            && props.currentDisplayed.videos.results[0].site === 'YouTube')
            return <YouTubePlayer id={props.currentDisplayed.videos.results[0].key} controls={true} />
        else return <StyledShowCase src={props.currentDisplayed.backdrop_path}></StyledShowCase>
    }
    
    
    return (
        <div style={{ maxHeight: '80vh', overflowY: 'auto' }} className="movieDetails">
            <ShowCaseSection/>
            <StyledBtnsContainer>
                <RectengleBtn onClick={props.playVideo}>
                    <i className="fas fa-play"></i>
                    <span>Play</span>
                </RectengleBtn>
                <RoundBtn onClick={props.addMovieToProfileList}><i className={`fas fa-${props.inWatchList? 'check':'plus'}`}></i></RoundBtn>
                <RoundBtn><i className="far fa-thumbs-up"></i></RoundBtn>
                <RoundBtn><i className="far fa-thumbs-down"></i></RoundBtn>
            </StyledBtnsContainer>

            <div className="">
                <span>{props.currentDisplayed.release_date? props.currentDisplayed.release_date.slice(0, 4):' - '}, </span>
                {props.currentDisplayed.runtime && <span>{props.currentDisplayed.runtime} minutes</span>}
                <p>{props.currentDisplayed.overview}</p>

                <div className="">
                    <p>Cast: {props.currentDisplayed.credits.cast && props.currentDisplayed.credits.cast.slice(0, 4).map(actor => <Link  to={`actorSearch/${actor.id}`}>{actor.name}, </Link>)}</p>
                    <p>Genres: {props.currentDisplayed.genres.map(genre => <span>{genre.name}, </span>)}</p>
                </div>
                <hr/>
                <p>More Like This</p>
                {props.currentDisplayed.similar.results.length>0 &&
                <StyledSimilarsContainer>
                    {props.currentDisplayed.similar.results.map((similar) => <SimilarCard details={similar} />)}
                </StyledSimilarsContainer>
                }
            </div>
        </div>
    )
}


const mapStateToProps = state => {
    console.log(state);
    return { currentDisplayed: state.currentDisplayed };
};

export default connect(mapStateToProps,{fetchActorSearchResults})(MovieDetails);

