import { useCallback, useEffect, useState } from "react";
import Assets from "../components/Assets";
import Nav from "../components/Nav";
import "../App.css";
import { Button, ButtonGroup } from "@mui/joy";
import { styled } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import SearchBox from "../components/SearchBox";
import BasicTable from "../components/BasicTable";
import { InputBase } from "@mui/material";
import { useAuthUser, useIsAuthenticated } from "react-auth-kit";
const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(2),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}));

function List() {
  const [activeInfo, setActiveInfo] = useState("all"); // 현재 활성화된 화면을 상태로 관리

  const [loading, setLoading] = useState(true);
  const [assets, setAssets] = useState();
  const [popular, setPopular] = useState();
  const [home, setHome] = useState();

  const [viewer, setViewer] = useState();

  const auth = useAuthUser();
  const isAuthenticated = useIsAuthenticated();
  const handleButtonClick = (screen) => {
    setActiveInfo(screen); // 버튼 클릭에 따라 화면 변경
  };
  const getAssets = useCallback(async () => {
    const res = await axios.get(`http://localhost:8080/assets/list`);
    console.log("this is assets info", res.data.assets);
    setAssets(res.data.assets);
    setLoading(false);
  }, [assets]);

  const getPopular = useCallback(async () => {
    const newAssets = assets.filter((asset) => asset.viewCount % 2 == 1);
    setPopular(newAssets);
  }, [assets, popular]);

  const getHome = useCallback(async () => {
    console.log("im in get home");
    const res = await axios.get(`http://localhost:8080/user/${viewer}/place`);
    const homeTown = res.data.user_place;
    const myHome = assets.filter((asset) => asset.placeType === homeTown);
    setHome(myHome);
  }, [viewer, assets]);

  const place = "경기";
  const handleChange = () => {
    return;
  };

  useEffect(() => {
    isAuthenticated() && setViewer(Object.values(auth())[0]);
  });

  useEffect(() => {
    getAssets();
    console.log("activeInfo:", activeInfo);
  }, [activeInfo]);

  useEffect(() => {
    assets && getPopular();
    assets && console.log("this is popular2", popular);
  }, [assets]);

  useEffect(() => {
    viewer && assets && getHome();
    console.log("this is viewer", viewer);
    console.log("this is viewer", home);
  }, [viewer, assets]);

  useEffect(() => {
    console.log("this is home", home);
  }, [home]);

  return (
    <div>
      <Nav />
      <div className="default-frame">
        {loading ? (
          <div className="default-frame">
            <br />
            <div>Loading</div>
          </div>
        ) : (
          <div>
            <SearchBox text="투자 상품 검색" w={300}></SearchBox>
            <span className="button-container">
              <ButtonGroup aria-label="outlined primary button group">
                <Button
                  onClick={() => handleButtonClick("all")}
                  color={
                    activeInfo === "all" || activeInfo === null
                      ? "primary"
                      : "default"
                  }
                >
                  전체매물
                </Button>
                <Button
                  onClick={() => handleButtonClick("popular")}
                  color={activeInfo === "popular" ? "primary" : "default"}
                >
                  인기매물
                </Button>
                <Button
                  onClick={() => handleButtonClick("hometown")}
                  color={activeInfo === "hometown" ? "primary" : "default"}
                >
                  내 지역
                </Button>
                <Button
                  onClick={() => handleButtonClick("inProgress")}
                  color={activeInfo === "inProgress" ? "primary" : "default"}
                >
                  공모중
                </Button>
              </ButtonGroup>
            </span>
            {/* <div className="tab-buttons">
              <button className="tab-title-btn" >전체 매물</button>
              <button className="tab-title-btn" >인기 매물</button>
              <button className="tab-title-btn" >나의 지역</button>
              <button className="tab-title-btn" >공모 중</button>
            </div> */}
            <br />
            <div className="place-combo">
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                {/* <InputLabel id="demo-customized-select-label">장소</InputLabel> */}
                <Select
                  labelId="demo-customized-select-label"
                  id="demo-customized-select"
                  value={place}
                  onChange={handleChange}
                  input={<BootstrapInput />}
                  style={{ height: "30px" }}
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
            <br />
            {/* {activeInfo === "all" ? ( */}
            {(activeInfo === "all" || (activeInfo === "hometown" && !viewer)) &&
              assets.map((asset) => (
                <div className="color-under-bar">
                  <Assets asset={asset} />
                </div>
              ))}
            {activeInfo === "popular" &&
              popular.map((p) => (
                <div className="color-under-bar">
                  <Assets asset={p} />
                </div>
              ))}
            {activeInfo === "hometown" &&
              viewer &&
              home &&
              home.map((h) => (
                <div className="color-under-bar">
                  <Assets asset={h} />
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
export default List;
