import React from "react";
import { NavLink } from "react-router-dom";

function ReusableTitle({ img_src, h1_text }) {
  return (
    <div className="flex items-center gap-4 w-full ">
      <NavLink to="/">
        <img
          className="max-w-[30px] lg:max-w-[50px]"
          src={img_src}
          alt="mainLogo"
        />
      </NavLink>
      <h1 className="font-bebas font-bold text-[15px] lg:text-xl ">
        {h1_text}
      </h1>
    </div>
  );
}

export default ReusableTitle;
