import React, { useState, useEffect } from "react";
import uploadImageIntoStorage from "../utils/UploadImageIntoStorage";
import "./popup.css";

// 이미지, 텍스트, 이름 비었을떄 set시 예외처리
// 이미지 업로드 했을 때 파일 저장하는 방법 알아오기
// 이미지 형식 예외처리
// 이미지 업로드 시 이미지 미리보기
// 이미지, 텍스트, 이름 비었을때 get시 예외처리
const Popup = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageData, setImageData] = useState("");

  const [isSettings, setIsSettings] = useState(false);


  const setStore = () => {
    chrome.storage.sync.set({
      name,
      description
    });
		console.log("before", name, description);
  };

	useEffect(() => {
		chrome.storage.sync.get(
			{
				name,
				description,
			},
			(res) => {
				console.log(res);
				setName(res.name ? res.name : "oddm");
				setDescription(res.description ? res.description : "Frontend Dev");
				
			}
		);
		chrome.storage.local.get({imageData}, (res) => {
			setImageData(
				res.imageData
					? res.imageData
					: "https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp"
			);
		});
	}, [])

	useEffect(() => {
		console.log("after",name,description);
		chrome.storage.sync.get(null, (res) => {console.log(res)})
	}, [name, description])

  return isSettings ? (
    <div className="flex items-center h-full w-full justify-center max-w-xs flex-col">
      <div className="flex justify-center items-center w-32 h-32 rounded-full border border-gray-100 bg-white m-2 shadow-md">
        <label
          htmlFor="upload"
          className="flex flex-col items-center gap-2 cursor-pointer"
        >
          {imageData ? (
            // 추후 처리 필요
            <img src={imageData} alt="Saved Image" className="w-32 h-32 rounded-full object-cover"/>
          ) : (
						<>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-10 w-10 fill-white stroke-indigo-500"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
								/>
							</svg>
							<span className="text-gray-600 font-medium">Upload file</span>
						</>
          )}
        </label>
        <input
          id="upload"
          type="file"
          className="hidden"
          onChange={(event) => uploadImageIntoStorage(event, setImageData)}
        />
      </div>

      <div className="p-2">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            type="text"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>

        <div className="text-center my-6">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={() => {
							setStore();
							setIsSettings(!isSettings)
						}}
          >
            Complete!
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex items-center h-screen w-full justify-center">
      <div className="max-w-xs">
        <div className="photo-wrapper p-2">
          <img
            className="w-32 h-32 rounded-full mx-auto object-cover"
            src={imageData}
            alt="Saved Image"
          />
        </div>
        <div className="p-2">
          <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
            {name}
          </h3>
          <div className="text-center text-gray-400 text-xs font-semibold">
            <p>{description}</p>
          </div>

          <div className="text-center my-6">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              onClick={() => {
                setIsSettings(!isSettings);
              }}
            >
              settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
