import React from "react";

function ReusableTitle({ img_src, h1_text }) {
  return (
    <div className="  flex items-center gap-4 w-full ">
      <img
        className="max-w-[30px] lg:max-w-[50px]"
        src={img_src}
        alt="mainLogo"
      />
      <h1 className="font-bebas font-bold text-[15px] lg:text-xl ">
        {h1_text}
      </h1>
    </div>
  );
}

export default ReusableTitle;
