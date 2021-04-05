
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

