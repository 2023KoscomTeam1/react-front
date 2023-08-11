import { Link } from "react-router-dom";

function EPortfolio({ user_type }) {
  return (
    <div>
      <br />
      <h3>심사 신청</h3>
      <h4>신규 신청</h4>
      <h4>심사 확인</h4>
      <h3>투자 확인</h3>
      <h4>투자 진행</h4>
      <h4>투자 완료</h4>

      {user_type}
    </div>
  );
}
export default EPortfolio;
