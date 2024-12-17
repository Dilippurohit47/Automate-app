import { FORM_URL } from "@/lib/url";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { IoLinkSharp } from "react-icons/io5";
import { MdOutlineContentCopy } from "react-icons/md";
import { toast } from "sonner";
const fetchRecentUrl = async () => {
  const res = await fetch(`${FORM_URL}/get-urls/cm4pa0vw70000uph4fzxo718d`, {
    method: "GET",
  });

  return await res.json();
};

interface UrlTypes {
  id: string;
  userId: string;
  url: string;
}

const RecentlyUsedUrl = () => {
  const { data } = useQuery(["get-recent-urls"], fetchRecentUrl);

  const [recetUrls, setRecentUrls] = useState<UrlTypes[]>();

  useEffect(() => {
    if (data) {
      setRecentUrls(data.links);
    }
  }, [data]);

  const saveToClipBoard = (urlToCopy: string) => {
    navigator.clipboard.writeText(urlToCopy).then(() =>
      toast.success("url copied ", {
        duration: 500,
        style: {
          background: "#27272A",
          color: "white",
        },
      })
    );
  };

  return (
    <>
      {recetUrls && recetUrls?.length > 0 && (
        <div className="">
          <h3 className="  text-[1.15rem] flex gap-2 justify-start items-center bg-[#27272A] px-3 text-[#99999a] py-1 max-w-[15rem] rounded-md  font-semibold">
            Recently used urls
            <IoLinkSharp className="translate-y-[2px]" />
          </h3>
          <div className="flex flex-col gap-1 mt-4">
            {recetUrls.map((item) => (
              <div className="flex gap-4   max-sm:gap-[4px]    items-center max-md:text-[0.85rem]   ">
                <h3 className="text-[#c1c1c1]   " key={item.id}>
                  {item.url}
                </h3>
                <MdOutlineContentCopy
                  size={13}
                  className="cursor-pointer "
                  onClick={() => saveToClipBoard(item.url)}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default RecentlyUsedUrl;
