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
      <Card variant="outlined">
        <div>
          <div>개인 매입 수량 : {personalOwnCount}</div>
          <div>기관 매입 수량 : {companyOwnCount}</div>
          <div>외인 매입 수량 : {foreignOwnCount}</div>
          <div>관심 거래자 수 : {viewCount}</div>
        </div>
      </Card>
    </div>
  );
}
