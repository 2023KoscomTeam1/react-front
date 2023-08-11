import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Login from "./routes/Login";
import List from "./routes/List";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/assets/" element={<List />} />
      </Routes>
    </Router>
  );
}

export default App;
