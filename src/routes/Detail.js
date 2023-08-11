import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail({
  asset_id,
  name,
  image_url,
  address,
  whole_price,
  unit_current_price,
  end_price,
}) {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [prices, setPrices] = useState({});
  const getPrices = async () => {
    // 아래의 데이터는 asset_id에 맞는 시세 데이터(차트, 호가, 거래정보), 잔고 데이터 fetch했다는 가정 하의 데이터임
    const prices = [
      {
        10000: 10,
      },
      { 10500: 20 },
      { 9500: 20 },
      { 9000: 30 },
    ];
    console.log(prices);
    setPrices(prices);
    console.log(id);
    setLoading(false);
  };
  useEffect(() => {
    getPrices();
  }, []);

  return (
    <div>
      <h1>Here goes my page</h1>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div>
          <h3>차트</h3>
          <h3>호가</h3>
          <h3>거래 정보</h3>
          <h3>주문 수량</h3>
          <h3>주문 가격</h3>
        </div>
      )}
    </div>
  );
}
export default Detail;
