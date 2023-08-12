import { Link } from "react-router-dom";
import "../../App.css";


function IPortfolio({ users }) {
  return (
    <div>
        
        <h2> {users.name} 님의 보유자산 </h2>
        <div>
          <p>주문가: {users.balance} 원</p>
          <hr/>
          <button>채우기 or 보내기 </button>
        </div>

        <h2>부동산</h2>
        <div>
          <li>총 평가액: --보유 부동산 총평가액</li>
          <li>총 수익: --총 평가액 - 투자원금 </li>
          <li>투자 원금: --투자원금 </li>
          <hr/>
          <div> asset 정보 </div>
          <hr/>
        <button>대기중인 주문</button>
        </div>

        <h2>공모 진행중</h2>
        <div>
          <li>ipo asset 정보</li>
        </div>

      </div>
  );
}
export default IPortfolio;
