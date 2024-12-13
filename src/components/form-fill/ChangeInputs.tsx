import React, { useState } from "react";
import { Input } from "../ui/input";
import { BiSolidGrid } from "react-icons/bi";
import { IoIosAdd } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { Button } from "../ui/button";
import { fetchPost } from "@/lib/utils";
import { BACKEND_URL } from "@/lib/url";
import { toast } from "sonner";
const ChangeInputs = ({ setRunRefetch }) => {
  const [inputs, setInputs] = useState([1]);

  const addNewInput = () => {
    const newInput = {
      id: inputs.length + 1,
      key: "",
      value: "",
    };
    setInputs((prev) => [...prev, newInput]);
  };

  const saveInputValues = (id) => {
    const updateInputs = inputs.map((i) => {
      if (i.id === id) {
        i.value = document.getElementById(`value-${id}`)?.value;
        return i; // Spread to ensure a new object is returned
      }
      return i;
    });
    setInputs(updateInputs);
  };
  const saveInputKeys = (id) => {
    const updatedInputs = inputs.map((input) => {
      if (input.id === id) {
        input.key = document.getElementById(`key-${id}`)?.value;
        return input;
      }
      return input;
    });
    setInputs(updatedInputs);
  };

  const saveInputs = async () => {
    const res = await fetchPost(
      `${BACKEND_URL}/api/v1/profile/save-information/cm4mjllj10000up6gczi623ff`,
      {
        inputs,
      }
    );
    console.log(await res.json())
    if (res.ok) {
      toast.success("Input added successfully");
      setInputs([]);
      setRunRefetch(true);
    } else {
      toast.error("Internal server error");
    }
  };

  console.log(inputs);

  return (
    <div className="text-white w-full px-6 py-6 flex   ">
      <div className="w-full  ">
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
              onClick={addNewInput}
            >
              <IoIosAdd size={21} />
            </div>
          </div>
          <div className="flex flex-col gap-5  max-h-[25rem] overflow-y-auto ">
            {inputs.map((input, index) => (
              <div key={index} className="flex  gap-5">
                <Input
                  placeholder="Input name"
                  className="w-2/4 text-black capitalize"
                  id={`key-${input.id}`}
                  onChange={() => saveInputKeys(input.id)}
                />
                <Input
                  id={`value-${input.id}`}
                  placeholder="Input values"
                  className=" text-black w-2/4 "
                  onChange={() => saveInputValues(input.id)}
                />
              </div>
            ))}
          </div>

          {inputs.length > 0 && (
            <Button className="purple-button mt-3" onClick={saveInputs}>
              save
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChangeInputs;
