import { Action } from "../../../../store/types";
import api from "../../../../utils/apiUtil";
import * as ActionType from "./../duck/constants";

export const acFetchMovieDetails = (id: string) => {
  return (dispatch: any) => {
    dispatch(acMovieDetailRequest());
    // call api
    api
      .get(`/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`)
      .then((response) => dispatch(acMovieDetailSuccess(response.data.content)))
      .catch((error: any) => dispatch(acMovieDetailFailed(error)));
  };
};

const acMovieDetailRequest = (): Action => {
  return {
    type: ActionType.MOVIE_DETAIL_REQUEST,
  };
};
const acMovieDetailSuccess = (data: any): Action => {
  return {
    type: ActionType.MOVIE_DETAIL_SUCCESS,
    payload: data,
  };
};
const acMovieDetailFailed = (error: any): Action => {
  return {
    type: ActionType.MOVIE_DETAIL_FAILED,
    payload: error,
  };
};
