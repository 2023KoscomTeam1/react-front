import React, { useState } from "react";
import "./Portfolio.css";
import { Button, ButtonGroup, IconButton } from "@mui/joy";
import Detail_info from "./Detail_info";
import CheckAsset from "./CheckAsset";
import AuditProgress from "./Audit";
import Home from "../../routes/Home";

function EPortfolio() {
  const [activeScreen, setActiveScreen] = useState(null); // 현재 활성화된 화면을 상태로 관리

  const handleButtonClick = (screen) => {
    setActiveScreen(screen); // 버튼 클릭에 따라 화면 변경
  };
  const buttonGroupStyle = {
    display: "flex",
    justifyContent: "center", // 가로 중앙 정렬
    alignItems: "center",
    width: "100%",
    
    
  };
  return (
    <div className="default-frame">
      <div className="right-content">
        <div style={buttonGroupStyle}>
        <ButtonGroup aria-label="outlined primary button group">
          <Button
            onClick={() => handleButtonClick("check")}
            size="sm"
            color={
              activeScreen === "check" || activeScreen === null
                ? "primary"
                : "outlined"
            }
          >
            자산확인
          </Button>
          <Button
            onClick={() => handleButtonClick("detail")}
            size="sm"
            color={activeScreen === "detail" ? "primary" : "default"}
          >
            세부정보
          </Button>
          <Button
            onClick={() => handleButtonClick("audit")}
            size="sm"
            color={activeScreen === "audit" ? "primary" : "default"}
          >
            심사정보
          </Button>
          <Button
            onClick={() => handleButtonClick("done")}
            size="sm"
            color={activeScreen === "done" ? "primary" : "default"}
          >
            통계정보
          </Button>
          </ButtonGroup>
          </div>
        {(activeScreen === "check" || activeScreen === null) && <CheckAsset />}{" "}
        {/* 초기 자산확인 화면 */}
        {activeScreen === "detail" && <Detail_info />} {/* 상세정보 화면 */}
        {activeScreen === "audit" && <AuditProgress />} {/* 심사 화면 */}
        {activeScreen === "done" && <CheckAsset />} {/* 홈 화면 */}
        {/* 심사신청, 심사확인, 투자진행, 투자완료 화면도 유사하게 추가 */}
      </div>
    </div>
  );
}

export default EPortfolio;
