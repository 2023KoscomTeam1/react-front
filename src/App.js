import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Login from "./routes/Login";
import List from "./routes/List";
import MyPage from "./routes/MyPage";
import Detail from "./routes/Detail";
import IPODetail from "./routes/IPODetail";
import Issues from "./routes/Issues";
import EPortfolio from "./components/enterprise/Portfolio";
import BasicTable from "./components/BasicTable";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/assets" element={<List />} />
      <Route path="/assets/detail/:id" element={<Detail />} />
      <Route path="/user/:id" element={<MyPage />} />
      <Route path="/issues" element={<Issues />} />
      <Route path="/company/portfolio" element={<EPortfolio />} />
      {/* <Route path="/basictable" element={<BasicTable />} /> */}
    </Routes>
  );
}

export default App;
