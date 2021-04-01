import { combineReducers } from 'redux';

const currentUserReducer = (currentUser = null, action) => {
    if (action.type === 'CURRENT_USER') {
      return action.payload;
    }
  
    return currentUser;
  };

  export default combineReducers({
    currentUser: currentUserReducer
  });