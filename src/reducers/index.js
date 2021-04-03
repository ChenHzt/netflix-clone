import { combineReducers } from 'redux';
import {currentUserReducer,currentProfileReducer} from './authReducers'
import {popularMoviesReducer, moviesByGenreReducer} from './moviesReducers'


  export default combineReducers({
    currentUser: currentUserReducer,
    currentProfile: currentProfileReducer,
    popularMovies: popularMoviesReducer,
    moviesByGenres: moviesByGenreReducer
  });