import React from "react";
import Typography from '@mui/joy/Typography';
import "../../App.css";
import "./BuildingInfo.css"
import './Detail_info.css'

function Detail_info() {
  return (
    <div className="content-font">
      <h2 className="color-title"> 세부 자산 현황 </h2>
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
        
        <p className="key-label">사업자 정보 </p>
        <p className="value-label2"> 상호명 : ABC 컴퍼니</p>
        <p className="value-label2"> 사업자 등록번호 : 123-456-890</p>
        <p className="value-label2"> 대표자명 : 양준석</p>
        <hr />
        <p className="key-label">재무정보(최근 3년 평균)</p>
        <p className="value-label2"> 월 평균 매출액: 2,000,000</p>
        <p className="value-label2"> 순수익 : 500,000</p>
        <p className="value-label2"> 부채 : 800,000</p>
        <p className="value-label2"> 단위 : 천 원</p>
        <hr />
        <p className="key-label">재무정보</p>
        <p className="value-label2"> 월 매출액: 200,000,000원</p>
      </div>
    </div>
  )
}

export default Detail_info;
