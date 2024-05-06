import React, { FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { acFetchUserLogin } from "./duck/actions";
import { RootState } from "../../store";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  taiKhoan: yup.string().required("Vui lòng nhập tài khoản"),
  matKhau: yup.string().required("Vui lòng nhập mật khẩu"),
});

export default function AuthenPage() {
  const dispatch: any = useDispatch();
  const { loading, data, error } = useSelector(
    (state: RootState) => state.userReducer
  );

  const navigate = useNavigate();
  const { register, handleSubmit, formState } = useForm<any>({
    defaultValues: { taiKhoan: "", matKhau: "" },
    resolver: yupResolver(schema),
    criteriaMode: "all",
  });

  useEffect(() => {
    console.log("errors", formState.errors);
  }, [formState]);

  const onSubmit = (formValues: any) => {
    dispatch(acFetchUserLogin(formValues));
  };

  useEffect(() => {
    if (data) {
      if (data.maLoaiNguoiDung === "QuanTri") {
        navigate("/admin/dashboard");
      } else {
        navigate("/");
      }
    }
  }, [data]);

  return (
    <div className="d-flex align-items-center justify-content-center">
      <h3>Đăng nhập</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="text"
            placeholder="Tài khoản..."
            {...register("taiKhoan")}
          />
          {formState.errors.taiKhoan?.message && (
            <small className="text-danger">
              {formState.errors.taiKhoan?.message as any}
            </small>
          )}
        </div>
        <input type="text" placeholder="Mật khẩu..." {...register("matKhau")} />

        <button disabled={loading} type="submit" className="btn btn-success">
          {loading && (
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          )}
          Đăng nhập
        </button>
      </form>
    </div>
  );
}
