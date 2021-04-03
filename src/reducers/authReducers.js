export const currentUserReducer = (currentUser = null, action) => {
    if (action.type === 'CURRENT_USER') {
      return action.payload;
    }
  
    return currentUser;
  };

export const currentProfileReducer = (currentProfile = null, action) => {
    if (action.type === 'CURRENT_PROFILE') {
      return action.payload;
    }
  
    return currentProfile;
  };
