import '../App.css';
import React from 'react';
import { connect } from 'react-redux';
import { RoundBtn, RectengleBtn } from '../style'
import styled from 'styled-components';
import { SimilarCard } from '../components/similarCard/similarCard'
import YouTube from "react-youtube";
import YouTubeWrapper from '../components/youtubeWrapper'
const ShowCase = styled.div`
    background:url(https://image.tmdb.org/t/p/original${props => props.src}) no-repeat center center/cover;
    width:100%;
    min-height:300px;
`

const SimilarsContainer = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:space-around;
    

`
const BtnsContainer = styled.div`
    display:flex;
`



function MovieDetails(props) {
    console.log(props);
    const isVideo = () => {
        if (props.currentDisplayed.videos.results && props.currentDisplayed.videos.results[0].site === 'YouTube') {
            console.log(props.currentDisplayed.videos.results[0].key);
            return <YouTubeWrapper youtubeId={props.currentDisplayed.videos.results[0].key} />;

        }
    }
    return (
        <div style={{ maxHeight: '80vh', overflowY: 'auto' }} className="movieDetails">
            {isVideo()}
            <BtnsContainer>
                <RectengleBtn>
                    <i class="fas fa-play"></i>
                    <span>Play</span>
                </RectengleBtn>
                <RoundBtn onClick={props.addMovieToProfileList}><i class="fas fa-plus"></i></RoundBtn>
                <RoundBtn><i class="far fa-thumbs-up"></i></RoundBtn>
                <RoundBtn><i class="far fa-thumbs-down"></i></RoundBtn>
            </BtnsContainer>
            {/* <ShowCase src={props.currentDisplayed.backdrop_path}>
                
            </ShowCase> */}
            <div className="">
                <span>{props.currentDisplayed.release_date.slice(0, 4)}, </span>
                <span>{props.currentDisplayed.runtime} minutes</span>
                <p>{props.currentDisplayed.overview}</p>

                <div className="">
                    <p>Cast: {props.currentDisplayed.credits.cast && props.currentDisplayed.credits.cast.slice(0, 4).map(actor => <span>{actor.name}, </span>)}</p>
                    <p>Genres: {props.currentDisplayed.genres.map(genre => <span>{genre.name}, </span>)}</p>
                </div>
                <hr />
                <p>More Like This</p>
                <SimilarsContainer>
                    {props.currentDisplayed.similar.results.map((similar) => <SimilarCard details={similar} />)}
                </SimilarsContainer>
            </div>
        </div>
    )
}


const mapStateToProps = state => {
    console.log(state);
    return { currentDisplayed: state.currentDisplayed };
};

export default connect(mapStateToProps)(MovieDetails);

