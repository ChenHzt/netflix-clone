import { combineReducers } from 'redux';

const currentUserReducer = (currentUser = null, action) => {
    if (action.type === 'CURRENT_USER') {
      return action.payload;
    }
  
    return currentUser;
  };

const currentProfileReducer = (currentProfile = null, action) => {
    if (action.type === 'CURRENT_PROFILE') {
      return action.payload;
    }
  
    return currentProfile;
  };

const popularMoviesReducer = (popularMovies = [], action) => {
    if (action.type === 'POPULAR_MOVIES') {
      return action.payload;
    }
  
    return popularMovies;
  };

  export default combineReducers({
    currentUser: currentUserReducer,
    currentProfile: currentProfileReducer,
    popularMovies: popularMoviesReducer
  });