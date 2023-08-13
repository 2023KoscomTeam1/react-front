import React, { useState } from "react";
import Sheet from '@mui/joy/Sheet';
import BasicList from "./ListComponent1";
import { Button, ButtonGroup, IconButton } from '@mui/joy';
import LandInfo from "./LandInfo";
import BuildingInfo from "./BuildingInfo";
import "./CheckAsset.css"

function CheckAsset() {
    const [activeInfo, setActiveInfo] = useState(null); // 현재 활성화된 화면을 상태로 관리

    const handleButtonClick = (screen) => {
        setActiveInfo(screen); // 버튼 클릭에 따라 화면 변경
    };
    return (
        <div className="image-description">
            <div className="content-font">
                <h2 className="color-title"> 관리자님의 보유자산 </h2>
                <hr />
                <h3>카페 쿠버네티스</h3>
                <p>서울특별시 강서구 강서로 33가길 4</p>
                
                <img
                    src="/img/cafe1.jpg"
                    alt="Representative"
                    className="representative-image"
                />

                <p>주소: 서울특별시 강서구 강서로 33가길 4</p>
                <p>자산명: 더에스에스타운</p>
                <p>유형: 상가</p>
                <hr />
                <h3 className="color-title"> 상세 정보 </h3>
                <span className="button-container">
                    <ButtonGroup aria-label="outlined primary button group">
                        <Button onClick={() => handleButtonClick("Land")}>토지정보</Button>
                        <Button onClick={() => handleButtonClick("Building")}>건물정보</Button>
                    </ButtonGroup>
                </span>



                <Sheet variant="outlined" color="neutral" sx={{ p: 4 }}>
                    {(activeInfo === "Land" || activeInfo === null) && <LandInfo />} {/* 토지 정보 */}
                    {activeInfo === "Building" && <BuildingInfo />} {/* 건물 정보 */}

                </Sheet>

            </div>
        </div>
    )
}

export default CheckAsset;