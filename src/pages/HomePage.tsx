import { Button } from "@/components/ui/button";
import { FaArrowRightLong } from "react-icons/fa6";
import React from "react";
import Link from "next/link";
const HomePage = () => {
  return (
    <div className="flex pt-[12rem]     text-white  h-screen items-center gap-10 flex-col">
      <button className="text-white animated-button font-semibold">
        <div className="in">
          Introducing <span className="text-amber-400 mx-2">Automator</span>
        </div>
      </button>

      <div className="space-y-2">
        <h1 className="text-5xl font-bold text-white">
          Automate Your Multple Task
        </h1>
        <p className="text-gray-400 text-[rem] ">
          Automator provide multiple tools to automate your small hectic task
          like filling form ,sending mails,etc
        </p>
      </div>

      <div className="bg-[white]  w-[28rem]   py-1  group  flex gap-4 items-center justify-between rounded-full">
        <div className="text-[1.1rem] ml-10 text-gray-900 font-semibold flex gap-2 items-center">
          Start Automating your task{" "}
          <FaArrowRightLong className="transform transition-transform duration-300 translate-y-[2.5px] group-hover:translate-x-2" />{" "}
        </div>{" "}
        <Link href={"/dashboard"}>
          <Button className="rounded-full purple-button mr-2 ">
            Go to dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
