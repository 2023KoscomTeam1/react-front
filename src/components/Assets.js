import { Link } from "react-router-dom";
import "../App.css";

function Assets({
  asset_id,
  name,
  image_url = "https://drive.google.com/uc?id=1E_tfnKmcwQZQTVAC6uTAA5aN3dx3AeZG",
  address,
  whole_price,
  unit_current_price,
  end_price,
  count,
  averagePrice,
}) {
  return (
    <div className="asset-box">
      <img className="asset-preview" src={image_url} alt={name} />
      <div className="inblock-item">{asset_id}</div>
      {/* <Link to={`/assets/detail/${asset_id}`}>{name}</Link>
      <div>{address}</div>
      <div>{whole_price}</div>
      <div>{unit_current_price}</div>
      <div>{end_price}</div> */}
      <div className="inblock-item"> 보유수량: {count}</div>
      <div className="inblock-item"> 평균가: {averagePrice}</div>
    </div>
  );
}
export default Assets;
