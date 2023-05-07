import React from "react";
import PopupButton from "./PopupButton";
import ProfileImage from "./ProfileImage";

const PopupMainUi = ({imageData, name, description, toggle}) => {
  return (
    <div className="flex items-center h-screen w-full justify-center flex-col">
      <div className="photo-wrapper p-2">
        <ProfileImage imageData={imageData} width={'w-32'} height={'h-32'}/>
      </div>
      <div className="p-2">
        <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
          {name}
        </h3>
        <div className="text-center text-gray-400 text-xs font-semibold">
          <p>{description}</p>
        </div>

        <PopupButton text={"Settings"} setIsSettings={toggle} />
      </div>
    </div>
  );
};

export default PopupMainUi;
