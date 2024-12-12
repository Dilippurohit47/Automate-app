"use client";
import InputBars from "@/components/form-fill/InputBars";
import URLPreviewApp from "@/components/form-fill/PreviewBox";
import UrlSection from "@/components/form-fill/UrlSection";
import { Separator } from "@radix-ui/react-separator";
import React, { useState } from "react";

const FormFill = () => {
  const [validUrl, setValidUrl] = useState("");
  return (
    <div className="h-screen flex  bg-[#1a1818] w-full px-12 py-20">
      <InputBars />
      <div className="text-white flex  flex-row  w-full border-t-[1px]">
        <UrlSection setValidUrl={setValidUrl} />
        <Separator
          orientation="horizontal"
          className="border-gray-400 border-[1px]"
        />
        <URLPreviewApp previewUrl={validUrl}  />
      </div>
    </div>
  );
};

export default FormFill;
