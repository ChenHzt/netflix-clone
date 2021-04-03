import cloneDeep from 'lodash.clonedeep';

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