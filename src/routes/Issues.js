import { useEffect, useState } from "react";
import Topic from "../components/Topic";
import Nav from "../components/Nav";
import axios from "axios";
import { HourglassEmptyOutlined } from "@mui/icons-material";

function Issues() {
  const [loading, setLoading] = useState(true);
  const [issues, setIssues] = useState({});
  const getIssues = async () => {
    try {
      const data = await axios.get("http://localhost:8080/hot_issue/list");
      const json = sort(data);
      setIssues(json);
      setLoading(false);
    } catch (e) {}
  };

  const sort = (d) => {
    const data = d.data.issues;
    let type = new Object();
    data.map((d) => {
      if (!Object.keys(type).includes(d.topicName)) {
        type[d.topicName] = [];
      }
    });

    data.map((d) => {
      type[d.topicName].push(d.imageUrl);
    });

    return type;
  };
  useEffect(() => {
    getIssues();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="loading">
          <br />
          <div className="in-loading">
            <div>Loading</div>
            <HourglassEmptyOutlined />
          </div>
        </div>
      ) : (
        <div>
          <Nav />
          <h3>issue</h3>
          {Object.entries(issues).map(([key, value]) => (
            <div key={value}>
              <div>{key}</div>
              {value.map((v) => (
                <img src={v} alt={key} height={70} key={v} />
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default Issues;
