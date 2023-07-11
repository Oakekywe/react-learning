import { combineReducers } from "redux";
import loginReducer from "./reducers/loginReducer";

const reducers = combineReducers({
  loggedIn: loginReducer,
});

export default reducers;
