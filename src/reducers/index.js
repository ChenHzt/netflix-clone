import { combineReducers } from 'redux';
import {currentUserReducer,currentProfileReducer} from './authReducers'
import {popularMoviesReducer, moviesByGenreReducer,currentDisplayedDetailsReducer,currentSearchTermReducer,searchResultsReducer} from './moviesReducers'


  export default combineReducers({
    currentUser: currentUserReducer,
    currentProfile: currentProfileReducer,
    popularMovies: popularMoviesReducer,
    moviesByGenres: moviesByGenreReducer,
    currentDisplayed:currentDisplayedDetailsReducer,
    searchTerm:currentSearchTermReducer,
    searchResults:searchResultsReducer
  });