import { queryClient } from "@/lib/ReactQuery";
import { BACKEND_URL } from "@/lib/url";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { BiSolidGrid } from "react-icons/bi";
import { FaTrash } from "react-icons/fa6";
import { toast } from "sonner";
import { Input } from "../ui/input";
const fetchUserInfo = async () => {
  const response = await fetch(
    `${BACKEND_URL}/api/v1/profile/get-information/cm4pa0vw70000uph4fzxo718d`,
    {
      method: "get",
    }
  );
  const data = await response.json();
  return data;
};

const deleteData = async ({ key, value }: { key: string; value: string }) => {
  const response = await fetch(
    `${BACKEND_URL}/api/v1/profile/delete-information/cm4pa0vw70000uph4fzxo718d`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        keyToDelete: key,
        valueToDelete: value,
      }),
    }
  );
  console.log(await response.json());
  return response;
};

type SingleObject = {
  [key: string]: string;
};

type InputTypes = [SingleObject];
const UpdateInputs = () => {
  const [inputs, setInputs] = useState<InputTypes>();

  const { data } = useQuery(["user-info-for-updates"], fetchUserInfo);

  useEffect(() => {
    if (data) {
      setInputs(data?.data.information);
    }
  }, [data]);
  const mutation = useMutation(deleteData, {
    onSuccess: (res) => {
      if (res.ok) {
        queryClient.invalidateQueries(["user-info-for-updates"]);
        queryClient.invalidateQueries(["user-info"]);
        toast.success("Input deleted", {
          duration: 500,
        });
      } else {
        toast.error("error deleting data try again later");
      }
    },
    onError: (error) => {
      console.error("Error deleting data:", error);
    },
  });

  const handleDelete = (key: string, value: string) => {
    mutation.mutate({ key, value });
  };
  return (
    <div className="flex flex-col gap-5 mt-4     ">
      <div className="flex    group w-full gap-2 justify-start items-center">
        <div className="flex items-center justify-between w-full ">
          {" "}
          <div className="flex   items-center gap-2   text-[#ffffffc9] font-semibold capitalize">
            <BiSolidGrid size={21} className=" text-slate-400 " />
            Delete data
          </div>
          <div className="text-[#ffffff99]">
            <FaTrash size={15} />
          </div>
        </div>
      </div>
      <div className=" flex flex-col gap-4 max-h-[18rem] hide-scrollbar overflow-y-auto">
        {inputs && inputs.length > 0 ? (
          <>
            {Object.keys(inputs[0])?.map((key) => (
              <div key={key} className="flex  items-center gap-5">
                <Input
                  placeholder="Input name"
                  className=" w-[45%] text-black capitalize"
                  value={key}
                />

                <Input
                  placeholder="Input values"
                  className=" text-black w-[45%] "
                  value={inputs[0][key]}
                />
                <div
                  className="text-slate-500 cursor-pointer hover:text-[#ffffffcf]"
                  onClick={() => handleDelete(key, inputs[0][key])}
                >
                  <FaTrash size={15} />
                </div>
              </div>
            ))}
          </>
        ) : (
          "not "
        )}
      </div>
    </div>
  );
};

export default UpdateInputs;
