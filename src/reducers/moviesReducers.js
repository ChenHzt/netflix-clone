
export const popularMoviesReducer = (popularMovies = [], action) => {
    if (action.type === 'POPULAR_MOVIES') {
      return action.payload;
    }
  
    return popularMovies;
  };

  // export const moviesByGenreReducer = (movies = {}, action) => {
  //   if (action.type === 'FETCH_MOVIES_BY_GENRE') {
  //       const moviesClone = cloneDeep(movies);
  //       moviesClone[action.payload.genre] = action.payload.movies;
  //     return moviesClone;
  //   }
  
  //   return movies;
  // };

  export const moviesByGenreReducer = (movies = [], action) => {
    if (action.type === 'FETCH_MOVIES_BY_GENRE') {
      return action.payload;
    }
    return movies;
  };

  
  export const currentDisplayedDetailsReducer = (current = null, action) => {
    if (action.type === 'CURRENT_DISPLAYED_DETAILS') {
      return action.payload;
    }
    return current;
  };

  export const currentSearchTermReducer = (current = '', action) => {
    if (action.type === 'CURRENT_SEARCH_TERM') {
      return action.payload;
    }
    return current;
  };

  export const searchResultsReducer = (results = [], action) => {
    if (action.type === 'SEARCH_RESULTS') {
      return action.payload;
    }
    return results;
  };

  export const currentProfileWatchListReducer = (results = [], action) => {
    if (action.type === 'WATCH_LIST') {
      return action.payload;
    }
    else if(action.type === 'ADD_TO_WATCH_LIST')
      return [...results,action.payload];
    return results;
  };

  export const currentProfileStartedWatchingListReducer = (results = [], action) => {
    if (action.type === 'STARTED_WATCHING_LIST') {
      return action.payload;
    }
    else if(action.type === 'ADD_TO_STARTED_WATCHING_LIST')
      return [...results,action.payload];
    return results;
  };

  export const castomizedMoviesListReducer = (results = [], action) => {
    if (action.type === 'CUSTOMISED_MOVIES_LIST') {
      return action.payload;
    }
    return results;
  };