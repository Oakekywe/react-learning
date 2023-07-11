import { combineReducers } from "redux";

const loginReducer = (state = false, action) => {
  switch (action.type) {
    case "login":
      return (state = action.payload);
    case "logout":
      return (state = action.payload);
    default:
      return state;
  }
};

const reducers = combineReducers({
  loggedIn: loginReducer,
});

export default reducers;
