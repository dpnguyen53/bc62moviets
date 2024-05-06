import { Action } from "../../../store/types";
import api from "../../../utils/apiUtil";
import * as ActionType from "./../duck/constants";

export const acFetchUserLogin = (user: {
  taiKhoan: string;
  matKhau: string;
}) => {
  return (dispatch: any) => {
    dispatch(acUserLoginRequest());
    // call api
    api
      .post("/QuanLyNguoiDung/DangNhap", user)
      .then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data.content));
        dispatch(acUserLoginSuccess(response.data.content));
      })
      .catch((error: any) => dispatch(acUserLoginFailed(error)));
  };
};

const acUserLoginRequest = (): Action => {
  return {
    type: ActionType.USER_LOGIN_REQUEST,
  };
};
const acUserLoginSuccess = (data: any): Action => {
  return {
    type: ActionType.USER_LOGIN_SUCCESS,
    payload: data,
  };
};
const acUserLoginFailed = (error: any): Action => {
  return {
    type: ActionType.USER_LOGIN_FAILED,
    payload: error,
  };
};
