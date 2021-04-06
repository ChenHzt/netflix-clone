import {StyledSearchBtn,StyledSearchField,StyledSearchInput} from './style'
import {searchTerm,fetchSearchResults} from '../../actions'
import { connect } from 'react-redux';
import React,{useEffect,useState} from 'react';
import CardDetails from '../../components/cardDetails/cardDetails'
import {StyledGridContainer} from './style'
import { Redirect } from 'react-router';
import CardsGrid from '../../components/cardsGrid';
function SearchResultsPage(props) {
    const [term, setTerm] = useState("programming");

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
        console.log(props.searchResults)
      }, [debouncedTerm]);

    
    return (
        <CardsGrid>
            {!props.searchTerm && <Redirect to='/browse'/> }
            {props.searchResults.map((movie) => <CardDetails  movie={movie}/>)}
        </CardsGrid>
    )
}

const mapStateToProps = state => {
    console.log(state);
    return {
        searchTerm: state.searchTerm,
        searchResults:state.searchResults
    };
};

export default connect(mapStateToProps,{searchTermAction:searchTerm,fetchSearchResults})(SearchResultsPage);
