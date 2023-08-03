import React, { useState } from "react";
import "./FeedWrite.css";

function FeedWrite() {
  // 기본 값 세팅
  const [feedTitle, setFeedTitle] = useState("");
  const [feedContent, setFeedContent] = useState("");
  const [fileName, setFileName] = useState("");

  // input값 변화-> 글 작성
  const onChangeFeedTitle = (e) => {
    const currentFeedTitle = e.target.value;
    console.log(e.target.value);
    setFeedTitle(currentFeedTitle);
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFileName(selectedFile.name);
    } else {
      setFileName("");
    }
  };

  const feedWrite = (e) => {
    console.log(e);
    alert("모든칸을 채워주세요");
    //모든 칸이 다 채워졌는지 확인 (사진은 선택)
    //만약 모든칸이 채워져있으면 -> axios 요청 글 작성하기
    // 한칸이라도 비워져 있으면 alert
  };

  return (
    <div className='feedWriteCard'>
      <h3>여러분의 이야기를 들려주세요!</h3>
      <div className='feedTitle'>
        {/* <label htmlFor='feedTitle'> 글 제목 : </label> */}
        <input
          className='feedTitleInput'
          type='text'
          id='feedTitle'
          placeholder='제목을 입력하세요'
          value={feedTitle} // Use 'value' instead of 'defaultValue'
          onChange={onChangeFeedTitle} // Use the function directly
        />
      </div>
      <div className='feedContent'>
        <textarea
          className='feedContentInput'
          name='feedContent'
          id='feedContent'
          cols='70'
          rows='10'
          placeholder='내용을 입력하세요'></textarea>
        <div className='fileBox'>
          <input
            type='text'
            className='upload-name'
            value='첨부파일'
            placeholder='첨부파일'
          />
          <label htmlFor='file'>파일찾기</label>
          <input
            type='file'
            id='file'
            onChange={handleFileChange}
            accept='image/*'
          />
        </div>
        <button onClick={feedWrite}>글 작성하기</button>
      </div>
    </div>
  );
}

export default FeedWrite;
