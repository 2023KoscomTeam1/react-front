import { useEffect, useState } from "react";
import Topic from "../components/Topic";
import Nav from "../components/Nav";

function Issues() {
  const [loading, setLoading] = useState(true);
  const [issues, setIssues] = useState({});
  const getIssues = async () => {
    // 아래의 데이터는 asset_id에 맞는 시세 데이터(차트, 호가, 거래정보), 잔고 데이터 fetch했다는 가정 하의 데이터임
    const json = [
      {
        _id: {
          $oid: "64d8723cf6c95bc540850a09",
        },
        issue_id: "1",
        topic_name: "신규 부동산 공모",
        image_url:
          "https://drive.google.com/uc?id=116tXYq8UugEghvmjihsbmKxLilKEIinf",
      },
      {
        _id: {
          $oid: "64d87279f6c95bc540850a0a",
        },
        issue_id: "2",
        topic_name: "신규 부동산 공모",
        image_url:
          "https://drive.google.com/uc?id=1WEr4p6-Dm3ve_jallTeLziTYtdAIh60T",
      },
      {
        _id: {
          $oid: "64d8735bf6c95bc540850a0b",
        },
        issue_id: "3",
        topic_name: "기존 부동산 공모",
        image_url:
          "https://drive.google.com/uc?id=1LpLBeOPFyPIJMDyMJcYUf54AfGnGMDZY",
      },
    ];

    console.log(json);
    setIssues(json);
    console.log(issues);
    setLoading(false);
  };
  useEffect(() => {
    getIssues();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div>
          <Nav />
          <h3>issue</h3>
          {issues.map((issue) => (
            <Topic
              key={issue.issue_id}
              topic_name={issue.topic_name}
              image_url={issue.image_url}
            />
          ))}
        </div>
      )}
    </div>
  );
}
export default Issues;
