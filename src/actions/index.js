// Action creator
export const currentUser = user => {
    // Return an action
    return {
      type: 'CURRENT_USER',
      payload: user
    };
  };
  