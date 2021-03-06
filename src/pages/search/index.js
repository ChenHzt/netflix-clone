import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { fetchSearchResults, searchTerm } from '../../actions';
import CardDetails from '../../components/cardDetails/cardDetails';
import CardsGrid from '../../components/cardsGrid';
function SearchResultsPage(props) {
    console.log(props);
    const [debouncedTerm, setDebouncedTerm] = useState(props.searchTerm);

    useEffect(() => {
        const timerId = setTimeout(() => {
          setDebouncedTerm(props.searchTerm);
        }, 1000);
    
        return () => {
          clearTimeout(timerId);
        };
      }, [props.searchTerm]);


    useEffect(() => {
        const search = async () =>{
            await props.fetchSearchResults(props.searchTerm);
        }
        if (debouncedTerm) search();
      }, [debouncedTerm]);

    return (
        <CardsGrid>
            {!props.searchTerm && <Redirect to='/browse'/> }
            {props.searchResults.map((movie) => <CardDetails  movie={movie}/>)}
        </CardsGrid>
    )
}

const mapStateToProps = state => {
    return {
        searchTerm: state.searchTerm,
        searchResults:state.searchResults
    };
};

export default connect(mapStateToProps,{searchTermAction:searchTerm,fetchSearchResults})(SearchResultsPage);
