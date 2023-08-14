import { Link } from "react-router-dom";
import "../App.css";

function Ipo({
  ipo_id,
  name,
  address,
  image_url,
  target_amount,
  current_amount,
  unit_price,
  due_date,
  count,
}) {
  return (
    <div className="asset-box">
      <img className="asset-preview" src={image_url} alt={name} />
      <div>{ipo_id}</div>
      <div>{count}</div>
    </div>
  );
}
export default Ipo;
