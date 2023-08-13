import { TextField } from "@mui/material";
import ColorButton from "../components/Button";
import "../../src/App.css";
import { useEffect, useState } from "react";
import Nav from "../components/Nav";

function Login() {
  const [id, setId] = useState();
  const [pwd, setPwd] = useState();

  /* item fetch 시 이하 코드 사용 */
  // const requestOptions = async () => {
  //   const json = await (
  //     await fetch("http://localhost:8080/user/root/place")
  //   ).json();
  //   console.log(json);
  // };
  // useEffect(() => {
  //   requestOptions();
  // }, []);

  const idHandler = (e) => {
    setId(e.target.value);
    console.log(id);
  };

  const pwdHandler = (e) => {
    setPwd(e.target.value);
    console.log(pwd);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("loginId", id);
    formData.append("password", pwd);

    const res = await fetch("/api/login", {
      method: "POST",
      body: formData,
    });
    console.log("this is res", res);
  };

  return (
    <div>
      <Nav />
      <form className="login" onSubmit={submitHandler}>
        <label>로그인</label>
        <h5>아이디</h5>
        <TextField
          id="outlined-basic"
          variant="outlined"
          size="small"
          onChange={idHandler}
        />
        <h5>비밀번호</h5>
        <TextField
          id="outlined-basic"
          variant="outlined"
          size="small"
          onChange={pwdHandler}
        />
        <br />
        <ColorButton text={"로그인"} size={10} w={200} t={"submit"} />
      </form>
    </div>
  );
}
export default Login;
