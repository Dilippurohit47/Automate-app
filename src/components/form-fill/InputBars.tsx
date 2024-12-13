"use client";
import { BACKEND_URL } from "@/lib/url";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
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

  return (
    <div className="w-[8rem] overflow-hidden px-2  flex flex-col  bg-[#1a1818]  h-full border-r-2 border-t-2 border-gray-500">
      <div className="text-gray-500 text-1xl my-2 font-semibold">
        Saved Inputs
      </div>
      {saveInputs.length > 0 && (
        <>
          {Object.keys(saveInputs[0]).map((key) => (
            <div
              key={key}
              className="px-2 py-1 mt-3 bg-white rounded-md capitalize"
            >
              {key}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default InputBars;
