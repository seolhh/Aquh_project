import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { loginNaver } from "../api/api.auth_service";

export default function RedirectURI(props) {
  const navigate = useNavigate();

  useEffect(() => {
    let code = new URL(window.location.href).searchParams.get("code");
    let state = new URL(window.location.href).searchParams.get("state");
    console.log(code, state);
    axios
      .post("http://i9b108.p.ssafy.io:8080/api/v1/member/auth/naver", {
        code: code,
        state: state,
      })
      .then((res) => {
        console.log(res);
        //성공 시 저장하는 로직 if status==='200' a메인페이지~
      });

    // if (code) {
    //   navigate("/main");
    // }
  });

  return <div>로그인중입니다...어쩌구</div>;
}
