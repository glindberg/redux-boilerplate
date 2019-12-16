const loggedReducer = (state = false, action) => {
  switch (action.type) {
    case "SIGN_IN":
      //returns opposite of (false)
      return !state;
    default:
      return state;
  }
};

export default loggedReducer;
