import { useEffect, useState } from "react";
import Topic from "../components/Topic";

function Issues() {
  const [loading, setLoading] = useState(true);
  const [issues, setIssues] = useState({});
  const getIssues = async () => {
    // 아래의 데이터는 asset_id에 맞는 시세 데이터(차트, 호가, 거래정보), 잔고 데이터 fetch했다는 가정 하의 데이터임
    const json = [
      {
        issue_id: 1,
        topic_name: "issue1",
        image_url: "issuelink_1",
      },
      {
        issue_id: 2,
        topic_name: "issue2",
        image_url: "issuelink_2",
      },
      {
        issue_id: 3,
        topic_name: "issue3",
        image_url: "issuelink_3",
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
      <h1>Here goes my page</h1>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div>
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
