import React, { useState } from 'react';
import { RoundBtn } from '../../style'
import { CardImg, ButtonsContainer, Title, Card } from './style'
import { currentDisplayedDetails } from '../../actions'
import { connect } from 'react-redux';
import Modal from 'react-modal';
import MovieDetails from '../../pages/movieDetails';
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        padding:'0px',
        backgroundColor:'rgb(24,24,24)',
        color:'white',
        borderRadius:'10px',
        marginRight: '-50%',
        height: 'fit-content',
        width: '50%',
        transform: 'translate(-50%, -50%)',
    },

};
Modal.setAppElement('#root');

function CardDetails(props) {
    const [isHovered, setIsHovered] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const closeModal = () => {
        setShowModal(false);
        setIsHovered(false);
    };
    const openDetails = async () => {
        console.log('dededededede');
        await props.currentDisplayedDetails(props.movie.id);
        setShowModal(true);

    }
    return (
        <Card onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} isHovered={isHovered} className="cardDetails">
            <CardImg src={props.movie.backdrop_path} />
            {isHovered && <Title>{props.movie.title}</Title>}
            {isHovered &&
                <ButtonsContainer>
                    <RoundBtn><i className="fas fa-play"></i></RoundBtn>
                    <RoundBtn><i className="fas fa-plus"></i></RoundBtn>
                    <RoundBtn><i className="far fa-thumbs-up"></i></RoundBtn>
                    <RoundBtn><i className="far fa-thumbs-down"></i></RoundBtn>
                    <RoundBtn onClick={() => openDetails()}><i className="fas fa-angle-down"></i></RoundBtn>
                </ButtonsContainer>
            }
            {showModal && <Modal
                isOpen={showModal}
                preventScroll={false}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Movie details modal">
                <MovieDetails movie={props.movie} />
            </Modal>}
        </Card>
    )
}

const mapStateToProps = state => {
    return { currentDisplayed:state.currentDisplayedDetails };
};

export default connect(
    mapStateToProps,
{ currentDisplayedDetails })(CardDetails);

