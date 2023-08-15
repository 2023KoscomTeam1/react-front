import React from "react";
import Typography from '@mui/joy/Typography';
import "../../App.css";
import "./BuildingInfo.css"
import './Detail_info.css'

function AuditProgress() {
    return (
        <div className="content-font">
            <h2 className="color-title"> 심사 진행 현황 </h2>
            <hr />
            <h3>카페 쿠버네티스</h3>
            <p>충남 예산군 덕산면 덕산온천로 227</p>
            <hr />

            <div>
                <Typography
                    id="basic-list-demo"
                    level="body-xs"
                    textTransform="uppercase"
                    fontWeight="lg"
                >
                </Typography>
                <h3 className="key-label">심사 정보</h3>
                <hr />
                <p className="key-label">재무평가 결과 </p>
                <p className="value-label2"> 자산 가치 평가 : 3,000,000(천원)</p>
                <hr />
                <p className="key-label">배당 정보</p>
                <p className="value-label2"> 분기 단위 배당</p> 
                <p className="value-label2"> 배당 방식 : 지분 비례</p>
                <p className="value-label2"> 희망 지분 배정 : 30%</p>
                <hr/>
                <p className="key-label">비고</p>
                <p className="value-label2" >심사기관 : 한국부동산평가원 | 예산군청</p>
                <p className="value-label2" >심사일자 : 2023.06.25</p>
            </div>

        </div>
    )
}

export default AuditProgress;
