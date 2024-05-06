import { combineReducers } from "redux";
import listMovieReducer from "./../pages/HomeTemplate/ListMoviePage/duck/reducer";
import movieDetailsReducer from "../pages/HomeTemplate/DetailMovie/duck/reducer";
import userReducer from "../pages/AuthenPage/duck/reducer";

const rootReducer = combineReducers({
  listMovieReducer,
  movieDetailsReducer,
  userReducer,
});

export default rootReducer;
