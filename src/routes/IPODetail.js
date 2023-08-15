import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import "../App.css";
import Nav from "../components/Nav";
import axios from "axios";
import VerticalProgressBar from "../components/VerticalProgressBar";
import { IoLocationSharp } from "react-icons/io5";
import ColorButton from "../components/Button";
import ViewPDF from "../components/individual/GovermentPDF";
import { useAuthUser, useIsAuthenticated } from "react-auth-kit";
import { Button } from "@mui/joy";
import {
  FormControl,
  FormHelperText,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import { HourglassEmptyOutlined } from "@mui/icons-material";

function IPODetail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [ipo, setIPO] = useState({});
  const [viewer, setViewer] = useState();
  const [myIpoCount, setMyIpoCount] = useState(0);
  const [amount, setAmount] = useState(0);
  const auth = useAuthUser();
  const isAuthenticated = useIsAuthenticated();

  const jsonFetcher = async () => {
    const res = await axios.get(`http://localhost:8080/ipo/${id}`);
    // console.log("serserr", res.data.ipo_asset);
    setIPO(res.data.ipo_asset);
    setLoading(false);
  };
  const getMyIpoCount = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/user/${viewer}/ipos`
      );

      setMyIpoCount(data.user_ipos.filter((d) => d.ipoId == id)[0]["count"]);
    } catch (e) {}
  }, [viewer, id]);

  useEffect(() => {
    isAuthenticated() && setViewer(Object.values(auth())[0]);
  }, []);

  useEffect(() => {
    viewer && getMyIpoCount();
  }, [viewer]);

  useEffect(() => {
    jsonFetcher();
  }, []);

  const dueDate = ipo.dueDate ? ipo.dueDate.split("T")[0] : ipo.dueDate;

  const percent =
    Math.round((ipo.currentAmount / ipo.targetAmount) * 10000) / 100;

  return (
    <div>
      <Nav />
      <div className="default-frame">
        {/* <h5>My page</h5> */}
        {loading ? (
          <div className="loading">
            <br />
            <div className="in-loading">
              <div>Loading</div>
              <HourglassEmptyOutlined />
            </div>
          </div>
        ) : (
          <div className="ipo-frame">
            <p></p>
            <div className="img-top-title"> 공모주 상세 </div>
            <div className="ipo-wrapper">
              <img src={ipo.imageUrl} alt={ipo.name} />
            </div>
            <div className="img-cover"> </div>

            <div className="ipo-info-box">
              <div className="ipo-top-box">
                <div className="ipo-top-left">
                  <div className="ipo-title">{ipo.name}</div>
                  <div className="location-label">
                    <IoLocationSharp />
                    <div className="address-label">{ipo.address}</div>
                  </div>
                </div>
                <div className="ipo-top-right">
                  <div>마감일: {dueDate}</div>
                </div>
              </div>
              <hr />
              <div className="ipo-bottom-box">
                <VerticalProgressBar percent={percent} />
                <div className="number-infos">
                  <div className="right-span">
                    <div
                      className="gray-small-text"
                      style={{ fontWeight: "bold" }}
                    >
                      참고 자료:{" "}
                    </div>
                    <ViewPDF />
                  </div>
                  <div className="ipo-price-label">
                    <div className="ipo-price">공모가:</div>{" "}
                    <div style={{ color: "#e37622", fontWeight: "bold" }}>
                      {" "}
                      {ipo.unitPrice
                        .toString()
                        .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
                    </div>
                  </div>
                  <div className="ipo-info-label">
                    <div>목표 공모 수량:</div>{" "}
                    <div style={{ fontWeight: "bold" }}>
                      {" "}
                      {ipo.targetAmount
                        .toString()
                        .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
                    </div>
                  </div>
                  <div className="ipo-info-label">
                    <div>현재 수량:</div>{" "}
                    <div style={{ fontWeight: "bold" }}>
                      {" "}
                      {ipo.currentAmount
                        .toString()
                        .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
                    </div>
                  </div>
                  <hr />
                  {isAuthenticated() && (
                    <div
                      className="ipo-info-label"
                      style={{ fontSize: "0.8rem" }}
                    >
                      <div>내 공모 수량:</div> <div> {myIpoCount}</div>
                    </div>
                  )}
                  <div className="ipo-info-small">
                    <div>총 증거금 : </div>{" "}
                    <div>
                      {" "}
                      {(myIpoCount * ipo.unitPrice)
                        .toString()
                        .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
                    </div>
                  </div>
                  <div
                    className="number-input-box"
                    style={{ marginTop: "30px" }}
                  >
                    <Button
                      size="small"
                      variant="outlined"
                      style={{
                        borderColor: "#E37622",
                        color: "#E37622",
                        height: "30px",
                        width: "30px",
                        marginBottom: "5px",
                      }}
                      onClick={() => {
                        if (amount - 1 >= 0) {
                          setAmount(amount - 1);
                        }
                      }}
                    >
                      -
                    </Button>
                    <FormControl
                      sx={{ m: 1, width: "100px" }}
                      variant="outlined"
                    >
                      <FormHelperText
                        id="outlined-weight-helper-text"
                        style={{ fontSize: "0.8rem" }}
                      >
                        주문 수량
                      </FormHelperText>
                      <OutlinedInput
                        id="outlined-adornment-weight"
                        endAdornment={<InputAdornment position="end" />}
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{
                          "aria-label": "weight",
                          style: { textAlign: "right", marginRight: "-10px" },
                        }}
                        onChange={(e) => setAmount(e.target.value)}
                        value={amount}
                        style={{
                          height: "25px",
                          width: "130px",
                          marginLeft: "-15px",
                        }}
                      />
                    </FormControl>
                    <Button
                      size="small"
                      variant="outlined"
                      style={{
                        borderColor: "#E37622",
                        color: "#E37622",
                        height: "30px",
                        width: "30px",
                        marginBottom: "5px",
                      }}
                      onClick={() => {
                        setAmount(amount + 1);
                      }}
                    >
                      +
                    </Button>
                  </div>
                  <div className="ipo-info-small">
                    <div>신청 금액 : </div>{" "}
                    <div>
                      {" "}
                      {(ipo.currentAmount * amount)
                        .toString()
                        .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
                    </div>
                  </div>
                  <div className="button-span">
                    <ColorButton
                      size={20}
                      w={120}
                      text={"공모 신청"}
                      f={() => {
                        alert("공모 신청이 접수 되었습니다.");
                        setMyIpoCount(myIpoCount + amount);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="bottom-empty-space"> </div>
      </div>
    </div>
  );
}
export default IPODetail;
