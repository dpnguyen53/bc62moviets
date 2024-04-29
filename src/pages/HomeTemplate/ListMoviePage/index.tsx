import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actFetchListData } from "./duck/actions";
import { RootState } from "../../../store";
import MovieComponent from "./Movie";

export default function ListMoviePage() {
  const dispatch: any = useDispatch();
  // const loading = useSelector(
  //   (state: RootState) => state.listMovieReducer.loading
  // );
  // const data = useSelector((state: RootState) => state.listMovieReducer.data);

  const { loading, data } = useSelector(
    (state: RootState) => state.listMovieReducer
  );

  useEffect(() => {
    dispatch(actFetchListData());
  }, []);

  const renderListMovie = () => {
    if (loading) return <div>Loading...</div>;

    if (data && data.length > 0) {
      return data.map((movie) => <MovieComponent movie={movie} />);
    }
  };

  return (
    <div className="container">
      <h3>ListMoviePage</h3>
      <div className="row">{renderListMovie()}</div>
    </div>
  );
}
