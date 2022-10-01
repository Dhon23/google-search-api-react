import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import { marksReducer } from "./reducer";

// const combined = combineReducers({ marksReducer });
const store = createStore(marksReducer, applyMiddleware(thunk));
export default store;
