import React from "react";
import axios from "axios";
import Dropzone from "react-dropzone";
import styled from "styled-components";
import "antd/dist/antd.css";
import { PlusOutlined } from "@ant-design/icons";

//**사진 미리보기 기능도 추가해야함. */
//** flask에 전송  */

//css
const Div1 = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: lightgray;
`;

const Div2 = styled.div`
  width: 300px;
  height: 240px;
  border: 1px solid black;
  display: flex;
  align-self: center;
  justify-content: center;
`;

function FileUpload() {
  //dropHandler함수 만듦
  const dropHandler = (files) => {
    //  //file을 백엔드에 전해줌 (1)
    //  //프론트에서  파일 보낼때 파일+header가 필요함.
    //  //이것을 위해 header를 만들어주고 axios를 사용해 post방식으로 보낸다.

    //   //객체 생성
    let formData = new FormData();

    const config = {
      header: { "content-type": "multipart/form-data" }
    };
    //   //key/value쌍 추가
    formData.append("file", files[0]);
    //     //백엔드가 file저장하고 그 결과가 response에 담김 (2)
    //     //백엔드는 그 결과를 프론트로 보내줌 (3)
    axios.post("url", form, config).then((response) => {
      if (response.data.success) {
        console.log("전송성공");
      } else {
        console.log("전송 실패");
      }
    });
  };

  return (
    <Div1>
      <Dropzone onDrop={dropHandler}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <Div2 {...getRootProps()}>
              <input {...getInputProps()} />
              <PlusOutlined />
            </Div2>
          </section>
        )}
      </Dropzone>
    </Div1>
  );
}
export default FileUpload;
