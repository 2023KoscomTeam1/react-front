import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../App.css";
import EPortfolio from "../components/enterprise/Portfolio";
import IPortfolio from "../components/individual/Portfolio";
import Nav from "../components/Nav";
import axios from "axios";

// TODO: 유저 타입에 따라 다르게 마이 페이지 보여줘야 함
function MyPage() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  // const [assets, setAssets] = useState({});
  // const [ipos, setIPOs] = useState({});
  // const [place, setPlace] = useState({});
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

    setUser(json);
    console.log("this is user", user);
    console.log(id);
    setLoading(false);
  };

  const jsonFetcher = async () => {
    const res = await axios.get(`http://localhost:8080/user/${id}`);
    console.log(res.data);
    setUser(res.data);
    // const res_assets = await axios.get(`http://localhost:8080/user/${id}/assets`);
    // console.log(res_assets.data);
    // setAssets(res_assets.data);

    // const res_ipos = await axios.get(`http://localhost:8080/user/${id}/ipos`);
    // console.log(res_ipos.data);
    // setIPOs(res_ipos.data);

    // const res_place = await axios.get(`http://localhost:8080/user/${id}/place`);
    // console.log(res_place.data);
    // setPlace(res_place.data);
    setLoading(false);
  };
  useEffect(() => {
    jsonFetcher();
  }, []);

  return (
    <div>
      <Nav />
      <div className="default-frame">
        {/* <h5>My page</h5> */}
        {loading ? (
          <h1>Loading</h1>
        ) : user.user_type == "COMPANY" ? (
          <div>
            this user is enterprise
            <EPortfolio user_type={user.user_type} />
          </div>
        ) : (
          <div>
            <IPortfolio user={user}/>
          </div>
        )}
      </div>
    </div>
  );
}
export default MyPage;
