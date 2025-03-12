import React from "react";

function GalleryContent({ imgOne, imgTwo, imgThree, imgFour }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
      <img
        src={imgOne}
        alt="imgOne"
        className="object-center w-full h-[300px] object-cover brightness-110 contrast-125 saturate-150 hover:scale-105 transition-transform duration-300 rounded-lg shadow-lg "
      />
      <img
        src={imgTwo}
        alt="imgTwo"
        className="object-center w-full h-[300px] object-cover  brightness-110 contrast-125 saturate-150 hover:scale-105 transition-transform duration-300 rounded-lg shadow-lg"
      />
      <img
        src={imgThree}
        alt="imgThree"
        className="object-center w-full h-[300px] object-cover brightness-110 contrast-125 saturate-150 hover:scale-105 transition-transform duration-300 rounded-lg shadow-lg "
      />
      <img
        src={imgFour}
        alt="imgFour"
        className="object-center w-full h-[300px] object-cover  brightness-110 contrast-125 saturate-150 hover:scale-105 transition-transform duration-300 rounded-lg shadow-lg"
      />
    </div>
  );
}

export default GalleryContent;
