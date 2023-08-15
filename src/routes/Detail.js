import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Nav from "../components/Nav";
import PlaceIcon from "@mui/icons-material/Place";
import { Image } from "@mui/icons-material";
import {
  ButtonGroup,
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
  const [activeInfo, setActiveInfo] = useState(null); // 현재 활성화된 화면을 상태로 관리
  const [viewer, setViewer] = useState();
  const auth = useAuthUser();
  const isAuthenticated = useIsAuthenticated();
  const [amount, setAmount] = useState(0);
  const [price, setPrice] = useState(0);
  const handleButtonClick = (screen) => {
    setActiveInfo(screen); // 버튼 클릭에 따라 화면 변경
  };
  const theme = createTheme({
    palette: {
      primary: {
        main: "#E37622",
      },
      secondary: {
        main: "#f44336",
      },
    },
  });
  const color = red[500];
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
  const [value, setValue] = useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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

  useEffect(() => {
    console.log(value);
  }, [value]);
  return (
    <div>
      <Nav />
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div className="default-frame">
          {/* <div> */}
          {/* 짧은 것과 긴 것 비교해서 하기  */}
          <div className="grid-container">
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="flex-start"
              backgroundColor="red"
              height="30"
            >
              hi
            </Grid>
          </div>
          <div>{assets.name}</div>
          {/* <img
            src={assets.imageUrl}
            alt="assetId"
            className="home-image"
            width="318"
          /> */}
          <div className="detail-below">
            <div className="sheet-data">
              <span className="button-container">
                <ButtonGroup aria-label="outlined primary button group">
                  <Button
                    onClick={() => handleButtonClick("Chart")}
                    color={
                      activeInfo === "Chart" || activeInfo === null
                        ? "primary"
                        : "default"
                    }
                  >
                    차트
                  </Button>
                  <Button
                    onClick={() => handleButtonClick("Order")}
                    color={activeInfo === "Order" ? "primary" : "default"}
                  >
                    호가
                  </Button>
                  <Button
                    onClick={() => handleButtonClick("Info")}
                    color={activeInfo === "Info" ? "primary" : "default"}
                  >
                    거래정보
                  </Button>
                </ButtonGroup>
              </span>
              {activeInfo === "Chart" || activeInfo === null}
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
              <div>단위 가격 : {assets.currentUnitPrice}</div>
              {/* 아래 가격 변화시켜야 함 */}
              <div>평가 금액 : {assets.wholePrice}</div>
              <div className="location">
                <PlaceIcon />
                <div>{assets.address}</div>
              </div>
              {isAuthenticated() && <div>내 잔고 : {stockCount}</div>}
              {/* <div>주문 수량</div> */}
              <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                <FormHelperText id="outlined-weight-helper-text">
                  주문 수량
                </FormHelperText>
                <OutlinedInput
                  id="outlined-adornment-weight"
                  endAdornment={<InputAdornment position="end" />}
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    "aria-label": "weight",
                  }}
                  onChange={(e) => setAmount(e.target.value)}
                  value={amount}
                />
              </FormControl>
              <Button
                size="small"
                variant="outlined"
                style={{
                  borderColor: "#E37622",
                  color: "#E37622",
                }}
                onClick={() => {
                  setAmount(amount + 1);
                }}
              >
                +
              </Button>

              <Button
                size="small"
                variant="outlined"
                style={{
                  borderColor: "#E37622",
                  color: "#E37622",
                }}
                onClick={() => {
                  if (amount - 1 >= 0) {
                    setAmount(amount - 1);
                  }
                }}
              >
                -
              </Button>
              <br />
              <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                <FormHelperText id="outlined-weight-helper-text">
                  주문 가격
                </FormHelperText>
                <OutlinedInput
                  id="outlined-adornment-weight"
                  endAdornment={<InputAdornment position="end" />}
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    "aria-label": "weight",
                  }}
                  onChange={(e) => setPrice(e.target.value)}
                  value={price}
                />
              </FormControl>
              <Button
                size="small"
                variant="outlined"
                style={{
                  borderColor: "#E37622",
                  color: "#E37622",
                }}
                onClick={() => {
                  setPrice(price + 500);
                }}
              >
                +
              </Button>

              <Button
                size="small"
                variant="outlined"
                style={{
                  borderColor: "#E37622",
                  color: "#E37622",
                }}
                onClick={() => {
                  if (price - 500 >= 0) {
                    setPrice(price - 500);
                  }
                }}
              >
                -
              </Button>
              <div className="location">
                <ColorButton text={"매수"} size={10} f={() => {}} c={"red"} />

                <div className="info-data">
                  <ColorButton
                    text={"매도"}
                    size={10}
                    f={() => {}}
                    c={"blue"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Detail;
