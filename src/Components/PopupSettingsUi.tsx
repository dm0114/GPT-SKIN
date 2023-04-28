import React from "react"
import uploadImageIntoStorage from "../utils/UploadImageIntoStorage"
import PopupButton from "./PopupButton"
import ProfileImage from "./ProfileImage"

const InputUi = ({title, value, callback}) => {
  
  return (
    <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor={title}
          >
            {title}
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id={title}
            value={value}
            onChange={(event) => callback(event.target.value)}
          />
        </div>
  )
}

const PopupSettingsUi = ({imageData, setImageData, name, setName, description, setDescription, storeNameAndDescription, toggle}) => {

  return (
    <div className="flex items-center h-full w-full justify-center max-w-xs flex-col">
      <div className="flex justify-center items-center w-32 h-32 rounded-full border border-gray-100 bg-white m-2 shadow-md">
        <label
          htmlFor="upload"
          className="flex flex-col items-center gap-2 cursor-pointer"
        >
          <ProfileImage imageData={imageData} />
        </label>
        <input
          id="upload"
          type="file"
          className="hidden"
          onChange={(event) => uploadImageIntoStorage(event, setImageData)}
        />
      </div>

      <div className="p-2">
        <InputUi title={"name"} value={name} callback={setName} />        
        <InputUi title={"description"} value={description} callback={setDescription} />
        <PopupButton
          text={"Complete!"}
          storeNameAndDescription={storeNameAndDescription}
          setIsSettings={toggle}
        />
      </div>
    </div>
  )
}

export default PopupSettingsUi