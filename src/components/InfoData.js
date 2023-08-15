import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Card } from "@mui/material";

export default function InfoData({
  personalOwnCount,
  companyOwnCount,
  foreignOwnCount,
  viewCount,
}) {
  return (
    <div>
      <Card variant="outlined" style={{padding:"5px"}}>
        <div className="trading-info">
          <div>개인 매입 수량: </div><div>{personalOwnCount}</div>
        </div>
        <div className="trading-info">
          <div>기관 매입 수량:</div><div> {companyOwnCount}</div>
        </div>
        <div className="trading-info">
          <div>외인 매입 수량:</div><div> {foreignOwnCount}</div>
        </div>
        <div className="trading-info">
          <div>관심 거래자 수:</div><div> {viewCount}</div>
        </div>
      </Card>
    </div>
  );
}
