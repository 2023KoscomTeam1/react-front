import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Nav from "../components/Nav";

import { Image } from "@mui/icons-material";
import { Container, Grid, Typography } from "@mui/material";
import "./Home.css";
import BasicTable from "../components/BasicTable";

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
  const [stockCount, setStockCount] = useState({});
  const [buyOrderBook, setBuyOrderBook] = useState({});
  const [sellOrderBook, setSellOrderBook] = useState({});
  const [orderRange, setOrderRange] = useState({});
  const getAssets = useCallback(async () => {
    const { data } = await axios.get(`http://localhost:8080/assets/${id}`);
    setAssets(data.asset);
    setLoading(false);
  }, []);

  const getStockCount = useCallback(async () => {
    const { data } = await axios.get(
      // TODO: Detail 활용할 때 user_id 받아오도록 하며 바로 아래의 내용으로 변경해야 함
      // `http://localhost:8080/${user_id}/assets/${id}`
      `http://localhost:8080/user/dechoi/assets/${id}`
    );

    setStockCount(data.user_assets[0].count);
  }, []);

  const getbuyOrderBook = useCallback(async () => {
    const { data } = await axios.get(`http://localhost:3000/order/${id}/sell`);
    const buyOrder = Object.entries(data.order_book);
    buyOrder.sort((a, b) => b[0] - a[0]);
    setSellOrderBook(buyOrder);
    setFetching(true);
  }, [buyOrderBook, sellOrderBook]);

  const getsellOrderBook = useCallback(async () => {
    const { data } = await axios.get(`http://localhost:3000/order/${id}/buy`);
    const sellOrder = Object.entries(data.order_book);
    sellOrder.sort((a, b) => b[0] - a[0]);
    setBuyOrderBook(sellOrder);
    setFetching(true);
  }, [buyOrderBook, sellOrderBook]);

  // const getOrder = useCallback(async () => {
  //   const minNum = Math.min(...Object.keys(buyOrderBook));
  //   const midNum = Math.max(...Object.keys(buyOrderBook));
  //   const maxNum = Math.max(...Object.keys(sellOrderBook));
  //   // for (let i = minNum; i <= maxNum; i += 500) {
  //   //   console.log(i);
  //   // }
  //   // const arr = Array.from(
  //   //   Array((maxNum - minNum) / 500 + 1),
  //   //   (_, index) => index * 500 + minNum
  //   // );
  //   // setOrderRange(arr);
  //   // console.log("this is orderrange", orderRange);
  //   // console.log(midNum);
  //   const buyOrder = Object.entries(buyOrderBook);
  //   buyOrder.sort((a, b) => b[0] - a[0]);
  //   console.log(buyOrder);
  // });
  useEffect(() => {
    getAssets();
  }, []);

  useEffect(() => {
    getStockCount();
  }, []);

  useEffect(() => {
    getbuyOrderBook();
  }, []);

  useEffect(() => {
    getsellOrderBook();
  }, []);

  useEffect(() => {
    // console.log(buyOrderBook);
    // console.log(sellOrderBook);
    // console.log("this is length", buyOrderBook.length);
    // console.log("this is entries", buyOrderBook);
  }, [buyOrderBook, sellOrderBook]);

  return (
    <div>
      <Nav />

      <h1>Here goes my page</h1>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div className="default-frame">
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

          <img
            src={assets.imageUrl}
            alt="assetId"
            className="home-image"
            width="318"
          />

          {buyOrderBook.length !== undefined &&
          sellOrderBook.length !== undefined ? (
            <div>
              <BasicTable data={buyOrderBook} />
              {buyOrderBook.map((value) => (
                <div>
                  {value[0]} | {value[1]}
                </div>
              ))}
            </div>
          ) : (
            <div></div>
          )}

          <h3>차트</h3>
          <div>{assets.name}</div>
          <div>{assets.currnetUnitPrice}</div>
          <div>{assets.address}</div>
          <div>{stockCount} 잔고</div>
          <div>차트</div>

          <div>거래 정보</div>
          <div>주문 수량</div>
          <div>주문 가격</div>
          <div>매수</div>
          <div>매도</div>
        </div>
      )}
    </div>
  );
}
export default Detail;
