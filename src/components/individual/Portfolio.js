import { Link } from "react-router-dom";
import "../../App.css";
import OwnIPO from "../OwnIPO";
import { useEffect, useState } from "react";
import axios from "axios";
import OwnAsset from "../OwnAsset";

class newClass extends HTMLElement {
  connectedCallback() {
    let newLabel = document.createElement('hr') // 방법1 html 생성 속도가 좀 더 빠름
    this.appendChild(newLabel)
    
    this.innerHTML = `<hr st/>`
  }
}

customElements.define('custom-input', newClass)

function IPortfolio({ user }) {
  const [ipo_infos, setIPOinfos] = useState({});
  const [loading, setLoading] = useState(true)
  const jsonFetcher  = async () => {
    const res = await axios.get(`http://localhost:8080/assets/list`)
    console.log(res.data.assets)

    const assets = res.data.assets
    const assetList = (user.user_assets.map((u) => u.assetId))

    const filtered_assets = assets.filter((a) => assetList.includes(a.assetId));
    console.log(filtered_assets);
    setLoading(false);
    // for(filtered_assets)
  };
  useEffect(() => {
    jsonFetcher();
  }, []);
  return (
    <div>
      <p className="my-place">My 지역: {user.user_place}</p>
        <h2 className="color-title"> {user.user_name} 님의 보유자산 </h2>
        <div className="main-amount">
          <p className="left-label">주문 가능 금액: </p> 
          <p className="right-label"> {(user.balance).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")} 원</p>
        </div>
          {/* <hr/> */}
        <button className="more-info-button">채우기 or 보내기 </button>
        

        <h2 className="color-title">부동산</h2>
        <div className="amount-label">
          <p className="key-label">총 평가액: </p>
          <p className="value-label"> {user.user_assets.reduce((acc, cur) => {
              return acc + cur.count * cur.averagePrice;
          }, 0)} 원
          </p>
         </div>
        <div className="amount-label">
          <p className="key-label">총 수익: </p> 
          <p className="value-label"> #총 평가액 - 투자원금 </p>
        </div>
        <div className="amount-label">
          <p className="key-label">투자 원금:</p> 
          <p className="value-label"> #투자원금 </p>
        </div>
      
        <hr/>

        <div className="asset-list">
          {user.user_assets ? <div> {user.user_assets.map((asset) => (
            <OwnAsset
              asset_id={asset.assetId}
              count={asset.count}
              averagePrice={asset.averagePrice}
            />
          ))} </div> : <div className="gray-small-text"> 새로운 상품에 투자해보세요! </div>}

          
          {/* <hr/> */}
        <button className="more-info-button">대기중인 주문</button>
        </div>

        <h2 className="color-title">공모 진행중</h2>
        <div className="ipo-list">
          {user.user_ipos ? <div> {user.user_ipos.map((ipo) => (
            <OwnIPO
              ipo_id={ipo.ipoId}
              count={ipo.count}
            />
          ))} </div> : <div className="gray-small-text"> 새로운 공모를 신청해보세요! </div>}    

          <button className="more-info-button">공모 신청 이력</button>
        </div>
      <div className="bottom-empty-space"></div>
      </div>
  );
}
export default IPortfolio;
