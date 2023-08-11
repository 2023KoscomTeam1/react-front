import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Here goes main page</h1>
      <h2>
        <Link to={`/login`}>login</Link>
      </h2>
    </div>
  );
}
export default Home;
