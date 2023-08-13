import { Chip } from "@mui/material";
import ColorButton from "../components/Button";
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
    <div>
      <h3>로그인</h3>
      <h3>이메일</h3>
      <h3>비밀번호</h3>
      <ColorButton text={"로그인"} size={20} />
      <Chip label="Chip Filled" />
    </div>
  );
}
export default Login;
