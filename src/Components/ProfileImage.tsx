import React from "react";

const ProfileImage = ({ imageData, width, height }) => {
  const imageClassName = `${width} ${height} rounded-full object-cover`;

  return (
    <img
      src={imageData}
      alt="Saved Image"
      className={imageClassName}
    />
  );
};

export default ProfileImage;