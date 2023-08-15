import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Nav from "../components/Nav";
import PlaceIcon from "@mui/icons-material/Place";
import { Image } from "@mui/icons-material";
import { ButtonGroup, Container, Grid, Typography } from "@mui/material";
import "./Home.css";
import BasicTable from "../components/BasicTable";
import { Button, Sheet } from "@mui/joy";
import InfoData from "../components/InfoData";
import ViewPDF from "../components/individual/GovermentPDF";
import { useAuthUser, useIsAuthenticated } from "react-auth-kit";

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
  const rows = [];
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [fetching, setFetching] = useState(true);
  const [assets, setAssets] = useState({});
  const [stockCount, setStockCount] = useState(0);
  const [buyOrderBook, setBuyOrderBook] = useState({});
  const [sellOrderBook, setSellOrderBook] = useState({});
  const [orderRange, setOrderRange] = useState({});
  const [activeInfo, setActiveInfo] = useState(null); // 현재 활성화된 화면을 상태로 관리
  const [viewer, setViewer] = useState("");
  const auth = useAuthUser();
  const isAuthenticated = useIsAuthenticated();
  const handleButtonClick = (screen) => {
    setActiveInfo(screen); // 버튼 클릭에 따라 화면 변경
  };

  const getAssets = useCallback(async () => {
    try {
      const { data } = await axios.get(`http://localhost:8080/assets/${id}`);
      setAssets(data.asset);
      setLoading(false);
    } catch (e) {}
  }, []);

  const getStockCount = useCallback(async () => {
    try {
      const { data } = await axios.get(
        // TODO: Detail 활용할 때 user_id 받아오도록 하며 바로 아래의 내용으로 변경해야 함
        // `http://localhost:8080/${user_id}/assets/${id}`
        `http://localhost:8080/user/${viewer}/assets/${id}`
      );

      setStockCount(data.user_assets[0].count);
    } catch (e) {}
  }, [viewer, id]);

  const getbuyOrderBook = useCallback(async () => {
    const { data } = await axios.get(`http://localhost:3000/order/${id}/sell`);
    const buyOrder = Object.entries(data.order_book);
    buyOrder.sort((a, b) => b[0] - a[0]);
    setSellOrderBook(buyOrder);
    setFetching(true);
  }, []);

  const getsellOrderBook = useCallback(async () => {
    const { data } = await axios.get(`http://localhost:3000/order/${id}/buy`);
    const sellOrder = Object.entries(data.order_book);
    sellOrder.sort((a, b) => b[0] - a[0]);
    setBuyOrderBook(sellOrder);
    setFetching(true);
  }, []);
  useEffect(() => {
    isAuthenticated() && setViewer(Object.values(auth())[0]);
    // console.log("this is detail auth", user);
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

  return (
    <div>
      <Nav />
      {loading ? (
        <h1>Loading</h1>
      ) : (
        // <div className="default-frame">
        <div>
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
                )}{" "}
              {activeInfo === "Info" && <InfoData />}
            </div>
            <div className="info-data">
              <div>단위 가격 : {assets.currentUnitPrice}</div>
              {/* 아래 가격 변화시켜야 함 */}
              <div>평가 금액 : {assets.wholePrice}</div>
              <div className="location">
                <PlaceIcon />
                <div>{assets.address}</div>
              </div>
              <div>내 잔고 : {stockCount}</div>
              <div>주문 수량</div>
              <div>주문 가격</div>
              <div>매수</div>
              <div>매도</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Detail;
