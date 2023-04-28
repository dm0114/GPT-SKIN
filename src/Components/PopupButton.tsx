import React from 'react'

const PopupButton = ({ text, ...callbacks }) => {
  return (
    <div className="text-center my-6">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={() => {
          Object.values(callbacks).forEach(callback => callback());
        }}
      >
        {text}
      </button>
    </div>
  );
};

export default PopupButton