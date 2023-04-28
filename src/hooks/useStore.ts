import { useState, useEffect } from "react";

const useStore = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageData, setImageData] = useState("");

  const storeNameAndDescription = () => {
    chrome.storage.sync.set({
      name,
      description
    });
  };

	useEffect(() => {
		chrome.storage.sync.get(
			{
				name,
				description,
			},
			(res) => {
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

  return {name, description, imageData, setName, setDescription, setImageData, storeNameAndDescription}
}

export default useStore