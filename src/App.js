import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Login from "./routes/Login";
import List from "./routes/List";
import MyPage from "./routes/MyPage";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/assets" element={<List />} />
        <Route path="/assets/detail/:id" element={<Detail />} />
        <Route path="/user/:id" element={<MyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
