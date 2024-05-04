import { Action, AppStateDetails } from "../../../../store/types";
import * as ActionType from "../duck/constants";
import { MovieDetails } from "./types";

const initialState: AppStateDetails<MovieDetails> = {
  loading: false,
  data: null,
  error: null,
};

const movieDetailsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.MOVIE_DETAIL_REQUEST: {
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };
    }
    case ActionType.MOVIE_DETAIL_SUCCESS: {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };
    }

    case ActionType.MOVIE_DETAIL_FAILED: {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default movieDetailsReducer;
