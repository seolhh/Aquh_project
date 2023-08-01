import React, { useState, setState } from "react";
import "./AuthPage.css";

function AuthPage() {
  return (
    <div className='authPage'>
      <h3 className='authPageText'>개인정보(수정 전) 입니다.</h3>
      <div className='userCharIdLvSym'>
        <div className='userIcon'>
          <img className='userChar' src='' alt='User캐릭터' />
          <div>
            <h4>"닉네임" 님</h4>
            <h6>"유저 레벨"</h6>
          </div>
        </div>
        <div className='userSymbol'>
          <h4>나의 심볼</h4>
          <div>[심볼 목록]</div>
        </div>
      </div>
      <div className='userInfo'>
        <div className='authPageUsername'>
          <h4>이름 : </h4>
          <p>"name"</p>
        </div>
        <div className='authPageEmail'>
          <h4>이메일 : </h4>
          {/* 소셜로그인 한 사람 = 연락용 이메일 /일반로그인 한 사람 = 기본 이메일*/}
          <p>"asdf@naver.com"</p>
          {/* <button onClick={}>이메일 변경</button> */}
        </div>

        <div className='authPagePassword'>
          {/* <button onClick={}>비밀번호 변경</button> */}
        </div>
        <div>{/* <button onClick={}>회원탈퇴</button> */}</div>
      </div>
      <button>수정하기</button>
    </div>
  );
}

export default AuthPage;
