import { useEffect, useState } from "react";
import Assets from "../components/Assets";
import Nav from "../components/Nav";
import "../App.css";
import { Button, ButtonGroup } from '@mui/joy';
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
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

  const place = "경기";
  const handleChange = () => {
    return;
  }

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
            <div className="place-combo">
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-simple-select-label">Place</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={place}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={"SEOUL"}>서울</MenuItem>
              <MenuItem value={"KANGWON"}>강원도</MenuItem>
              <MenuItem value={"KYUNGI"}>경기도</MenuItem>
              <MenuItem value={"KYUNGSANG"}>경상도</MenuItem>
              <MenuItem value={"KWANGJU"}>광주</MenuItem>
              <MenuItem value={"DAEJEON"}>대전</MenuItem>
              <MenuItem value={"DAEGU"}>대구</MenuItem>
              <MenuItem value={"PUSAN"}>부산</MenuItem>
              <MenuItem value={"SEJONG"}>세종</MenuItem>
              <MenuItem value={"ULSAN"}>울산</MenuItem>
              <MenuItem value={"INCHEON"}>인천</MenuItem>
              <MenuItem value={"JEONLA"}>전라도</MenuItem>
              <MenuItem value={"CHOONGCHUNG"}>충청도</MenuItem>

            </Select>
          </FormControl>
          </div>
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

