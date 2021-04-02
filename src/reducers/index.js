import { combineReducers } from 'redux';

const currentUserReducer = (currentUser = null, action) => {
  console.log(currentUser,action);

    if (action.type === 'CURRENT_USER') {
      return action.payload;
    }
  
    return currentUser;
  };

const currentProfileReducer = (currentProfile = null, action) => {
  console.log(currentProfile,action);
    if (action.type === 'CURRENT_PROFILE') {
      return action.payload;
    }
  
    return currentProfile;
  };

  export default combineReducers({
    currentUser: currentUserReducer,
    currentProfile: currentProfileReducer,
  });