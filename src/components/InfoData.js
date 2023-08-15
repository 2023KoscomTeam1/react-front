import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function InfoData() {
  const { id } = useParams();
  const [assetData, setAssetData] = useState({});

  const getAssetData = useCallback(async () => {
    const { data } = await axios.get(`http://localhost:8080/assets/${id}`);
    setAssetData(data.asset);
    console.log(assetData);
  }, []);
  useEffect(() => {
    getAssetData();
    // console.log("this is param", id);
    console.log(assetData);
  }, []);

  return (
    <div>
      <div>개인 매입 수량 : {assetData.personalOwnCount}</div>
      <div>기관 매입 수량 : {assetData.companyOwnCount}</div>
      <div>외인 매입 수량 : {assetData.foreignOwnCount}</div>
      <div>관심 거래자 수 : {assetData.viewCount}</div>
    </div>
  );
}
