import { Chip, TextField } from "@mui/material";
import ColorButton from "../components/Button";
import "../../src/App.css";
import { useEffect } from "react";

function Login() {
  useEffect(() => {
    const requestOptions = {
      method: "GET",
    };
    fetch("http://localhost:8080/user/root/place")
      .then((response) => console.log(response.json()))

      .catch((error) => console.log("error".error));
  }, []);

  return (
    <div className="login">
      <h3>로그인</h3>
      <h5>이메일</h5>
      <TextField id="outlined-basic" variant="outlined" size="small" />
      <h5>비밀번호</h5>
      <TextField id="outlined-basic" variant="outlined" size="small" />
      <br />
      <ColorButton text={"로그인"} size={10} w={200} />
    </div>
  );
}
export default Login;
