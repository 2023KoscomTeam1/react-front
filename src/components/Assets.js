import { useNavigate } from "react-router-dom";
import "./Assets.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { IoLocationSharp } from "react-icons/io5";

function Assets({ asset }) {
  const navigate = useNavigate();
  const navigateAssetDetail = (asset_id) => {
    // 👇️ navigate to /
    navigate(`/assets/detail/${asset_id}`);
  };
  const change = asset.currentUnitPrice - asset.endPrice;
  const change_percent = (change / asset.endPrice) * 100;
  const str_change = change
    ? change.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
    : change;
  const str_wholePrice = asset.wholePrice
    ? asset.wholePrice
        .toString()
        .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
    : asset.wholePrice;
  const str_currentUnitPrice = asset.currentUnitPrice
    ? asset.currentUnitPrice
        .toString()
        .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
    : asset.currentUnitPrice;

  useEffect(() => {}, [asset]);
  return (
    <div
      className="asset-box"
      onClick={() => navigateAssetDetail(asset.assetId)}
    >
      <div className="img-wrapper">
        <img src={asset.imageUrl} alt={asset.name} />
      </div>
      <div>
        <div className="asset-topbox">
          <div className="info-span">
            <div className="asset-name">{asset.name}</div>
            <div className="basic-text"> 평가금액: {str_wholePrice}</div>
          </div>

          <div className="price-span">
            <div className="amount-large">{str_currentUnitPrice}</div>
            <div
              className={`${
                change > 0 ? "positive" : change < 0 ? "negative" : "neutral"
              }`}
            >
              {change > 0 ? "▲" : change < 0 ? "▼" : ""}
              {str_change}({Math.round(change_percent * 100) / 100}%)
            </div>
          </div>
        </div>

        <div className="location-label">
          <IoLocationSharp />
          <div className="address-label">{asset.address}</div>
        </div>
      </div>
    </div>
  );
}
export default Assets;
