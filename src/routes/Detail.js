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
  const [detail, setDetail] = useState({});
  const getDetail = async () => {
    // 아래의 데이터는 asset_id에 맞는 시세 데이터(차트, 호가, 거래정보), 잔고 데이터 fetch했다는 가정 하의 데이터임
    const json = {
      password: "1",
      user_place: "충청도",
      user_assets: { asset_id: "1", count: 1, average_price: 13.4 },
      balance: 432.153,
      user_type: 0,
    };
    console.log(json);
    setUsers(json);
    console.log("this is users", users);
    console.log(id);
    setLoading(false);
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h1>Here goes my page</h1>
      {loading ? <h1>Loading</h1> : <div>{users.user_id}</div>}
    </div>
  );
}
export default Detail;
