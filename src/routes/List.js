import { useEffect, useState } from "react";
import Assets from "../components/Assets";
import Nav from "../components/Nav";
import "../App.css";
import axios from "axios";
import SearchBox from "../components/SearchBox";

function List() {
  const [loading, setLoading] = useState(true);
  const [assets, setAssets] = useState();
  const getAssets = async () => {
    const res = await axios.get(`http://localhost:8080/assets/list`)
      console.log('this is assets info', res.data.assets);
      setAssets(res.data.assets);
      setLoading(false);
  };
  useEffect(() => {
    getAssets();
  }, []);


  return (
    <div>
      <Nav/>
      <div className="default-frame">
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div>
          <SearchBox text="투자 상품 검색" w={300}></SearchBox>
          <div className="tab-buttons">
          <button className="tab-title-btn" >전체 매물</button>
          <button className="tab-title-btn" >인기 매물</button>
          <button className="tab-title-btn" >나의 지역</button>
          <button className="tab-title-btn" >공모 중</button>
          </div>
          <hr/>
          
            {assets.map((asset) => (
              <div className="color-under-bar">
                <Assets asset={asset}/>
              </div>
            ))}
        </div>
      )}
      </div>
    </div>
  );
}
export default List;
