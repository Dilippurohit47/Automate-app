import React from "react";

const InputBars = () => {
  return (
    <div className="w-[8rem] overflow-hidden px-2  flex flex-col  bg-[#1a1818]  h-full border-r-2 border-t-2 border-gray-500">
        <div className="text-gray-500 text-1xl my-2 font-semibold">Saved Inputs</div>
      <div className="px-2 py-1 mt-3  bg-white rounded-md ">Name</div>
      <div className="px-2 py-1 mt-3  bg-white rounded-md ">Email</div>
      <div className="px-2 py-1 mt-3  bg-white rounded-md ">Linkdin Url </div>
      <div className="px-2 py-1 mt-3 whitespace-nowrap overflow-hidden truncate bg-white rounded-md ">Github Profile profile profile</div>
    </div>
  );
};

export default InputBars;
