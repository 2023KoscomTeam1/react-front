import { Link } from "react-router-dom";
import "../../App.css";

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
        <h2 className="color-title"> {user.name} 님의 보유자산 </h2>
        <div className="content-font">
          <p>주문가: {user.balance} 원</p>
          <hr/>
          <button className="more-info-button">채우기 or 보내기 </button>
        </div>

        <h2 className="color-title">부동산</h2>
        <div className="amount-label">
          <p>총 평가액: </p><p> #총평가액 </p>
          <p>총 수익: </p> <p> #총 평가액 - 투자원금 </p>
          <p>투자 원금:</p> <p> #투자원금 </p>
        </div>
      
        <hr/>

        <div className="asset-list">
          <div> asset 정보 </div>
          <hr/>
        <button className="more-info-button">대기중인 주문</button>
        </div>

        <h2 className="color-title">공모 진행중</h2>
        <div className="ipo-list">
          <div> ipo-item 정보 </div>
          <hr/>
        </div>

      </div>
  );
}
export default IPortfolio;
