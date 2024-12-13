import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { BACKEND_URL } from "@/lib/url";
import { useQuery } from "@tanstack/react-query";
import { FiMinus } from "react-icons/fi";
import { Button } from "../ui/button";
import { BiSolidGrid } from "react-icons/bi";

const fetchUserInfo = async () => {
  const response = await fetch(
    `${BACKEND_URL}/api/v1/profile/get-information/cm4mjllj10000up6gczi623ff`,
    {
      method: "get",
    }
  );
  const data = await response.json();
  return data;
};

const UpdateInputs = () => {
  const [inputs, setInputs] = useState([]);

  const { data } = useQuery(["user-info-for-updates"], fetchUserInfo);

  useEffect(() => {
    if (data) {
      setInputs(data?.data.information);
    }
  }, [data]);
  console.log(inputs);

  return (
    <div className="flex flex-col gap-5 mt-4     ">
      <div className="flex    group w-full gap-2 justify-start items-center">
        <div className="flex   items-center gap-2   text-slate-200  font-semibold capitalize">
          <BiSolidGrid size={21} className=" text-slate-400 " />
          update data
        </div>
      </div>
      <div className=" flex flex-col gap-4 max-h-[15rem] hide-scrollbar overflow-y-auto">
        {inputs.length > 0 ? (
          <>
            {Object.keys(inputs[0])?.map((key, index) => (
              <div className="flex  items-center gap-5">
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
              </div>
            ))}
          </>
        ) : (
          "not "
        )}
      </div>
      {inputs.length > 0 && (
        <Button className="purple-button mt-3 text-[1.1rem]">update</Button>
      )}
    </div>
  );
};

export default UpdateInputs;
