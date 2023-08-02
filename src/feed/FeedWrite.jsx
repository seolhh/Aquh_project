import React from "react";

import "./FeedWrite.css";

function FeedWrite() {
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
            value='파일선택'
            disabled='disabled'
          />
          <label htmlFor='filename'></label>
          <input type='file' id='filename' className='upload-hidden' />
        </div>
        {/* <div className="filebox">
            <input className="upload-name" value="파일선택" disabled="disabled">

            <label for="ex_filename">업로드</label> 
            <input type="file" id="ex_filename" class="upload-hidden"> 
          </div> */}
        <input className='feedSubmit' type='submit' value={"글 작성하기"} />
      </div>
    </div>
  );
}

export default FeedWrite;
