import React, { useState } from 'react';
import { RoundBtn } from '../../style'
import { CardImg, ButtonsContainer, Title, Card } from './style'
import { currentDisplayedDetails, addToCurrentProfileStartedWatchingList, addToCurrentProfileWatchList } from '../../actions'
import { connect } from 'react-redux';
import Modal from 'react-modal';
import MovieDetails from '../../pages/movieDetails';
import YTPlayer from '../ytplayer';
import YouTubePlayer from '../youTubePlayer';
import { Redirect } from 'react-router';
const customStyles = {
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
        width: '80%',
        transform: 'translate(-50%, -50%)',
    },
    overlay: {
        // background
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
                <Title>{props.movie.title}</Title>
                <ButtonsContainer>
                    <RoundBtn onClick={() => addMovieToStartedWatchingList(props.movie)}><i className="fas fa-play"></i></RoundBtn>
                    <RoundBtn onClick={() => addMovieToProfileList(props.movie)}><i className="fas fa-plus"></i></RoundBtn>
                    <RoundBtn><i className="far fa-thumbs-up"></i></RoundBtn>
                    <RoundBtn ><i className="far fa-thumbs-down"></i></RoundBtn>
                    <RoundBtn onClick={() => openDetails()}><i className="fas fa-angle-down"></i></RoundBtn>
                </ButtonsContainer>

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
                style={customStyles}
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
        <Card onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} isHovered={isHovered} className="cardDetails">
            <CardImg src={props.movie.backdrop_path} />
            <RenderCardIfHovered/>
            <RenderMovieDetailsModal/>
            <RenderPlayVideo/>
        </Card>
    )
}


const mapStateToProps = state => {
    return { currentDisplayed: state.currentDisplayed, user: state.currentUser, profile: state.currentProfile };
};

export default connect(
    mapStateToProps,
    { currentDisplayedDetails, addToCurrentProfileWatchList, addToCurrentProfileStartedWatchingList })(CardDetails);
