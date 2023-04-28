const encodeImageFileToBase64 = (imageFile, callback) => {
  const reader = new FileReader();
  reader.onloadend = () => {
    callback(reader.result);
  };
  reader.readAsDataURL(imageFile);
}

// 이미지 파일의 Base64 문자열을 Chrome Storage에 저장
const uploadImageIntoStorage = (event, callback) => {
  
  const selectedFile = event.target.files[0];
  encodeImageFileToBase64(selectedFile, (base64ImageString) => {  
    chrome.storage.local.set({ "imageData": base64ImageString }, () => {      
      callback(base64ImageString)
    });
  });
}

export default uploadImageIntoStorage