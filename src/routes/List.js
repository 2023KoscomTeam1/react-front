import { useEffect, useState } from "react";
import Assets from "../components/Assets";
import Nav from "../components/Nav";
import "../App.css";
import SearchBox from "../components/SearchBox";

function List() {
  const [loading, setLoading] = useState(true);
  const [assets, setAssets] = useState();
  const getAssets = async () => {
    const json = [
      {
        asset_id: "1234",
        name: "fake_asset1",
        address: "fake_address1",
        whole_price: 1234,
        current_price: 4321,
        company_own_count: 1,
        foreign_own_count: 1,
        personal_own_count: 1,
      },
      {
        asset_id: "1235",
        name: "fake_asset2",
        address: "fake_address2",
        whole_price: 1235,
        current_price: 5321,
        company_own_count: 2,
        foreign_own_count: 2,
        personal_own_count: 2,
      },
    ];
    setAssets(json);
    setLoading(false);
  };
  useEffect(() => {
    getAssets();
  }, []);

  return (
    <div>
      <Nav/>
      <div className="default-frame">
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div>
          <SearchBox text="투자 상품 검색" w={300}></SearchBox>
          <div className="tab-buttons">
          <button className="tab-title-btn">전체 매물</button>
          <button className="tab-title-btn">인기 매물</button>
          <button className="tab-title-btn">나의 지역</button>
          <button className="tab-title-btn">공모 중</button>
          </div>
          {assets.map((asset) => (
            <div className="color-under-bar"><Assets
              key={asset.asset_id}
              asset_id={asset.asset_id}
              name={asset.name}
              image_url={asset.image_url}
              address={asset.address}
              whole_price={asset.whole_price}
              unit_current_price={asset.unit_current_price}
              end_price={asset.end_price}
            />
            </div>
          ))}
        </div>
      )}
      </div>
    </div>
  );
}
export default List;
