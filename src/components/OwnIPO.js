import { useNavigate } from "react-router-dom";
import "./OwnIPO.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { IoLocationSharp } from "react-icons/io5";
import ProgressBar from "./ProgressBar";

function OwnIPO({
  ipo_id,
  count,
}) {
    // console.log(asset_id, count, averagePrice);
    const [ipo, setIPO] = useState({});
    const [loading, setLoading] = useState(true)

    const jsonFetcher  = async () => {
        const res = await axios.get(`http://localhost:8080/ipo/${ipo_id}`)
        console.log('this is ipo info', res.data.ipo_asset);
        setIPO(res.data.ipo_asset);
        setLoading(false);
    };
    useEffect(() => {
        jsonFetcher();
    }, []);
    

    const navigate = useNavigate();

    const navigateIPODetail = (ipo_id) => {
        // 👇️ navigate to /
        navigate(`/ipo/detail/${ipo_id}`);
    };
    const target_amount = ipo.targetAmount ? (ipo.targetAmount).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") : ipo.targetAmount;
    const new_count = count ? count.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") : count;
    const dueDate = ipo.dueDate ? (ipo.dueDate).split('T')[0] : ipo.dueDate;
    const percent = Math.floor(ipo.currentAmount/ipo.targetAmount * 10000)/100;
    const filledWidth = `${percent}%`;

  return (
    <div className="own-ipo-box" onClick={() => navigateIPODetail(ipo_id)}>
      <div className="img-wrapper">
        <img src={ipo.imageUrl} alt={ipo.name}/>
      </div>
      <div>
        <div className="ipo-topbox">
            <div className="info-span">
                <div className="ipo-name">{ipo.name}</div>
                <div className="basic-text">마감일: {dueDate} </div>
            </div>

            <div className="price-span">
                <div className="amount-large">{target_amount}</div>
                <div className="neutral">내 청약수량: {new_count}</div>
            </div>
        </div>
        <div className="location-label">
            <IoLocationSharp/>
            <div className="address-label">{ipo.address}</div>
        </div>        
        <div className="percent-box">
        <ProgressBar percent={percent}/>
            <div className="gray-small-text">
                {ipo.currentAmount}/{ipo.targetAmount}
            </div>
        </div>
      </div>
    </div>
  );
}
export default OwnIPO;
