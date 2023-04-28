import React from "react";

const ProfileImage = ({ imageData }) => {
  return (
    <img
      src={imageData}
      alt="Saved Image"
      className="w-32 h-32 rounded-full object-cover"
    />
  );
};

export default ProfileImage