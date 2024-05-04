import { combineReducers } from "redux";
import listMovieReducer from "./../pages/HomeTemplate/ListMoviePage/duck/reducer";
import movieDetailsReducer from "../pages/HomeTemplate/DetailMovie/duck/reducer";

const rootReducer = combineReducers({
  listMovieReducer,
  movieDetailsReducer,
});

export default rootReducer;
