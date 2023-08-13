import React, { useState } from "react";
import "./Portfolio.css";
import { Button, ButtonGroup, IconButton } from '@mui/joy';
import ApplyAudit from "./apply";
import CheckAsset from "./CheckAsset";

function EPortfolio() {
  const [activeScreen, setActiveScreen] = useState(null); // 현재 활성화된 화면을 상태로 관리

  const handleButtonClick = (screen) => {
    setActiveScreen(screen); // 버튼 클릭에 따라 화면 변경
  };

  return (
    <div className="default-frame">

      <div className="right-content">
        <ButtonGroup aria-label="outlined primary button group">
          <Button onClick={() => handleButtonClick("check")} size="sm">자산확인</Button>
          <Button onClick={() => handleButtonClick("apply")}>심사확인</Button>
          <Button>투자진행</Button>
          <Button>투자완료</Button>
        </ButtonGroup>
        
        {(activeScreen === "check" || activeScreen === null ) && <CheckAsset />} {/* 초기 자산확인 화면 */}
        {activeScreen === "apply" && <ApplyAudit />} {/* 자산확인 화면 */}
        {/* 심사신청, 심사확인, 투자진행, 투자완료 화면도 유사하게 추가 */}

      </div>
    </div>

  );
}

export default EPortfolio;
