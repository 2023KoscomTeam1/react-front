function Assets({
  asset_id,
  name,
  image_url,
  address,
  whole_price,
  unit_current_price,
  end_price,
}) {
  return (
    <div>
      <br />
      <img src={image_url} alt={name} />
      <div>{asset_id}</div>
      <div>{name}</div>
      <div>{address}</div>
      <div>{whole_price}</div>
      <div>{unit_current_price}</div>
      <div>{end_price}</div>
    </div>
  );
}
export default Assets;
