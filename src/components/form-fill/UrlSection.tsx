import React, { SetStateAction, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { BACKEND_URL } from "@/lib/url";
import { fetchPost } from "@/lib/utils";
import RecentlyUsedUrl from "./RecentlyUsedUrl";

interface URlSectionTypes {
  setValidUrl: React.Dispatch<SetStateAction<string>>;
  setHtmlContent: React.Dispatch<SetStateAction<string>>;
}

const UrlSection = ({ setValidUrl, setHtmlContent }: URlSectionTypes) => {
  const [check, setCheck] = useState<boolean>(false);

  const [url, setUrl] = useState<string>("");

  const submitUrlToBackend = async () => {
    setValidUrl(url);
    setHtmlContent("");
    const res = await fetchPost(
      `${BACKEND_URL}/api/v1/form/fill-form/cm4pa0vw70000uph4fzxo718d`,
      {
        url: url,
      }
    );
    const data = await res.json();
    if (res.ok) {
      setHtmlContent(data.content);
      setUrl("");
    }
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

        <div className="flex gap-2 items-center ">
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
          <div className="text-[#9CA3AF]">(not recommended)</div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Input
          placeholder="Form url"
          type="url "
          value={url}
          className="text-black"
          onChange={(e) => setUrl(e.target.value)}
        />
        <Button
          className="bg-blue-600 hover:bg-blue-700"
          onClick={submitUrlToBackend}
        >
          Submit
        </Button>
      </div>
      <RecentlyUsedUrl />
    </div>
  );
};

export default UrlSection;
