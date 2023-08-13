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
    })
    .catch(err => console.log(err));
    console.log("this is res", res.ok);
  };

  return (
    <div>
      <Nav />
      <div className="default-frame">
        <form className="login" onSubmit={submitHandler}>
          <div className="gray-center-title">
          <label>로그인</label>
          </div>
          <p className="small-title">아이디</p>
          <input className="text-input"
            onChange={idHandler}
            placeholder="아이디를 입력해 주세요."
          />
          <p className="small-title">비밀번호</p>
          <input className="text-input"
            onChange={pwdHandler}
            placeholder="비밀번호를 입력해 주세요."
          />
          <br />
          <br/>
          <ColorButton text={"로그인"} size={17} w={320} t={"submit"} />

          <div className="one-line"> 
            <p> 비밀번호 찾기 </p> 
            <p>|</p> 
            <p>회원가입</p> 
          </div>
          
        </form>
      </div>
    </div>
  );
}
export default Login;
