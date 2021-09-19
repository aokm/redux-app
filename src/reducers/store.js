import { createStore, combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import count from "./count";

const reducer = combineReducers({
  count,
  form: formReducer,
});

const store = createStore(reducer);

export default store;
