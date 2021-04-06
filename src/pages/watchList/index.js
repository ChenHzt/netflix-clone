import CardsGrid from '../../components/cardsGrid'
import { connect } from 'react-redux';
import React,{useEffect,useState} from 'react';
import {fetchCurrentProfileWatchList }from '../../actions'
import CardDetails from '../../components/cardDetails/cardDetails'
function WatchList(props) {
  

    useEffect( () => {
        const getData = async() =>{
            await props.fetchCurrentProfileWatchList(props.user.uid,props.profile.id);
        }
        getData();
      }, []);

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
