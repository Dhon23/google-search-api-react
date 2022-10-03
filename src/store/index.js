import {
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { marksReducer } from "./reducer";

const store = createStore(marksReducer, applyMiddleware(thunk));
export default store;
