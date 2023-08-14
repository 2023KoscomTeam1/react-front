import { Link, useNavigate } from "react-router-dom";
import "./OwnAsset.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { IoLocationSharp } from "react-icons/io5";

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
      <div className="img-wrapper">
        <img src={asset.imageUrl} alt={asset.name}/>
      </div>
      <div>
        <div className="asset-topbox">
            <div className="content-span">
                <div className="asset-name">{asset.name}</div>
                <div className="basic-text">보유수량: {count}</div>
            </div>

            <div className="price-info">
                <div className="basic-text">{asset.currentUnitPrice * count}</div>
                <div className="basic-text">{(asset.currentUnitPrice - averagePrice) * count}</div>
            </div>
        </div>

        <div className="location-label">
            <IoLocationSharp/>
            <div className="address-label">{asset.address}</div>
        </div>
      </div>
    </div>
  );
}
export default OwnAsset;
