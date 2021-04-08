import { firestore } from '../firebase'


export const currentUser = user => {
    return {
      type: 'CURRENT_USER',
      payload: user
    };
  };
  
  export const currentProfile = profile => {
    sessionStorage.setItem('currentProfile',JSON.stringify(profile));
    // Return an action
    return {
      type: 'CURRENT_PROFILE',
      payload: profile
    };
  };
  
  export const createNewProfile = (userId,profile) => async dispatch => {
    const newDoc = await firestore.collection(`users/${userId}/profiles`).add(profile);
    dispatch({ type: 'CREATE_NEW_PROFILE', payload: newDoc });
    
  }
  