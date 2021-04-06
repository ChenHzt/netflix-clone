import axios from '../api/axios-tmdb';
import tmbdGenres from '../staticData/tmdb_genres.json'
import { firestore } from '../firebase'

const api_key = '2fccd7c26288d8a6ba121a000c6df8ec';

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
  const response = await axios.get(`/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&page=1`);

  dispatch({ type: 'POPULAR_MOVIES', payload: response.data.results });
};

export const currentDisplayedDetails = (id) => async dispatch => {
  console.log(`id is:${id}`);
  const response = await axios.get(`/movie/${id}?api_key=${api_key}&append_to_response=similar,videos,credits`);
  console.log(response);
  dispatch({ type: 'CURRENT_DISPLAYED_DETAILS', payload: response.data });
}


// export const movieByGenre = (genre) => async dispatch => {
//   const genreObj = tmbdGenres.genres.find((gen) => gen.name.toLowerCase()===genre);
//   if(!genreObj) return null;
//   const genreCode = genreObj.id;
//   const response = await axios.get(`/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&page=1&with_genres=${genreCode}`);
//   dispatch({ type: `FETCH_MOVIES_BY_GENRE`, payload: {genre,movies:response.data.results} });
// };


export const moviesByGenresAction = () => async dispatch => {

  const movies = await Promise.all(tmbdGenres.genres.map(async (genre) => {
    const temp = { genre: { ...genre } };
    const response = await axios.get(`/discover/movie?api_key=${api_key}&language=en-US&include_video=true&with_genres=${genre.id}`);
    temp.movies = response.data.results;
    return temp;
  }))
  dispatch({ type: `FETCH_MOVIES_BY_GENRE`, payload: movies });
};

const addDocumentToFirestore = async (pathToCollection,collectionName,newDocumentId,newDocument) => {
  const docRef = firestore.doc(`${pathToCollection}/${collectionName}/${newDocumentId}`);
  const snapshot = await docRef.get();
  if (!snapshot.exists) {
    await docRef.set({
      ...newDocument
    });
  }
  const newDoc = await docRef.get();
  console.log(newDoc);
  return newDoc;
}

export const searchTerm = search => {
  // Return an action
  return {
    type: 'CURRENT_SEARCH_TERM',
    payload: search
  };
};

export const fetchSearchResults = (search) => async dispatch => {
  const str = `/search/movie?api_key=${api_key}&language=en-US&query=${search.replace(' ', '%20')}&include_adult=false`;
  const response = await axios.get(`/search/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&query=${search.replace(' ', '%20')}&include_adult=false`);
  console.log(str);
  dispatch({ type: 'SEARCH_RESULTS', payload: response.data.results });
}

export const fetchCurrentProfileWatchList = (userId, profileId) => async dispatch => {
  const snapshot = await firestore.collection(`users/${userId}/profiles/${profileId}/watchList`).get();
  const watchList = snapshot.docs.map(doc => { return { ...doc.data() } });
  console.log(watchList);
  dispatch({ type: 'WATCH_LIST', payload: watchList });
}

export const addToCurrentProfileWatchList = (userId, profileId,movie) => async dispatch => {
  addDocumentToFirestore(`users/${userId}/profiles/${profileId}`,'watchList',movie.id,movie);
  dispatch({ type: 'ADD_TO_WATCH_LIST', payload: movie });
}

export const fetchCurrentProfileStartedWatching = (userId, profileId) => async dispatch => {
  const snapshot = await firestore.collection(`users/${userId}/profiles/${profileId}/startedWatching`).get();
  const moviesList = snapshot.docs.map(doc => {console.log(doc); return { ...doc.data() } });

  dispatch({ type: 'STARTED_WATCHING_LIST', payload: moviesList });
}

export const addToCurrentProfileStartedWatchingList = (userId, profileId,movie) => async dispatch => {
  addDocumentToFirestore(`users/${userId}/profiles/${profileId}`,'startedWatching',movie.id,movie);
  dispatch({ type: 'ADD_TO_STARTED_WATCHING_LIST', payload: movie });
}

