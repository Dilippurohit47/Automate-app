import React, { useState } from "react";
import { Input } from "../ui/input";
import { BiSolidGrid } from "react-icons/bi";
import { IoIosAdd } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { Button } from "../ui/button";
import { fetchPost } from "@/lib/utils";
import { BACKEND_URL } from "@/lib/url";
import { toast } from "sonner";
import { FiMinus } from "react-icons/fi";

import { v4 as uuidV4 } from "uuid";
import UpdateInputs from "./UpdateInputs";

const ChangeInputs = ({
  setRunRefetch,
}: {
  setRunRefetch: (state: boolean) => void;
}) => {
  const [inputs, setInputs] = useState([
    {
      id: uuidV4(),
      key: "",
      value: "",
    },
  ]);

  const addNewInput = () => {
    if (inputs.length > 5) {
      return toast.error("Save this inputs to add more");
    }
    const newInput = {
      id: uuidV4(),
      key: "",
      value: "",
    };
    setInputs((prev) => [...prev, newInput]);
  };

  const saveInputValues = (id: string) => {
    const updateInputs = inputs.map((i) => {
      if (i.id === id) {
        i.value = document.getElementById(`value-${id}`)?.value;
        return i; // Spread to ensure a new object is returned
      }
      return i;
    });
    setInputs(updateInputs);
  };
  const saveInputKeys = (id: string) => {
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
    const hasEmptyInputs = inputs.some(
      (input) => input.key === "" || input.value === ""
    );

    if (hasEmptyInputs) {
      return toast.error("Fill all the inputs or delete empty one's");
    } else {
      const res = await fetchPost(
        `${BACKEND_URL}/api/v1/profile/save-information/cm4mjllj10000up6gczi623ff`,
        {
          inputs,
        }
      );

      if (res.ok) {
        toast.success("Input added successfully");
        setInputs([]);
        setRunRefetch(true);
      } else {
        toast.error("Internal server error");
      }
    }
  };

  const deleteInput = (idToDelete: string) => {
    const updatedInputs = inputs.filter((input) => {
      return input.id !== idToDelete;
    });

    setInputs(updatedInputs);
  };

  return (
    <div className="text-white w-full px-6 py-6 flex gap-10   flex-col   ">
      <div className="w-full  ">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            {" "}
            <div className="flex    group w-full gap-2 justify-start items-center">
              <div className="flex   items-center gap-2 text-slate-200  font-semibold w-[39%]">
                <BiSolidGrid size={21} className="text-slate-400" />
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
              className="flex  rounded-full  cursor-pointer justify-center items-center bg-purple-500"
              onClick={addNewInput}
            >
              <IoIosAdd size={21} />
            </div>
          </div>
          <div className="flex flex-col gap-5 mt-4  max-h-[25rem] overflow-y-auto ">
            {inputs.map((input) => (
              <div key={input.id} className="flex  items-center gap-5">
                <Input
                  placeholder="Input name"
                  className=" w-[45%] text-black capitalize"
                  id={`key-${input.id}`}
                  onChange={() => saveInputKeys(input.id)}
                />

                <Input
                  id={`value-${input.id}`}
                  placeholder="Input values"
                  className=" text-black w-[45%] "
                  onChange={() => saveInputValues(input.id)}
                />
                <div
                  className="flex  rounded-full h-[1.35rem] w-[1.35rem] p-1 cursor-pointer justify-center items-center bg-red-400 hover:bg-red-500"
                  onClick={() => deleteInput(input.id)}
                >
                  <FiMinus size={21} />
                </div>
              </div>
            ))}
          </div>

          {inputs.length > 0 && (
            <Button
              className="purple-button mt-3 text-[1.1rem]"
              onClick={saveInputs}
            >
              save
            </Button>
          )}
        </div>
      </div>

      <UpdateInputs />
    </div>
  );
};

export default ChangeInputs;
