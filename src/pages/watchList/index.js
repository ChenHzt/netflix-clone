import CardsGrid from '../../components/cardsGrid'
import { connect } from 'react-redux';
import React,{useEffect,useState} from 'react';
import {currentUser,fetchCurrentProfileWatchList }from '../../actions'
import CardDetails from '../../components/cardDetails/cardDetails'
function WatchList(props) {
    
    useEffect( () => {
        const getData = async() =>{
            if(props.user && props.profile)
                await props.fetchCurrentProfileWatchList(props.user.uid,props.profile.id);
        }
        getData();
      }, [props.user,props.profile]);

    return (
        <CardsGrid>
            {console.log(props.watchList)}
            {props.watchList && props.watchList.map((movie) => <CardDetails  movie={movie}/>)}
        </CardsGrid>
    )
}

const mapStateToProps = (state) =>{
    console.log(state.watchList);
    return {
        user:state.currentUser,
        profile:state.currentProfile,
        watchList:state.watchList}
}

export default connect(mapStateToProps,{fetchCurrentProfileWatchList})(WatchList);
