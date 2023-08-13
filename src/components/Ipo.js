import { Link } from "react-router-dom";
import "../App.css";

function Ipo({
  ipo_id,
  name,
  address,
  image_url = "https://drive.google.com/uc?id=1E_tfnKmcwQZQTVAC6uTAA5aN3dx3AeZG",
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
