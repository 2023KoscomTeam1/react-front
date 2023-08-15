import { useEffect, useState } from "react";
import Assets from "../components/Assets";
import Nav from "../components/Nav";
import "../App.css";
import { Button, ButtonGroup, IconButton } from '@mui/joy';
import axios from "axios";
import SearchBox from "../components/SearchBox";

function List() {
  const [activeInfo, setActiveInfo] = useState(null); // 현재 활성화된 화면을 상태로 관리

  const handleButtonClick = (screen) => {
    setActiveInfo(screen); // 버튼 클릭에 따라 화면 변경
  };
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
      <Nav />
      <div className="default-frame">
        {loading ? (
          <h1>Loading</h1>
        ) : (
          <div>
            <SearchBox text="투자 상품 검색" w={300}></SearchBox>

            <span className="button-container">
              <ButtonGroup aria-label="outlined primary button group">
                <Button
                  onClick={() => handleButtonClick("all")}
                  color={(activeInfo === "all" || activeInfo === null) ? "primary" : "default"}
                >전체매물</Button>
                <Button
                  onClick={() => handleButtonClick("popular")}
                  color={activeInfo === "popular" ? "primary" : "default"}
                >인기매물</Button>
                <Button
                  onClick={() => handleButtonClick("hometown")}
                  color={activeInfo === "hometown" ? "primary" : "default"}
                >내 지역</Button>
                <Button
                  onClick={() => handleButtonClick("inProgress")}
                  color={activeInfo === "inProgress" ? "primary" : "default"}
                >공모중</Button>
              </ButtonGroup>
            </span>
            {/* <div className="tab-buttons">
              <button className="tab-title-btn" >전체 매물</button>
              <button className="tab-title-btn" >인기 매물</button>
              <button className="tab-title-btn" >나의 지역</button>
              <button className="tab-title-btn" >공모 중</button>
            </div> */}
            <hr />

            {assets.map((asset) => (
              <div className="color-under-bar">
                <Assets asset={asset} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
export default List;

