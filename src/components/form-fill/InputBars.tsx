"use client";

import { BACKEND_URL } from "@/lib/url";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
const fetchUserInfo = async () => {
  const response = await fetch(
    `${BACKEND_URL}/api/v1/profile/get-information/cm4mjllj10000up6gczi623ff`
  );
  const data = await response.json();
  return data;
};

const InputBars = ({ runRefecth, setRunRefetch }) => {
  const { data, refetch } = useQuery(["userInfo"], fetchUserInfo);

  const [saveInputs, setSaveInputs] = useState([]);

  useEffect(() => {
    if (data) {
      setSaveInputs(data?.data?.information);
    }
  }, [data]);

  useEffect(() => {
    if (runRefecth) {
      refetch();
      setRunRefetch(false);
    }
  }, [runRefecth]);

  const [showInputValue, setShowInputValue] = useState();

  const openAccordion = (id) => {
    if (showInputValue == id) {
      setShowInputValue(null);
    } else {
      setShowInputValue(id);
    }
  };

  return (
    <div className="w-[10rem] overflow-hidden px-2   rounded-md flex flex-col max-h-[37rem]  bg-[#1a1818]  h-full  border-2 rounded-tr-none border-gray-500 py-2">
      <div className="text-slate-500 text-1xl font-semibold ">Saved Data</div>
      <div className="overflow-y-auto  hide-scrollbar">
        {saveInputs.length > 0 && (
          <>
            {Object.keys(saveInputs[0]).map((key, index) => (
              <div
                key={index}
                className="px-2 py-1 mt-3  bg-white rounded-md  shadow-2xl  capitalize transition  cursor-pointer ease-in-out duration-200"
                onClick={() => openAccordion(index)}
              >
                <div className="flex justify-between items-center">
                  <p className="text-[0.9rem] whitespace-nowrap truncate ">
                    {key}
                  </p>

                  <div className="text-slate-500">
                    <IoMdArrowDropdown size={22} />
                  </div>
                </div>
                <div
                  className={`grid overflow-hidden transition-all ease-in-out duration-300 text-slate-600 ${
                    showInputValue === index
                      ? "grid-rows-[1fr] opacity-100 "
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className=" text-[0.9rem] overflow-hidden">
                    {saveInputs[0][key]}
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default InputBars;
