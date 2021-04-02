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

export const mostPopularMovies = movies => {
  // Return an action
  return {
    type: 'POPULAR_MOVIES',
    payload: movies
  };
};

