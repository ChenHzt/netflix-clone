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
