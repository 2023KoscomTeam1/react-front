import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MyPage() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState({});
  const getUsers = async () => {
    // 아래의 데이터는 id에 맞는 데이터 fetch했다는 가정 하의 데이터임
    const json = {
      user_id: id,
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
export default MyPage;
