import React, { useState } from "react";
import Sheet from '@mui/joy/Sheet';
import BasicList from "./ListComponent1";
import { Button, ButtonGroup, IconButton } from '@mui/joy';
import LandInfo from "./LandInfo";
import BuildingInfo from "./BuildingInfo";
import "./CheckAsset.css"
import InvestInfo from "./InvestInfo";

function CheckAsset() {
    const [activeInfo, setActiveInfo] = useState(null); // 현재 활성화된 화면을 상태로 관리

    const handleButtonClick = (screen) => {
        setActiveInfo(screen); // 버튼 클릭에 따라 화면 변경
    };
    const buttonGroupStyle2 = {
        display: "flex",
        justifyContent: "flex-end", // 왼쪽으로 정렬
        alignItems: "center",
        width: "100%",
        padding: "3px",


    };

    return (
        <div className="image-description">
            <div className="content-font">
                <h2 className="color-title"> 관리자님의 보유자산 </h2>
                <hr />
                <h3>1. 카페 쿠버네티스</h3>
                <div className="right-allign">
                    <p>[토지 + 상가건물]</p>
                </div>


                <img
                    src="/img/cafe1.jpg"
                    alt="Representative"
                    className="representative-image"

                />

                <p>주소: 충남 예산군 덕산면 덕산온천로 227</p>
                <p>자산명: 카페 쿠버네티스</p>
                <p>유형: 상가</p>
                <hr />
                <h3 className="color-title"> 상세 정보 </h3>
                <ButtonGroup aria-label="outlined primary button group" style={buttonGroupStyle2}>
                    <Button
                        onClick={() => handleButtonClick("Invest")}
                        color={(activeInfo === "Invest" || activeInfo === null) ? "primary" : "default"}
                    >투자정보</Button>
                    <Button
                        onClick={() => handleButtonClick("Land")}
                        color={activeInfo === "Land" ? "primary" : "default"}
                    >토지정보</Button>
                    <Button
                        onClick={() => handleButtonClick("Building")}
                        color={activeInfo === "Building" ? "primary" : "default"}
                    >건물정보</Button>
                </ButtonGroup>

                <Sheet variant="outlined" color="neutral" sx={{ p: 4 }}>
                    {(activeInfo === "Invest" || activeInfo === null) && <InvestInfo />} {/* 투자 정보 */}
                    {activeInfo === "Land" && <LandInfo />} {/* 토지 정보 */}
                    {activeInfo === "Building" && <BuildingInfo />} {/* 건물 정보 */}

                </Sheet>

            </div>
        </div>
    )
}

export default CheckAsset;