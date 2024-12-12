import React, { useState } from "react";
import { Input } from "../ui/input";
import { BiSolidGrid } from "react-icons/bi";
import { IoIosAdd } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { Button } from "../ui/button";
const ChangeInputs = () => {
  const [inputs, setInputs] = useState(0);

  return (
    <div className="text-white w-full px-6 py-4">
      <div className="w-full h-screen py-">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            {" "}
            <div className="flex    group w-full gap-2 justify-start items-center">
              <div className="flex   items-center gap-2 w-[39%]">
                <BiSolidGrid size={21} className="text-gray-400" />
                Add new input
              </div>
              <div
                className="text-center pointer-events-none 
              group-hover:translate-x-[90%] 
              flex items-center justify-start w-full transition-transform duration-500
              translate-y-[1.5px]
              "
              >
                <FaArrowRightLong size={18} />
              </div>
            </div>
            <div
              className="flex  rounded-full cursor-pointer justify-center items-center bg-purple-500"
              onClick={() => setInputs((prev) => prev + 1)}
            >
              <IoIosAdd size={21} />
            </div>
          </div>
          <div className="flex flex-col gap-5  max-h-[25rem] overflow-y-auto ">
            {Array.from({ length: inputs }, (_, index) => (
              <div className="flex  gap-5">
                <Input placeholder="Input name" className="w-2/4 text-black" />
                <Input
                  placeholder="Input values"
                  className=" text-black w-2/4 capitalize"
                />
              </div>
            ))}
          </div>{" "}
          {inputs > 0 && <Button className="purple-button mt-3">save</Button>}
        </div>
      </div>
    </div>
  );
};

export default ChangeInputs;
