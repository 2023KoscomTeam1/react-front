import { Link } from "react-router-dom";

function IPortfolio({ user_type }) {
  return (
    <div>
      <br />
      {user_type}
      {/* <img src={image_url} alt={name} />
      <div>{asset_id}</div>
      <Link to={`/asset/${asset_id}`}>{name}</Link>
      <div>{address}</div>
      <div>{whole_price}</div>
      <div>{unit_current_price}</div>
      <div>{end_price}</div> */}
    </div>
  );
}
export default IPortfolio;
