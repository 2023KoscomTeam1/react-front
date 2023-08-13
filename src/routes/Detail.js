import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Nav from "../components/Nav";
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
  const [assets, setAssets] = useState({});
  const getAssets = async () => {
    const data = await axios.get(`http://localhost:8080/assets/${id}`);
    setAssets(data.data.asset);
    setLoading(false);
  };
  useEffect(() => {
    getAssets();
    console.log(assets);
  }, []);

  return (
    <div>
      <Nav />

      <h1>Here goes my page</h1>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div className="default-frame">
          <img src={assets.imageUrl} alt="assetId" className="home-image" />
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
