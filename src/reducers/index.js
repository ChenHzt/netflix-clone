import { combineReducers } from 'redux';
import {currentUserReducer,currentProfileReducer} from './authReducers'
import {popularMoviesReducer,
  castomizedMoviesListReducer,
  currentProfileStartedWatchingListReducer,
  currentProfileWatchListReducer, 
  moviesByGenreReducer,
  currentDisplayedDetailsReducer,
  currentSearchTermReducer,
  searchResultsReducer} from './moviesReducers'


  export default combineReducers({
    currentUser: currentUserReducer,
    currentProfile: currentProfileReducer,
    popularMovies: popularMoviesReducer,
    moviesByGenres: moviesByGenreReducer,
    currentDisplayed:currentDisplayedDetailsReducer,
    searchTerm:currentSearchTermReducer,
    searchResults:searchResultsReducer,
    watchList:currentProfileWatchListReducer,
    startedWatching:currentProfileStartedWatchingListReducer,
    castomizedMoviesLists:castomizedMoviesListReducer
  });