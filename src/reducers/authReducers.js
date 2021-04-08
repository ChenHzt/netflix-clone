// import cloneDeep from 'lodash/clonedeep'
const cloneDeep = require('lodash/cloneDeep')



export const currentUserReducer = (currentUser = null, action) => {
    if (action.type === 'CURRENT_USER') {
      return action.payload || null;
    }
    if (action.type === 'CREATE_NEW_PROFILE'){
      const copy = cloneDeep(currentUser);
      copy.profiles.push(action.payload);
      return copy;
    }
    return currentUser;
  };

export const currentProfileReducer = (currentProfile = null, action) => {
    if (action.type === 'CURRENT_PROFILE') {
      return action.payload;
    }
  
    return currentProfile;
  };

