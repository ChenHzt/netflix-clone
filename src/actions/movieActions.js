import axios from '../api/axios-tmdb';
import tmbdGenres from '../staticData/tmdb_genres.json';
import {api_key} from '../api/apiKey'
import { firestore } from '../firebase'

const addDocumentToFirestore = async (pathToCollection,collectionName,newDocumentId,newDocument) => {
    const docRef = firestore.doc(`${pathToCollection}/${collectionName}/${newDocumentId}`);
    const snapshot = await docRef.get();
    let flag = false; 
    if (!snapshot.exists) {
      await docRef.set({
        ...newDocument
      });
      flag=true;
    }
    return flag;
  }
  
  

export const mostPopularMovies = () => async dispatch => {
    const response = await axios.get(`/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&page=1`);
  
    dispatch({ type: 'POPULAR_MOVIES', payload: response.data.results });
  };
  
  export const currentDisplayedDetails = (id) => async dispatch => {
    console.log(`id is:${id}`);
    const response = await axios.get(`/movie/${id}?api_key=${api_key}&append_to_response=similar,videos,credits`);
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
  
    dispatch({ type: 'WATCH_LIST', payload: watchList });
  }
  
  export const addToCurrentProfileWatchList = (userId, profileId,movie) => async dispatch => {
    const isAdded = await addDocumentToFirestore(`users/${userId}/profiles/${profileId}`,'watchList',movie.id,movie);
    const temp = isAdded?'ADD_TO_WATCH_LIST' :'DO_NOTHING';
    dispatch({ type:temp, payload: movie });
  }
  
  export const fetchCurrentProfileStartedWatching = (userId, profileId) => async dispatch => {
    const snapshot = await firestore.collection(`users/${userId}/profiles/${profileId}/startedWatching`).get();
    const moviesList = snapshot.docs.map(doc => { return { ...doc.data() } });
  
    dispatch({ type: 'STARTED_WATCHING_LIST', payload: moviesList });
  }
  
  export const addToCurrentProfileStartedWatchingList = (userId, profileId,movie) => async dispatch => {
    addDocumentToFirestore(`users/${userId}/profiles/${profileId}`,'startedWatching',movie.id,movie);
    dispatch({ type: 'ADD_TO_STARTED_WATCHING_LIST', payload: movie });
  }
  
  export const fetchCastomizedMoviesList = (userId, profileId) => async dispatch => {
    const startedWatchingSnapshot = await firestore.collection(`users/${userId}/profiles/${profileId}/startedWatching`).get();
    const startedWatchingList = startedWatchingSnapshot.docs.map(doc => {return { ...doc.data() } });
    const snapshot = await firestore.collection(`users/${userId}/profiles/${profileId}/watchList`).get();
    const watchList = snapshot.docs.map(doc => { return { ...doc.data() } });
  
    const result = [];
    startedWatchingList.slice(0,2).forEach(async (movie) => {
      const response = await axios.get(`/movie/${movie.id}?api_key=${api_key}&append_to_response=similar,videos,credits`);
      result.push({title:`Because you watched "${movie.title}"`,moviesList:response.data.similar.results})
    })
    watchList.slice(0,2).forEach(async (movie) => {
      const response = await axios.get(`/movie/${movie.id}?api_key=${api_key}&append_to_response=similar,videos,credits`);
      result.push({title:`Because "${movie.title}" is in your watching list`,moviesList:response.data.similar.results})
    })
    console.log(result);
    dispatch({ type: 'CUSTOMISED_MOVIES_LIST', payload: result });
  }
  
  export const fetchActorSearchResults = (actorId) => async dispatch => {
    const str = `/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_crew=${actorId}`;
    // const response = await axios.get(`/search/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&query=${search.replace(' ', '%20')}&include_adult=false`);
    console.log(str);
    const response = await axios.get(str);
    console.log(response);
    dispatch({ type: 'SEARCH_RESULTS', payload: response.data.results });
  }