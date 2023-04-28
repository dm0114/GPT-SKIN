import React, { useState } from "react";
import PopupMainUi from "../Components/PopupMainUi";
import PopupSettingsUi from "../Components/PopupSettingsUi";
import useStore from "../hooks/useStore";
import "./popup.css";

// 이미지, 텍스트, 이름 비었을떄 set시 예외처리
// 이미지 업로드 했을 때 파일 저장하는 방법 알아오기
// 이미지 형식 예외처리
// 이미지 업로드 시 이미지 미리보기
// 이미지, 텍스트, 이름 비었을때 get시 예외처리
const Popup = () => {
	
	const {name, description, imageData, setName, setDescription, setImageData, storeNameAndDescription} = useStore()
	const [isSettings, setIsSettings] = useState(false);
	const toggle = () => { setIsSettings(!isSettings) }
	

  return isSettings ? (
    <PopupSettingsUi imageData={imageData} setImageData={setImageData} name={name} setName={setName} description={description} setDescription={setDescription} storeNameAndDescription={storeNameAndDescription} toggle={toggle}/>
  ) : (
		<PopupMainUi imageData={imageData} name={name} description={description} toggle={toggle}/>
  )
};

export default Popup;
