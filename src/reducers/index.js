import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";

// Reducer = Cashier
// Combine the reducers to a "rootReducer" and export it.

const rootReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer
});

export default rootReducers;
