import axios from '../api/axios-tmdb';
import tmbdGenres from '../staticData/tmdb_genres.json'

const api_key='2fccd7c26288d8a6ba121a000c6df8ec';

// Action creator
export const currentUser = user => {
  // Return an action
  return {
    type: 'CURRENT_USER',
    payload: user
  };
};

export const currentProfile = profile => {
  // Return an action
  return {
    type: 'CURRENT_PROFILE',
    payload: profile
  };
};

export const mostPopularMovies = () => async dispatch => {
  const response = await axios.get('/discover/movie?api_key=2fccd7c26288d8a6ba121a000c6df8ec&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');

  dispatch({ type: 'POPULAR_MOVIES', payload: response.data.results });
};



// export const movieByGenre = (genre) => async dispatch => {
//   const genreObj = tmbdGenres.genres.find((gen) => gen.name.toLowerCase()===genre);
//   if(!genreObj) return null;
//   const genreCode = genreObj.id;
//   const response = await axios.get(`/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&page=1&with_genres=${genreCode}`);
//   dispatch({ type: `FETCH_MOVIES_BY_GENRE`, payload: {genre,movies:response.data.results} });
// };


export const moviesByGenresAction = () => async dispatch => {

  const movies = await Promise.all(tmbdGenres.genres.map(async (genre) => {
    const temp = {genre:{...genre}};
    const response = await axios.get(`/discover/movie?api_key=${api_key}&language=en-US&with_genres=${genre.id}`);
    temp.movies = response.data.results;
    return temp;
  }))
  dispatch({ type: `FETCH_MOVIES_BY_GENRE`, payload: movies});
};


