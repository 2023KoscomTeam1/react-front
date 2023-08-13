import { Link } from "react-router-dom";
import "../../App.css";
import Assets from "../Assets";
import Ipo from "../Ipo";

class newClass extends HTMLElement {
  connectedCallback() {
    let newLabel = document.createElement('hr') // 방법1 html 생성 속도가 좀 더 빠름
    this.appendChild(newLabel)
    
    this.innerHTML = `<hr st/>`
  }
}

customElements.define('custom-input', newClass)

function IPortfolio({ user }) {
  return (
    <div>
        <h2 className="color-title"> {user.user_name} 님의 보유자산 </h2>
        <div className="content-font">
          <p>주문가: {user.balance} 원</p>
          <hr/>
          <button className="more-info-button">채우기 or 보내기 </button>
        </div>

        <h2 className="color-title">부동산</h2>
        <div className="amount-label">
          <p className="key-label">총 평가액: </p>
          <p className="value-label"> {user.user_assets.reduce((acc, cur) => {
              return acc + cur.count * cur.averagePrice;
          }, 0)} 원
          </p>
          <p className="key-label">총 수익: </p> 
          <p className="value-label"> #총 평가액 - 투자원금 </p>
          <p className="key-label">투자 원금:</p> 
          <p className="value-label"> #투자원금 </p>
        </div>
      
        <hr/>

        <div className="asset-list">
          <div> asset정보 </div>
          {user.user_assets.map((asset) => (
            <Assets
              asset_id={asset.asset_id}
              count={asset.count}
              averagePrice={asset.averagePrice}
            />
          ))}
          <hr/>
        <button className="more-info-button">대기중인 주문</button>
        </div>

        <h2 className="color-title">공모 진행중</h2>
        <div className="ipo-list">
          <div> ipo-item 정보 </div>
          {/* {user.user_ipos.map((ipo) => (
            <Ipo
              ipo_id={ipo.ipo_id}
              count={ipo.count}
            />
          ))} */}
          <hr/>
          {user.user_place}
        </div>

      </div>
  );
}
export default IPortfolio;
