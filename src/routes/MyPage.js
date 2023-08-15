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

  const jsonFetcher = async () => {
    const res = await axios.get(`http://localhost:8080/user/${id}`);
    // console.log(res.data);
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
          <div className="default-frame">
            <br />
            <div>Loading</div>
          </div>
        ) : user.user_type === "COMPANY" ? (
          <div>
            <EPortfolio user_type={user.user_type} />
          </div>
        ) : (
          <div>
            <IPortfolio user={user} />
          </div>
        )}
      </div>
    </div>
  );
}
export default MyPage;
