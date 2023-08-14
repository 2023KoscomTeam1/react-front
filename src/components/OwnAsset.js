import { Link, useNavigate } from "react-router-dom";
import "./OwnAsset.css";
import { useEffect, useState } from "react";
import axios from "axios";

function OwnAsset({
  asset_id,
  count,
  averagePrice,
}) {
    // console.log(asset_id, count, averagePrice);
    const [asset, setAsset] = useState({});
    const [loading, setLoading] = useState(true)
    const jsonFetcher  = async () => {
        const res = await axios.get(`http://localhost:8080/assets/${asset_id}`)
        console.log('this is asset info', res.data.asset);
        setAsset(res.data.asset);
        setLoading(false);
    };
    useEffect(() => {
        jsonFetcher();
    }, []);

    const navigate = useNavigate();

    const navigateAssetDetail = (asset_id) => {
        // 👇️ navigate to /
        navigate(`/assets/detail/${asset_id}`);
    };

  return (
    <div className="own-asset-box" onClick={() => navigateAssetDetail(asset_id)}>
      <div class="img-wrapper">
        <img src={asset.imageUrl} alt={asset.name}/>
      </div>
      <div>
        {/* <div className="inblock-item">{asset_id}</div> */}
        <Link to={`/assets/detail/${asset_id}`}>{asset.name}</Link>
        <p className="left-label"></p><div className="right-label">{asset.address}</div>
        <p className="left-label"></p>총 평가금액<div className="right-label">{asset.wholePrice}</div>
        <p className="left-label"></p>단위 가격<div className="right-label">{asset.currentUnitPrice}</div>
        <p className="left-label"></p>수익율: <div className="right-label">{asset.endPrice}</div>
        <p className="left-label"></p>보유 수량:<div className="right-label"> 보유수량: {count}</div>
        <p className="left-label"></p><div className="right-label"> 평균가: {averagePrice}</div>
      </div>
    </div>
  );
}
export default OwnAsset;
