import React, { useEffect, useState } from "react";
import ProfileImage from "../Components/ProfileImage";

export const ContentScript = () => {
  const [imageData, setImageData] = useState(null)
  const [name, setName] = useState(null)
  
  useEffect(() => {
    chrome.storage.local.get(["imageData"], (res) => setImageData(res.imageData))
    chrome.storage.sync.get(["name"], (res) => setName(res.name))
  }, [])

  return imageData && (
    <div className="flex w-16 h-16">
      <ProfileImage imageData={imageData} width={'w-16'} height={'h-16'} />
      {name && <p className="absolute left-12 md:left-14 name" style={{width: "max-content"}}>{name}</p>}
    </div>
  );
};