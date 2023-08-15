import ColorButton from "../components/Button";
import "../../src/App.css";
import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import { useAuthUser, useIsAuthenticated, useSignIn } from "react-auth-kit";
import { useNavigate } from "react-router-dom";

function Login() {
  const [id, setId] = useState();
  const [pwd, setPwd] = useState();

  const navigate = useNavigate();
  const signIn = useSignIn();

  const idHandler = (e) => {
    setId(e.target.value);
  };

  const pwdHandler = (e) => {
    setPwd(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("loginId", id);
    formData.append("password", pwd);

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        body: formData,
      });
      console.log(res.headers);
      if (res.ok !== false) {
        // auth user
        signIn({
          token: id,
          expiresIn: 3600,
          tokenType: "Bearer",
          authState: { id },
        });
        navigate("/");
      }
    } catch (e) {}
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
          <input
            className="text-input"
            onChange={idHandler}
            placeholder="아이디를 입력해 주세요."
          />
          <p className="small-title">비밀번호</p>
          <input
            className="text-input"
            onChange={pwdHandler}
            placeholder="비밀번호를 입력해 주세요."
          />
          <br />
          <br />
          <ColorButton text={"로그인"} size={17} w={370} t={"submit"} />

          <div className="one-line">
            <p className="gray-small-text"> 비밀번호 찾기 </p>
            <p className="gray-small-text">|</p>
            <p className="gray-small-text">회원가입</p>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;
