import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Nav from "../components/Nav";
import { IoLocationSharp } from "react-icons/io5";
import { HourglassEmptyOutlined, Image, Padding } from "@mui/icons-material";
import Alert from "@mui/material/Alert";
import {
  ButtonGroup,
  Card,
  CardMedia,
  Container,
  FormControl,
  FormHelperText,
  Grid,
  InputAdornment,
  OutlinedInput,
  Tab,
  Tabs,
  Typography,
  createTheme,
} from "@mui/material";
import "./Home.css";
import BasicTable from "../components/BasicTable";
import { Button, Sheet } from "@mui/joy";
import InfoData from "../components/InfoData";
import ViewPDF from "../components/individual/GovermentPDF";
import { useAuthUser, useIsAuthenticated } from "react-auth-kit";
import { red } from "@mui/material/colors";
import ColorButton from "../components/Button";

function createData(sell, orderPrice, buy) {
  return { sell: sell ? sell : 0, orderPrice, buy: buy ? buy : 0 };
}

function Detail({
  asset_id,
  name,
  image_url,
  address,
  whole_price,
  unit_current_price,
  end_price,
  user_id,
}) {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [fetching, setFetching] = useState(true);
  const [assets, setAssets] = useState({});
  const [stockCount, setStockCount] = useState(0);
  const [buyOrderBook, setBuyOrderBook] = useState({});
  const [sellOrderBook, setSellOrderBook] = useState({});
  const [orderRange, setOrderRange] = useState({});
  const [activeInfo, setActiveInfo] = useState("Chart"); // 현재 활성화된 화면을 상태로 관리
  const [viewer, setViewer] = useState();
  const auth = useAuthUser();
  const isAuthenticated = useIsAuthenticated();
  const [amount, setAmount] = useState(0);
  const [price, setPrice] = useState(0);
  const handleButtonClick = (screen) => {
    setActiveInfo(screen); // 버튼 클릭에 따라 화면 변경
  };

  // const theme = createTheme({
  //   palette: {
  //     primary: {
  //       main: "#E37622",
  //     },
  //     secondary: {
  //       main: "#f44336",
  //     },
  //   },
  // });
  // const color = red[500];
  const getAssets = useCallback(async () => {
    try {
      const { data } = await axios.get(`http://localhost:8080/assets/${id}`);
      setAssets(data.asset);
      setPrice(data.asset.currentUnitPrice);
      setLoading(false);
    } catch (e) {}
  }, []);

  const getStockCount = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/user/${viewer}/assets/${id}`
      );

      setStockCount(data.user_assets[0].count);
    } catch (e) {}
  }, [viewer, id]);

  const getbuyOrderBook = useCallback(async () => {
    const { data } = await axios.get(`http://localhost:8080/order/${id}/sell`);
    const buyOrder = Object.entries(data.order_book);
    buyOrder.sort((a, b) => b[0] - a[0]);
    setSellOrderBook(buyOrder);
    setFetching(true);
  }, []);

  const getsellOrderBook = useCallback(async () => {
    const { data } = await axios.get(`http://localhost:8080/order/${id}/buy`);
    const sellOrder = Object.entries(data.order_book);
    sellOrder.sort((a, b) => b[0] - a[0]);
    setBuyOrderBook(sellOrder);
    setFetching(true);
  }, []);

  useEffect(() => {
    isAuthenticated() && setViewer(Object.values(auth())[0]);
  });

  useEffect(() => {
    getAssets();
  }, []);

  useEffect(() => {
    getStockCount();
  }, [viewer]);

  useEffect(() => {
    getbuyOrderBook();
  }, []);

  useEffect(() => {
    getsellOrderBook();
    console.log(assets);
  }, []);

  const change = assets.endPrice - assets.currentUnitPrice;
  const change_percent = (change / assets.endPrice) * 100;

  return (
    <div>
      <Nav />

      {loading ? (
        <div className="loading">
          <br />
          <div className="in-loading">
            <div>Loading</div>
            <HourglassEmptyOutlined />
          </div>
        </div>
      ) : (
        <div className="default-frame">
          {/* <div> */}
          {/* 짧은 것과 긴 것 비교해서 하기  */}
          <div className="grid-container">
            {/* <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="flex-start"
              backgroundColor="red"
              height="30"
            >
            </Grid> */}
          </div>

          <img
            src={assets.imageUrl}
            alt="assetId"
            className="home-image"
            width="318"
          />
          {/* <Alert severity="success">
            This is a success alert — check it out!
          </Alert> */}

          <div className="asset-top-info">
            <div className="asset-top-left">
              <div className="ipo-title">{assets.name}</div>

              {/* 아래 가격 변화시켜야 함 */}
              <div
                style={{
                  fontFamily: "titleFont",
                  marginTop: "7px",
                  fontSize: "0.7rem",
                  marginBottom: "7px",
                  color: "#72787f",
                }}
              >
                평가 금액 : {assets.wholePrice}
              </div>
              <div className="location-label">
                <IoLocationSharp />
                <div className="address-label">{assets.address}</div>
              </div>
            </div>
            <div className="asset-top-right">
              <div
                style={{
                  marginBottom: "5px",
                  fontWeight: "bold",
                  fontSize: "1rem",
                }}
              >
                {assets.currentUnitPrice
                  .toString()
                  .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
              </div>
              <div
                className={`${
                  change > 0 ? "positive" : change < 0 ? "negative" : "neutral"
                }`}
                style={{ marginBottom: "20px" }}
              >
                {change > 0 ? "▲" : "▼"}
                {change
                  .toString()
                  .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
                ({Math.round(change_percent * 100) / 100}%)
              </div>
              {isAuthenticated() && (
                <div style={{ fontSize: "0.7rem" }}>
                  내 잔고 :{" "}
                  {stockCount
                    .toString()
                    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
                </div>
              )}
            </div>
          </div>
          <hr />
          <div className="detail-below">
            <div className="sheet-data">
              <span
                className="button-container"
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <ButtonGroup aria-label="outlined primary button group">
                  <Button
                    onClick={() => handleButtonClick("Chart")}
                    style={{
                      fontSize: "0.7rem",
                      padding: "0px 14px 0px 14px",
                      backgroundColor:
                        activeInfo === "Chart" ? "gray" : "white",
                      color: activeInfo === "Chart" ? "white" : "black",
                    }}
                  >
                    차트
                  </Button>
                  <Button
                    onClick={() => handleButtonClick("Order")}
                    style={{
                      fontSize: "0.7rem",
                      padding: "0px 14px 0px 14px",
                      backgroundColor:
                        activeInfo === "Order" ? "gray" : "white",
                      color: activeInfo === "Order" ? "white" : "black",
                    }}
                  >
                    호가
                  </Button>
                  <Button
                    onClick={() => handleButtonClick("Info")}
                    style={{
                      fontSize: "0.7rem",

                      padding: "0px 14px 0px 14px",
                      backgroundColor: activeInfo === "Info" ? "gray" : "white",
                      color: activeInfo === "Info" ? "white" : "black",
                    }}
                  >
                    거래정보
                  </Button>
                </ButtonGroup>
              </span>

              {(activeInfo === "Chart" && (
                <div className="chart-wrapper">
                  <img src="/img/negative_chart_img.png" />
                </div>
              )) ||
                activeInfo === null}
              {activeInfo === "Order" &&
                buyOrderBook.length !== undefined &&
                sellOrderBook.length !== undefined && (
                  <BasicTable buyData={buyOrderBook} sellData={sellOrderBook} />
                )}
              {activeInfo === "Info" && (
                <InfoData
                  personalOwnCount={assets.personalOwnCount}
                  companyOwnCount={assets.companyOwnCount}
                  foreignOwnCount={assets.foreignOwnCount}
                  viewCount={assets.viewCount}
                />
              )}
            </div>
            <div className="info-data">
              <div className="number-input-box">
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
                <FormControl sx={{ m: 1, width: "100px" }} variant="outlined">
                  <FormHelperText
                    id="outlined-weight-helper-text"
                    style={{ fontSize: "0.5rem" }}
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
                    style={{ height: "25px" }}
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
              <hr />
              <div className="number-input-box">
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
                    if (price - 500 >= 0) {
                      setPrice(price - 500);
                    }
                  }}
                >
                  -
                </Button>
                <FormControl sx={{ m: 1, width: "100px" }} variant="outlined">
                  <FormHelperText
                    id="outlined-weight-helper-text"
                    style={{ fontSize: "0.5rem" }}
                  >
                    주문 가격
                  </FormHelperText>
                  <OutlinedInput
                    id="outlined-adornment-weight"
                    endAdornment={<InputAdornment position="end" />}
                    aria-describedby="outlined-weight-helper-text"
                    inputProps={{
                      "aria-label": "weight",
                      style: { textAlign: "right", marginRight: "-10px" },
                    }}
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                    style={{ height: "25px" }}
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
                    setPrice(price + 500);
                  }}
                >
                  +
                </Button>
              </div>
              <hr />
              <div className="order-buttons">
                <ColorButton
                  text={"매수"}
                  size={10}
                  f={() => alert("매수 접수 되었습니다.")}
                  c={"red"}
                />
                <ColorButton
                  text={"매도"}
                  size={10}
                  f={() => alert("매도 접수 되었습니다.")}
                  c={"blue"}
                />
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="bottom-empty-space"></div>
    </div>
  );
}
export default Detail;
