"use client";
import ChangeInputs from "@/components/form-fill/ChangeInputs";
import InputBars from "@/components/form-fill/InputBars";
import URLPreviewApp from "@/components/form-fill/PreviewBox";
import UrlSection from "@/components/form-fill/UrlSection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@radix-ui/react-separator";
import { useState } from "react";

enum TabsTypes {
  UrlSectionTab = "urlSectionTab",
  ChangeInputsTab = "changeInputsTab",
}

const FormFill = () => {
  const [validUrl, setValidUrl] = useState<string>("");
  const [switchTabs, setSwitchTabs] = useState<TabsTypes>(
    TabsTypes.UrlSectionTab
  );
  const [htmlContent, setHtmlContent] = useState<string>("");

  return (
    <div className=" lg:flex  bg-[#191919] w-full lg:px-12 md:pt-20 pt-10 overflow-hidden min-h-screen ">
      {/* <InputBars /> */}
      <div className="text-white flex flex-col   md:flex-row  w-full md:border-t-[1px] lg:border-l-[1px] border-2">
        <Tabs defaultValue={switchTabs} className="lg:w-2/4 relative ">
          <TabsList className="px-0 py-0 mt-4 ml-4 ">
            <TabsTrigger
              className="px-2 "
              value="urlSectionTab"
              onClick={() => setSwitchTabs(TabsTypes.UrlSectionTab)}
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
              onClick={() => setSwitchTabs(TabsTypes.ChangeInputsTab)}
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
            <UrlSection
              setValidUrl={setValidUrl}
              setHtmlContent={setHtmlContent}
            />
          </TabsContent>
          <TabsContent value="changeInputsTab">
            <ChangeInputs />
          </TabsContent>
        </Tabs>

        <Separator
          orientation="horizontal"
          className="border-gray-400 border-[1px]"
        />
        <URLPreviewApp
          previewUrl={validUrl}
          setValidUrl={setValidUrl}
          htmlContent={htmlContent}
        />
      </div>
    </div>
  );
};

export default FormFill;
