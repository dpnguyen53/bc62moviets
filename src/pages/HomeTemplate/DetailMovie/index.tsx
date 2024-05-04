import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { acFetchMovieDetails } from "./duck/actions";
import { RootState } from "../../../store";
import dayjs from "dayjs";
import { Button, Col, Nav, Row, Tab } from "react-bootstrap";

export default function DetailMovie() {
  const { id } = useParams();
  const dispatch: any = useDispatch();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.movieDetailsReducer
  );

  useEffect(() => {
    if (id) {
      dispatch(acFetchMovieDetails(id));
    }
  }, [id]);

  const date = new Date(data?.ngayKhoiChieu || "");
  const cinemaSystems = data?.heThongRapChieu || [];

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-3">
          <img
            src={data?.hinhAnh}
            className="w-100 rounded"
            style={{ objectFit: "cover" }}
            height={400}
            alt={data?.tenPhim}
          />
        </div>
        <div className="col-9 d-flex flex-column justify-content-between">
          <div>
            <h4 className="font-weight-bold">Tên phim: {data?.tenPhim} </h4>
            <p>Mô tả: {data?.moTa} </p>
            <p>Đánh giá: {data?.danhGia}</p>
            {/* DD/MM/YYYY hh:mm */}
            <p>Ngày khởi chiếu: {dayjs(date).format("DD/MM/YYYY")}</p>
          </div>
          <div style={{ width: 200 }}>
            <button className="btn btn-success">Xem trailer</button>
          </div>
        </div>
      </div>

      <Tab.Container id="left-tabs-example" defaultActiveKey="BHDStar">
        <Row>
          {/* <div className="row"></div> */}
          <Col sm={3}>
            {/* <div className="col-3"></div> */}
            <Nav variant="pills" className="flex-column">
              {cinemaSystems.map((system) => {
                return (
                  <Nav.Item>
                    <Nav.Link eventKey={system.maHeThongRap}>
                      <img
                        src={system.logo}
                        style={{ width: 120, height: 120 }}
                      />
                    </Nav.Link>
                  </Nav.Item>
                );
              })}
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              {cinemaSystems.map((system) => {
                return (
                  <Tab.Pane eventKey={system.maHeThongRap}>
                    {system.cumRapChieu.map((item) => {
                      return (
                        <div>
                          {item.tenCumRap}
                          <Row>
                            {item.lichChieuPhim.map((item, index) => {
                              return (
                                <Col sm={2}>
                                  <Button
                                    variant="primary"
                                    key={`lich-chieu-${index}`}
                                  >
                                    {dayjs(item.ngayChieuGioChieu).format(
                                      "DD/MM hh:mm"
                                    )}
                                  </Button>
                                </Col>
                              );
                            })}
                          </Row>
                        </div>
                      );
                    })}
                    {system.tenHeThongRap}
                  </Tab.Pane>
                );
              })}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}
