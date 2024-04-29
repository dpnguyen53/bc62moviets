import { combineReducers } from "redux";
import listMovieReducer from "./../pages/HomeTemplate/ListMoviePage/duck/reducer";

const rootReducer = combineReducers({
  listMovieReducer,
});

export default rootReducer;
