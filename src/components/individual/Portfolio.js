import { Link } from "react-router-dom";
import "../../App.css";
import OwnIPO from "../OwnIPO";
import { useEffect, useState } from "react";
import axios from "axios";
import OwnAsset from "../OwnAsset";

class newClass extends HTMLElement {
  connectedCallback() {
    let newLabel = document.createElement("hr"); // 방법1 html 생성 속도가 좀 더 빠름
    this.appendChild(newLabel);

    this.innerHTML = `<hr st/>`;
  }
}

customElements.define("custom-input", newClass);

function IPortfolio({ user }) {
  const [loading, setLoading] = useState(true);
  const [totalAmount, setTotalAmount] = useState();
  const jsonFetcher = async () => {
    const res = await axios.get(`http://localhost:8080/assets/list`);
    console.log("check!", res.data.assets);
    setLoading(false);
    const tmp_asset = res.data.assets;
    const total_amount = () => {
      let currentTotalAmount = 0;
      user.user_assets.forEach((myAsset) => {
        const asset = tmp_asset.find(
          (asset) => asset.assetId === myAsset.assetId
        );
        if (asset) {
          const currentTotalValue = asset.currentUnitPrice * myAsset.count;
          currentTotalAmount += currentTotalValue;
        }
      });
      return currentTotalAmount;
    };
    setTotalAmount(total_amount());
  };
  useEffect(() => {
    jsonFetcher();
  }, []);

  /* 투자 원금 */
  const original_amount = user.user_assets.reduce((acc, cur) => {
    return acc + cur.count * cur.averagePrice;
  }, 0);

  /* 현재 수익 */
  const total_profit = totalAmount - original_amount;
  /* 현재 수익율 */
  const total_profit_percent =
    Math.round((total_profit / totalAmount) * 10000) / 100;

  return (
    <div>
      <p className="my-place">My 지역: {user.user_place}</p>
      <h2 className="color-title"> {user.user_name} 님의 보유자산 </h2>
      <div className="main-amount">
        <p className="left-label">주문 가능 금액: </p>
        <p className="right-label">
          {" "}
          {user.balance
            .toString()
            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}{" "}
          원
        </p>
      </div>
      {/* <hr/> */}
      <button className="more-info-button">채우기 or 보내기 </button>

      <h2 className="color-title">부동산</h2>
      <div className="amount-label">
        <p className="key-label">총 평가액: </p>
        <p className="value-label">
          {" "}
          {totalAmount
            ? totalAmount
                .toString()
                .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
            : 0}
        </p>
      </div>
      <div className="amount-label">
        <p className="key-label">총 수익: </p>
        <p className="value-label">
          {total_profit
            .toString()
            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}{" "}
          ({total_profit_percent}%)
        </p>
      </div>
      <div className="amount-label">
        <p className="key-label">투자 원금:</p>
        <p className="value-label"> {original_amount} </p>
      </div>

      <hr />

      <div className="asset-list">
        {user.user_assets ? (
          <div>
            {user.user_assets.map((asset) => (
              <div key={asset}>
                <OwnAsset
                  asset_id={asset.assetId}
                  count={asset.count}
                  averagePrice={asset.averagePrice}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="gray-small-text"> 새로운 상품에 투자해보세요! </div>
        )}

        {/* <hr/> */}
        <button className="more-info-button">대기중인 주문</button>
      </div>

      <h2 className="color-title">공모 진행중</h2>
      <div className="ipo-list">
        {user.user_ipos ? (
          <div>
            {user.user_ipos.map((ipo) => (
              <div key={ipo}>
                <OwnIPO ipo_id={ipo.ipoId} count={ipo.count} myPage={true} />
              </div>
            ))}
          </div>
        ) : (
          <div className="gray-small-text"> 새로운 공모를 신청해보세요! </div>
        )}

        <button className="more-info-button">공모 신청 이력</button>
      </div>
      <div className="bottom-empty-space"></div>
    </div>
  );
}
export default IPortfolio;
