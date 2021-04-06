import React, { useState } from 'react';
import { RoundBtn } from '../../style'
import { CardImg, ButtonsContainer, Title, Card } from './style'
import { currentDisplayedDetails, currentUser } from '../../actions'
import { connect } from 'react-redux';
import Modal from 'react-modal';
import YouTubeWrapper from '../youtubeWrapper'
import { auth, firestore } from "../../firebase";
import MovieDetails from '../../pages/movieDetails';
import YTPlayer from '../ytplayer';
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
    const [showModal, setShowModal] = useState(false);
    const [playVideo, setPlayVideo] = useState(false);

    const closeModal = () => {
        setShowModal(false);
        setIsHovered(false);
    };

    // const getData = async () => {
    //     await 
    // }



    const openDetails = async () => {
        await props.currentDisplayedDetails(props.movie.id);
        setShowModal(true);

    }
    const addMovieToProfileList = async (movie) => {
        try {
            console.log(props);
            console.log(await firestore.doc(`users/${props.user.uid}/profiles/${props.profile.id}`).collection('watchList').add(movie));
        }
        catch (e) {
            console.log(e);
        }
    }

    const addMovieToStartedWatchingList = async (movie) => {
        try {
            console.log(props);

            setShowModal(false)
            await props.currentDisplayedDetails(props.movie.id);
            setPlayVideo(true);
            console.log(await firestore.doc(`users/${props.user.uid}/profiles/${props.profile.id}`).collection('startedWatching').add(movie));
        }
        catch (e) {
            console.log(e);
        }
    }

    const renderBtns = (
        <ButtonsContainer>
            <RoundBtn onClick={() => addMovieToStartedWatchingList(props.movie)}><i className="fas fa-play"></i></RoundBtn>
            <RoundBtn onClick={() => addMovieToProfileList(props.movie)}><i className="fas fa-plus"></i></RoundBtn>
            <RoundBtn><i className="far fa-thumbs-up"></i></RoundBtn>
            <RoundBtn ><i className="far fa-thumbs-down"></i></RoundBtn>
            <RoundBtn onClick={() => openDetails()}><i className="fas fa-angle-down"></i></RoundBtn>
        </ButtonsContainer>
    )
    return (
        <Card onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} isHovered={isHovered} className="cardDetails">
            <CardImg src={props.movie.backdrop_path} />
            {isHovered && <Title>{props.movie.title}</Title>}
            {isHovered && renderBtns}
            {showModal && <Modal
                isOpen={showModal}
                preventScroll={false}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Movie details modal">
                <MovieDetails movie={props.movie} addMovieToProfileList={() => addMovieToProfileList(props.movie)} />
            </Modal>}
            {playVideo && <Modal
                isOpen={playVideo}
                preventScroll={false}
                onRequestClose={() => setPlayVideo(false)}
                style={{ content: { width: '100%', height: '100%', maxWidth: '100vw', maxHeight: '100vh',    position: 'initial',padding:0,overflow:'hidden'} , overlay:{zIndex:'10',display:'flex', alignItems:'center',justifyContent:'center',}}}
                shouldCloseOnOverlayClick={true}
                contentLabel="Movie details modal">
                {/* <YouTubeWrapper youtubeId={props.currentDisplayed.videos.results[0].key} disableClicks={false}></YouTubeWrapper> */}
                <YTPlayer containerClassName={'youtubeContainerTemp'}  id={props.currentDisplayed.videos.results[0].key}/>
            </Modal>}
        </Card>
    )
}

const mapStateToProps = state => {
    return { currentDisplayed: state.currentDisplayed, user: state.currentUser, profile: state.currentProfile };
};

export default connect(
    mapStateToProps,
    { currentDisplayedDetails })(CardDetails);

// const mapStateToProps = state => {
//     console.log(state);
//     return { currentDisplayed: state.currentDisplayed };
// };
