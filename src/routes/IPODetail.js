import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import "../App.css";
import Nav from "../components/Nav";
import axios from "axios";
import VerticalProgressBar from "../components/VerticalProgressBar";
import { IoLocationSharp } from "react-icons/io5";
import ColorButton from "../components/Button";


function IPODetail({
    ipo_id,
}) {
  ipo_id = 1;
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [ipo, setIPO] = useState({});

  const jsonFetcher = async () => {
    const res = await axios.get(`http://localhost:8080/ipo/${ipo_id}`);
    console.log(res.data.ipo_asset);
    setIPO(res.data.ipo_asset);
    setLoading(false);
  };
  useEffect(() => {
    jsonFetcher();
  }, []);

  const dueDate = ipo.dueDate ? (ipo.dueDate).split('T')[0] : ipo.dueDate;

  const count = 0; /* 값 받아오기 */

  return (
    <div>
      <Nav />
      <div className="default-frame">
        {/* <h5>My page</h5> */}
        {loading ? (
          <h1>Loading</h1>
        ) : 
        <div className="ipo-frame">
            <p></p>
            <div className="color-title"> 공모주 상세 </div>
            <div className="ipo-wrapper">
                <img src={ipo.imageUrl} alt={ipo.name}/>
            </div>
            
            <div className="ipo-info-box">
                <div className="ipo-top-box">
                    <div className="ipo-top-left">
                        <div className="ipo-title">{ipo.name}</div>
                        <div className="location-label"><IoLocationSharp/><div className="address-label">{ipo.address}</div></div>
                    </div>
                    <div className="ipo-top-right">
                        <div>마감일: {dueDate}</div>
                    </div>
                </div>
                <hr/>
                <div className="ipo-bottom-box">
                    <VerticalProgressBar percent={60} />
                    <div className="number-infos">

                    <div className="ipo-info-label">
                        <div className="ipo-price">공모가:</div> <div> {ipo.unitPrice}</div>
                    </div>
                    <div className="ipo-info-label">
                        <div>공모 수량:</div> <div> {ipo.targetAmount}</div>
                    </div>
                    <div className="ipo-info-label">
                        <div>현재 수량:</div> <div> {ipo.currentAmount}</div>
                    </div>
                    <div className="ipo-info-label">
                        <div>내 공모 수량:</div> <div> {count}</div>
                    </div>
                    <div className="ipo-info-label">
                        <div>총 증거금:</div> <div> {}</div> 
                    </div>
                    <div className="ipo-info-label">
                        <div>신규 공모 수량: </div>
                        <div className="number-input"></div>
                    </div>
                    <div className="ipo-info-label">
                        <div>신청 금액:</div> <div> {}</div> 
                    </div>
                        <div className="button-span"><ColorButton size={20} w={120} text={"공모 신청"}/></div>
                    </div>
                </div>
            </div>
            
        </div>
        }
      </div>
    </div>

  );
}
export default IPODetail;
