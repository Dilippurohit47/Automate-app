import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
const UrlSection = ({ setValidUrl }) => {
  const [url, setUrl] = useState("");

  // const handleSubmit = () => {
  //   const validUrl =
  //     url.startsWith("http://") || url.startsWith("https://")
  //       ? url
  //       : `https://${url}`;

  //   setValidUrl(validUrl);
  // };

  const [check, setCheck] = useState(false);

  const submitUrl = () => {
    if (url) {
      setValidUrl(url);
    }

    setUrl("");
  };

  return (
    <div className="w-full h-full px-6 py-6 flex flex-col gap-12  ">
      <div className=" flex flex-col gap-4 max-w-[20rem]">
        <p className="  text-gray-400  text-[1rem]">
          If your form had multiple input which are not saved inputs/values in
          your sidebar (saved inputs ) then click on{" "}
          <span className="text-white underline"> change inputs </span>tab and
          add all the inputs which your form have
        </p>

        <TooltipProvider delayDuration={200}>
          <Tooltip>
            <TooltipTrigger asChild>
              <div
                className="  h-6 w-14 py-1 px-1 bg-white rounded-full cursor-pointer flex items-center "
                onClick={() => setCheck(!check)}
              >
                <div
                  className={`bg-gray-400 transition ease-in-out duration-300 h-4 w-4 rounded-full ${
                    check ? "bg-green-500 translate-x-[200%]" : ""
                  }`}
                ></div>
              </div>
            </TooltipTrigger>
            <TooltipContent className="bg-[#1a1818] translate-x-[20%] w-2/4 border-[1px]">
              <p className="text-white text-[0.9rem] ">
                Submit the form automatically if you dont want to check after
                submitting the url
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <div className="flex flex-col gap-4">
        <Input
          placeholder="Form url"
          type="url "
          value={url}
          className="text-black"
          onChange={(e) => setUrl(e.target.value)}
        />
        <Button className="bg-blue-600 hover:bg-blue-700" onClick={submitUrl}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default UrlSection;
