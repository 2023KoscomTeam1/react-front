import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../App.css";
import Nav from "../components/Nav";
import axios from "axios";
import VerticalProgressBar from "../components/VerticalProgressBar";
import { IoLocationSharp } from "react-icons/io5";
import ColorButton from "../components/Button";
import ViewPDF from "../components/individual/GovermentPDF";
import { useAuthUser, useIsAuthenticated } from "react-auth-kit";

function IPODetail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [ipo, setIPO] = useState({});
  const [viewer, setViewer] = useState();
  const [myIpoCount, setMyIpoCount] = useState(0);
  const auth = useAuthUser();
  const isAuthenticated = useIsAuthenticated();

  const jsonFetcher = async () => {
    const res = await axios.get(`http://localhost:8080/ipo/${id}`);
    // console.log("serserr", res.data.ipo_asset);
    setIPO(res.data.ipo_asset);
    setLoading(false);
  };
  const getMyIpoCount = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/user/${viewer}/ipos`
      );

      setMyIpoCount(data.user_ipos.filter((d) => d.ipoId == id)[0]["count"]);
    } catch (e) {}
  }, [viewer, id]);

  useEffect(() => {
    isAuthenticated() && setViewer(Object.values(auth())[0]);
  }, []);

  useEffect(() => {
    viewer && getMyIpoCount();
  }, [viewer]);

  useEffect(() => {
    jsonFetcher();
  }, []);

  const dueDate = ipo.dueDate ? ipo.dueDate.split("T")[0] : ipo.dueDate;

  const count = 0; /* 값 받아오기 */

  return (
    <div>
      <Nav />
      <div className="default-frame">
        {/* <h5>My page</h5> */}
        {loading ? (
          <div className="default-frame">
            <br />
            <div>Loading</div>
          </div>
        ) : (
          <div className="ipo-frame">
            <p></p>
            <div className="img-top-title"> 공모주 상세 </div>
            <div className="ipo-wrapper">
              <img src={ipo.imageUrl} alt={ipo.name} />
            </div>
            <div className="img-cover"> </div>

            <div className="ipo-info-box">
              <div className="ipo-top-box">
                <div className="ipo-top-left">
                  <div className="ipo-title">{ipo.name}</div>
                  <div className="location-label">
                    <IoLocationSharp />
                    <div className="address-label">{ipo.address}</div>
                  </div>
                </div>
                <div className="ipo-top-right">
                  <div>마감일: {dueDate}</div>
                </div>
              </div>
              <hr />
              <div className="ipo-bottom-box">
                <VerticalProgressBar percent={60} />
                <div className="number-infos">
                  <div className="right-span">
                    <div className="gray-small-text">참고 자료: </div>
                    <ViewPDF />
                  </div>
                  <div className="ipo-info-label">
                    <div className="ipo-price">공모가:</div>{" "}
                    <div> {ipo.unitPrice}</div>
                  </div>
                  <div className="ipo-info-label">
                    <div>공모 수량:</div> <div> {ipo.targetAmount}</div>
                  </div>
                  <div className="ipo-info-label">
                    <div>현재 수량:</div> <div> {ipo.currentAmount}</div>
                  </div>
                  <div className="ipo-info-label">
                    <div>내 공모 수량:</div> <div> {myIpoCount}</div>
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
                  <div className="button-span">
                    <ColorButton size={20} w={120} text={"공모 신청"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default IPODetail;
