import { BACKEND_URL } from "@/lib/url";
import { fetchPost } from "@/lib/utils";
import { useEffect, useState } from "react";
import { BiSolidGrid } from "react-icons/bi";
import { FaArrowRightLong } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import { IoIosAdd } from "react-icons/io";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

import { queryClient } from "@/lib/ReactQuery";
import { useMutation } from "@tanstack/react-query";
import { v4 as uuidV4 } from "uuid";
import UpdateInputs from "./UpdateInputs";
interface Input {
  id: string;
  value: string;
  key: string;
}
const addInput = async (inputs: Input[]) => {
  const res = await fetchPost(
    `${BACKEND_URL}/api/v1/profile/save-information/cm4pa0vw70000uph4fzxo718d`,
    {
      inputs,
    }
  );
  return res;
};

const ChangeInputs = ({}: {}) => {
  const [inputs, setInputs] = useState< Input[]>([]);
  const addNewInput = () => {
    if (inputs.length > 4) {
      return toast.error("Save this inputs to add more");
    }
    const newInput = {
      id: uuidV4(),
      key: "",
      value: "",
    };
    setInputs((prev) => [...prev, newInput]);
  };

  useEffect(() => {
    if (inputs.length <= 0) {
      console.log("creting inputs", inputs.length);
      addNewInput();
    }
  }, []);
  const saveInputKeys = (id: string, key: string) => {
    const updatedInputs = inputs.map((input) =>
      input.id === id ? { ...input, key } : input
    );
    setInputs(updatedInputs);
  };

  const saveInputValues = (id: string, value:string) => {
    setInputs((prev) =>
      prev.map((item) => (item.id === id ? { ...item, value } : item))
    );
  };

  const AddDataMutation = useMutation(addInput, {
    onSuccess: async (res) => {
      if (res.ok) {
        toast.success("Data Saved!");
        setInputs([]);
        queryClient.invalidateQueries(["user-info-for-updates"]);
        queryClient.invalidateQueries(["user-info"]);
      } else {
        toast.error("Error saving data try again later");
      }
    },
    onError: (error) => {
      toast.error("Internal server error");
    },
  });

  const addDataToServer = () => {
    const hasEmptyInputs = inputs.some(
      (input) => input.key === "" || input.value === ""
    );
    if (hasEmptyInputs) {
      return toast.error("Fill all the inputs or delete empty one's");
    }
    AddDataMutation.mutate(inputs);
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
              onClick={() => addNewInput()}
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
                  onChange={(e) => saveInputKeys(input.id, e.target.value)}
                  value={input.key}
                />

                <Input
                  id={`value-${input.id}`}
                  placeholder="Input values"
                  className=" text-black w-[45%] "
                  onChange={(e) => saveInputValues(input.id, e.target.value)}
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
              onClick={addDataToServer}
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
