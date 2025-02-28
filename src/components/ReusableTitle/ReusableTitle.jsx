import React from "react";

function ReusableTitle() {
  return (
    <div className="flex items-center gap-4 w-full ">
      <img className="max-w-[50px]" src="mainLogo.png" alt="mainLogo" />
      <h1 className="text-xl font-bold">Krav Maga In Georgia</h1>
    </div>
  );
}

export default ReusableTitle;
