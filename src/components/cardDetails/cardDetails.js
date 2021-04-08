import React, { useState } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { addToCurrentProfileStartedWatchingList, addToCurrentProfileWatchList, currentDisplayedDetails } from '../../actions';
import MovieDetails from '../../pages/movieDetails';
import { RoundBtn } from '../../style';
import { StyledButtonsContainer, StyledCard, StyledCardImg, StyledTitle } from './style';
const movieDetailsModalStyle = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        padding: '0px',
        backgroundColor: 'rgb(24,24,24)',
        color: 'white',
        borderRadius: '10px',
        marginRight: '-50%',
        height: 'fit-content',
        width: '60%',
        minWidth:'400px',
        transform: 'translate(-50%, -50%)',
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)'
    }
};
Modal.setAppElement('#root');

function CardDetails(props) {
    const [isHovered, setIsHovered] = useState(false);
    const [showMovieDetailsModal, setShowMovieDetailsModal] = useState(false);
    const [playVideo, setPlayVideo] = useState(false);

    

    const closeModal = () => {
        setShowMovieDetailsModal(false);
        setIsHovered(false);
    };

    const openDetails = async () => {
        await props.currentDisplayedDetails(props.movie.id);
        setShowMovieDetailsModal(true);
        sessionStorage.setItem('currentDisplayed', JSON.stringify(props.currentDisplayed));
    }

    
    const isInWatchList =  () => {
        const temp =  props.watchList.some((movie) => movie.id === props.movie.id)
        return temp;
    }

    const inWatchList = isInWatchList()?'check':'plus';

    const addMovieToProfileList = async (movie) => {
        try {
            await props.addToCurrentProfileWatchList(props.user.uid, props.profile.id, movie);
        }
        catch (e) {
            console.log(e);
        }
    }

    const addMovieToStartedWatchingList = async (movie) => {
        try {
            await props.currentDisplayedDetails(props.movie.id);
            setShowMovieDetailsModal(false)
            await props.addToCurrentProfileStartedWatchingList(props.user.uid, props.profile.id, movie);
            setPlayVideo(true);

        }
        catch (error) {
            console.error(error);
        }
    }

    const RenderCardIfHovered = () => {
        if(isHovered)
        return (
            <>
                <StyledTitle>{props.movie.title}</StyledTitle>
                <StyledButtonsContainer>
                    <RoundBtn onClick={() => addMovieToStartedWatchingList(props.movie)}><i className="fas fa-play"></i></RoundBtn>
                    <RoundBtn onClick={() => addMovieToProfileList(props.movie)}><i className={`fas fa-${inWatchList}`}></i></RoundBtn>
                    <RoundBtn><i className="far fa-thumbs-up"></i></RoundBtn>
                    <RoundBtn ><i className="far fa-thumbs-down"></i></RoundBtn>
                    <RoundBtn onClick={() => openDetails()}><i className="fas fa-angle-down"></i></RoundBtn>
                </StyledButtonsContainer>

            </>
        )
        return (<></>)
    }

    const RenderMovieDetailsModal = () =>{
        if(showMovieDetailsModal)
        return (
            <Modal
                isOpen={showMovieDetailsModal}
                preventScroll={false}
                onRequestClose={closeModal}
                style={movieDetailsModalStyle}
                contentLabel="Movie details modal">
                <MovieDetails movie={props.movie} playVideo={() =>addMovieToStartedWatchingList(props.movie) } addMovieToProfileList={() => addMovieToProfileList(props.movie)} />
            </Modal>
        )
        return (<></>)

    }

    const RenderPlayVideo = () => {
        if(playVideo)
        return (
            <Redirect to={`watch/${props.currentDisplayed.videos.results[0].key}`} />
        )
        return (<></>)

    }

    

    return (
        <StyledCard onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} isHovered={isHovered} className="cardDetails">
            <StyledCardImg src={props.movie.backdrop_path} />
            <RenderCardIfHovered/>
            <RenderMovieDetailsModal/>
            <RenderPlayVideo/>
        </StyledCard>
    )
}


const mapStateToProps = state => {
    return { currentDisplayed: state.currentDisplayed, user: state.currentUser, profile: state.currentProfile,watchList:state.watchList };
};

export default connect(
    mapStateToProps,
    { currentDisplayedDetails, addToCurrentProfileWatchList, addToCurrentProfileStartedWatchingList })(CardDetails);
