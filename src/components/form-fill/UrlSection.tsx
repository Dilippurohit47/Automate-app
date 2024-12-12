import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { toast } from "sonner";

const UrlSection = ({ setValidUrl }) => {
  const [url, setUrl] = useState("");

  const handleSubmit = () => {
    // const urlPattern = /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,})([\/\w.-]*)*\/?$/;

    // if (!urlPattern.test(url)) {
    //   return toast.error("Please enter a valid URL");
    // }

    const validUrl =
      url.startsWith("http://") || url.startsWith("https://")
        ? url
        : `https://${url}`;

    setValidUrl(validUrl);
  };

  return (
    <div className="w-2/4 h-full px-6 py-12 flex flex-col gap-12">
      <div className=" max-w-[20rem]">
        <p className="  text-gray-400  text-[1.2rem]">
          If your form had multiple input which are not saved inputs/values in
          your sidebar (saved inputs ) then click on{" "}
          <span className="text-white"> change inputs </span>button and add all
          the inputs which your form have
        </p>
        <Button className="purple-button mt-4 ">Change Inputs</Button>
      </div>

      <div className="flex flex-col gap-4">
        <Input
          placeholder="Form url"
          type="url "
          className="text-black"
          onChange={(e) => setUrl(e.target.value)}
        />
        <Button
          className="bg-blue-600 hover:bg-blue-700"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default UrlSection;
