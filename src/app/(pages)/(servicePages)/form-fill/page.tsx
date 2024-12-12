"use client";
import InputBars from "@/components/form-fill/InputBars";
import URLPreviewApp from "@/components/form-fill/PreviewBox";
import UrlSection from "@/components/form-fill/UrlSection";
import { Separator } from "@radix-ui/react-separator";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ChangeInputs from "@/components/form-fill/ChangeInputs";

const FormFill = () => {
  const [validUrl, setValidUrl] = useState("");
  const [switchTabs, setSwitchTabs] = useState("urlSectionTab");
  return (
    <div className="h-screen flex  bg-[#1a1818] w-full px-12 py-20">
      <InputBars />
      <div className="text-white flex   flex-row  w-full border-t-[1px]">
        <Tabs defaultValue={switchTabs} className="w-2/4 relative ">
          <TabsList className="px-0 py-0 mt-4 ml-4 ">
            <TabsTrigger
              className="px-2 "
              value="urlSectionTab"
              onClick={() => setSwitchTabs("urlSectionTab")}
            >
              <p
                className={`z-20 px-2 py-1  rounded-md  ${
                  switchTabs === "urlSectionTab"
                    ? "bg-blue-500 text-white"
                    : "text-black"
                }`}
              >
                Submit Url
              </p>
            </TabsTrigger>
            <TabsTrigger
              className="px-2  "
              value="changeInputsTab"
              onClick={() => setSwitchTabs("changeInputsTab")}
            >
              <p
                className={`z-20 px-2 py-1 rounded-md  ${
                  switchTabs === "changeInputsTab"
                    ? "bg-blue-500 text-white"
                    : "text-black"
                }`}
              >
                Change Inputs
              </p>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="urlSectionTab">
            <UrlSection setValidUrl={setValidUrl} changeTab={setSwitchTabs} />
          </TabsContent>
          <TabsContent value="changeInputsTab">
            <ChangeInputs />
          </TabsContent>
        </Tabs>

        <Separator
          orientation="horizontal"
          className="border-gray-400 border-[1px]"
        />
        <URLPreviewApp previewUrl={validUrl} />
      </div>
    </div>
  );
};

export default FormFill;
