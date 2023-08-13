import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../App.css";
import EPortfolio from "../components/enterprise/Portfolio";
import IPortfolio from "../components/individual/Portfolio";
import Nav from "../components/Nav";

// TODO: 유저 타입에 따라 다르게 마이 페이지 보여줘야 함
function MyPage() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState({});
  const [assets, setAssets] = useState({});
  const getUsers = async () => {
    // 아래의 데이터는 id에 맞는 데이터 fetch했다는 가정 하의 데이터임
    const json = {
      user_id: id,
      name: "홍길동",
      password: "1",
      user_place: "충청도",
      user_assets: { asset_id: "1", count: 1, average_price: 13.4 },
      balance: 432153,
      user_type: "PERSONAL",
    };

    setUsers(json);
    console.log("this is users", users);
    console.log(id);
    setLoading(false);
  };

  // useEffect(() => {
  //   getUsers();
  // }, []);
  useEffect(()=> {
    const requestOptions = {
      method: 'GET',
    };
  
    fetch("http://localhost:8080/user/${userId}")
    .then(response => response.json())
    .then(result => setUsers(result))
    .catch(error => console.log('error'. error))
    .then(setLoading(false))
  }, [])
  return (
    <div>
      <Nav />
      <div className="default-frame">
        <h1>Here goes my page</h1>
        {loading ? (
          <h1>Loading</h1>
        ) : users.user_type == "ENTERPRISE" ? (
          <div>
            this user is enterprise
            <EPortfolio user_type={users.user_type} />
          </div>
        ) : (
          <div>
            this user is individual
            <IPortfolio user={users} />
          </div>
        )}
      </div>
    </div>
  );
}
export default MyPage;
